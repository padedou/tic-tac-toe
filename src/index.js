import * as PIXI from 'pixi.js';
import Button from './Button';
import Tile from './Tile';
import StartScreen from './StartScreen';
import GameScreen from './GameScreen';
import EndGameScreen from  './EndGameScreen';

const app = new PIXI.Application({
    //width: 330,
    //height: 400,
    width: 600,
    height: 800,
    backgroundColor: 0x333333
});
let xIsPlaying = true;
let playerIsX = true;
const startScreen = new StartScreen(app.renderer.width, app.renderer.height, setPlayerAndStart);
const gameScreen = new GameScreen(app.renderer.width, app.renderer.height, getXIsPlaying, moveMade);
const endGameScreen = new EndGameScreen(app.renderer.width, app.renderer.height, undefined, showStartScreen);
const tileState = {
    played: false,
    x_o: ''
};
let tiles = [];
const winningTiles = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

//app.stage.addChild(startScreen);
//app.stage.addChild(game);
//app.stage.addChild(endGameScreen);

showStartScreen();

document.body.appendChild(app.view);

function initTiles() {
    tiles = [];
    for (let i = 0; i < 9; i++) {
        tiles.push({} = {...tileState});
    }
}

function showStartScreen() {
    initTiles();
    app.stage.removeChildren();
    app.stage.addChild(startScreen);
}

function getXIsPlaying() {
    return true && xIsPlaying;
}

function moveMade(tile_id) {
    tiles[tile_id].played = true;
    tiles[tile_id].x_o = xIsPlaying ? 'x' : 'o';
    checkGameEnd();
    xIsPlaying = !xIsPlaying;
}

function setPlayerAndStart(x) {
    xIsPlaying = true;
    playerIsX = x;
    gameScreen.init();
    app.stage.removeChildren();
    app.stage.addChild(gameScreen);
    console.log(`setPlayerAndStart, playerIsX: ${playerIsX}`);
}

function checkGameEnd() {
    //let shouldEnd = false;
    let winner = '';
    let playedTiles = 0;

    // Check if we have a winner
    winningTiles.forEach((winningTilesTuple) => {
        const firstTileId = winningTilesTuple[0];
        const secondTileId = winningTilesTuple[1];
        const thirdTileId = winningTilesTuple[2];

        if (tiles[firstTileId].played && tiles[secondTileId].played && tiles[thirdTileId].played) {
            if (tiles[firstTileId].x_o === tiles[secondTileId].x_o && tiles[secondTileId].x_o === tiles[thirdTileId].x_o) {
                winner = tiles[firstTileId].x_o;
            }   
        }
    });

    // Check if all tiles are played
    tiles.forEach((tile) => {
        if (tile.played) {
            playedTiles++;
        }
    });

    if (winner !== '') {
        // game should end

        console.log(`winner: ${winner}, playerIsX: ${playerIsX} playedTiles: ${playedTiles}`);

        if (winner === 'x' && !playerIsX) {
            endGameScreen.init('lost');
        } else if (winner === 'x' && playerIsX){
            endGameScreen.init('won');
        } else if (winner === 'o' && !playerIsX){
            endGameScreen.init('won');
        } else{
            endGameScreen.init('lost');
        }

        app.stage.removeChildren();
        app.stage.addChild(endGameScreen);
    } else if (playedTiles === 9) {
        endGameScreen.init('draw');
        app.stage.removeChildren();
        app.stage.addChild(endGameScreen);
    }
}