import Button from './Button';
import { colorText, colorTile, colorMarked } from './colors';

const txtStyleButtons = {fill: colorText};

export default class StartScreen extends PIXI.Container {
    constructor(appWidth, appHeight, setWhoIsPlaying) {
        super();

        this.btnSelectX = new Button(0, appHeight / 2, appWidth / 2, 50, colorTile, 1, 'X', txtStyleButtons);
        this.btnSelectO = new Button(appWidth / 2, appHeight / 2, appWidth / 2, 50, colorTile, 1, 'O', txtStyleButtons);
        this.txtSelect = new PIXI.Text();
        
        this.btnSelectX.on('mouseover', this.handleMouseOver);
        this.btnSelectO.on('mouseover', this.handleMouseOver);
        this.btnSelectX.on('mouseout', this.handleMouseOut);
        this.btnSelectO.on('mouseout', this.handleMouseOut);
        this.btnSelectX.on('click', () => {
            setWhoIsPlaying(true);
        });
        this.btnSelectO.on('click', () => {
            setWhoIsPlaying(false);
        });

        this.txtSelect.text = 'Select X or O';
        this.txtSelect.style = new PIXI.TextStyle({ fill: colorText });
        this.txtSelect.anchor = new PIXI.Point(0.5, 0.5);
        this.txtSelect.x = appWidth / 2 - 15;
        this.txtSelect.y = appHeight / 2 - 100;


        this.addChild(this.txtSelect);
        this.addChild(this.btnSelectX);
        this.addChild(this.btnSelectO);
    }

    handleMouseOver(e) {
        e.currentTarget.color = colorMarked;
        e.currentTarget.generateTextureAndText();
    }

    handleMouseOut(e) {
        e.currentTarget.color = colorTile;
        e.currentTarget.generateTextureAndText();
    }
}