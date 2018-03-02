import Button from './Button';
import { colorText } from './colors'

export default class Tile extends Button {
    constructor(x, y, width, height, cbXIsPlaying, cbMoveMade) {
        super(x, y, width, height, 0x2B4A6F, 1, '');
        this.cbXIsPlaying = cbXIsPlaying;
        this.cbMoveMade = cbMoveMade;
        this.txtStyleOptions = {
            fill: colorText,
            fontSize: (this.width) / 2,
            fontWeight: 'bold'
        };
        this.on('click', () => {
            if (this.txtDescription === '') {
                cbXIsPlaying() ? this.txtDescription = 'X' : this.txtDescription = 'O';
                this.generateTextureAndText();
                this.cbMoveMade(this.id);
            }
        });
    }
};