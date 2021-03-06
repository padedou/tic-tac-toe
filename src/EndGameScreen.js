import Button from './Button';
import { colorTile, colorText, colorMarked } from './colors';

export default class EndGameScreen extends PIXI.Container {
    constructor(appWidth, appHeight, gameResult = 'draw', showStartScreen) {
        super();

        this.appWidth = appWidth;
        this.appHeight = appHeight;
        this.gameResult = gameResult;
        this.styleResultOptions = {
            fontSize: this.appWidth / 10,
            fontWeight: 'bold',
            align: 'center'
        };
        this.showStartScreen = showStartScreen;
        this.btnPlayAgain = new Button(this.appWidth / 3, this.appHeight / 2, appWidth / 4, 50, colorTile, 1, 'Restart', {fill: colorText});
        this.btnPlayAgain.on('click', showStartScreen);
        this.btnPlayAgain.on('mouseover', (e) => {
            e.currentTarget.color = colorMarked;
            e.currentTarget.generateTextureAndText();
        });
        this.btnPlayAgain.on('mouseout', (e) => {
            e.currentTarget.color = colorTile;
            e.currentTarget.generateTextureAndText();
        });

        this.init();
    }

    init(gameResult) {
        this.gameResult = gameResult;
        this.removeChildren();

        this.txtGameResult = new PIXI.Text();
        switch (this.gameResult) {
            case 'draw':
                this.txtGameResult.text = 'It\'s a draw';
                this.styleResultOptions.fill = 0x0000ff;
                break;
            case 'won':
                this.txtGameResult.text = 'You won';
                this.styleResultOptions.fill = 0x00ff00;
                break;
            case 'lost':
                this.txtGameResult.text = 'You lost';
                this.styleResultOptions.fill = 0xff0000;
        }
        this.txtGameResult.style = new PIXI.TextStyle(this.styleResultOptions);
        this.txtGameResult.anchor = new PIXI.Point(0.5, 0.5);
        this.txtGameResult.x = this.appWidth / 2 - 15;
        this.txtGameResult.y = this.appHeight / 2 - 100;

        this.addChild(this.txtGameResult);
        this.addChild(this.btnPlayAgain);
    }

    showResult(gameResult = 'draw') {
        this.gameResult = gameResult;
        this.init();
    }
}