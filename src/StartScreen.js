import Button from './Button';
import { colorText, colorTile, colorMarked } from './colors';

const txtStyleButtons = {fill: colorText};

export default class StartScreen extends PIXI.Container {
    constructor(appWidth, appHeight) {
        super();
        this.btnSelectX = new Button(0, appHeight / 2, appWidth / 2, 50, colorTile, 1, 'X', txtStyleButtons);
        this.btnSelectO = new Button(appWidth / 2, appHeight / 2, appWidth / 2, 50, colorTile, 1, 'O');
        this.btnSelectO.txtStyle = txtStyleButtons;
        this.btnSelectX.on('mouseover', () => {
            this.btnSelectX.color = colorMarked;
            this.btnSelectX.generateTextureAndText();
        });
        this.btnSelectX.on('mouseout', () => {
            this.btnSelectX.color = colorTile;
            this.btnSelectX.generateTextureAndText();
        });
        this.addChild(this.btnSelectX);
        this.addChild(this.btnSelectO);
    }
}