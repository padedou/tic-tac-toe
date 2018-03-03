import * as PIXI from 'pixi.js';
import Button from './Button';
import Tile from './Tile';
import StartScreen from './StartScreen';
import Game from './Game';

const app = new PIXI.Application({
    //width: 330,
    //height: 400,
    width: 600,
    height: 800,
    backgroundColor: 0x333333
});
let xIsPlaying = true;
const startScreen = new StartScreen(app.renderer.width, app.renderer.height, setPlayerAndStart);
const tileState = {
    played: false,
    x_o: ''
};
const tiles = [];
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
const game = new Game(app.renderer.width, app.renderer.height, getXIsPlaying, moveMade);

for (let i = 0; i < 9; i++) {
    tiles.push({} = {...tileState});
}

//app.stage.addChild(startScreen);
app.stage.addChild(game);

document.body.appendChild(app.view);

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
    xIsPlaying = x;
    app.stage.removeChildren();
    app.stage.addChild(game);
}

function checkGameEnd() {
    let shouldEnd = false;
    let winner = '';

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
}