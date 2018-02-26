import * as PIXI from 'pixi.js';
import Button from './Button';

const app = new PIXI.Application({
    width: 350,
    height: 650,
    backgroundColor: 0x061639
});

document.body.appendChild(app.view);