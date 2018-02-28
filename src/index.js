import * as PIXI from 'pixi.js';
import Button from './Button';
import Tile from './Tile';
import StartScreen from './StartScreen';

const app = new PIXI.Application({
    width: 350,
    height: 650,
    backgroundColor: 0x333333
});
let xIsPlaying = true;
const startScreen = new StartScreen(app.renderer.width, app.renderer.height, setPlayerAndStart);

app.stage.addChild(startScreen);

document.body.appendChild(app.view);

function getXIsPlaying() {
    return true && xIsPlaying;
}

function moveMade() {
    console.log('moveMade called');
    xIsPlaying = !xIsPlaying;
}

function setPlayerAndStart(x) {
    xIsPlaying = x;
    // TODO: Change to the game screen.
}