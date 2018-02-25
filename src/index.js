import * as PIXI from 'pixi.js';
import Button from './Button';

const app = new PIXI.Application({
    width: 350,
    height: 650,
    backgroundColor: 0x061639
});

const button = new Button(50, 50, 100, 100);

button.setText("Test Button");
app.stage.addChild(button);

document.body.appendChild(app.view);