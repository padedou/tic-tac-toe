import * as PIXI from 'pixi.js';
import Button from './Button';
import Tile from './Tile';

const app = new PIXI.Application({
    width: 350,
    height: 650,
    backgroundColor: 0x333333
});
let xIsPlaying = true;

document.body.appendChild(app.view);

function getXIsPlaying() {
    return true && xIsPlaying;
}

function moveMade() {
    console.log('moveMade called');
    xIsPlaying = !xIsPlaying;
}