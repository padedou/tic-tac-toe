import Button from './Button';

export default class Tile extends Button {
    constructor(x, y, width, height, cbXIsPlaying, cbMoveMade) {
        super(x, y, width, height, 0x2B4A6F, 1, '');
        this.cbXIsPlaying = cbXIsPlaying;
        this.cbMoveMade = cbMoveMade;
    }
};