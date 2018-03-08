import { colorTile, colorLine } from './colors';
import Tile from './Tile';

export default class Game extends PIXI.Container {
    constructor(appWidth, appHeight, getXIsPlaying, moveMade) {
        super();

        this.appWidth = appWidth;
        this.appHeight = appHeight;
        this.getXIsPlaying = getXIsPlaying;
        this.moveMade = moveMade;

        //this.init();
    }

    init() {
        const lines = new PIXI.Graphics();
        const arrTiles = [];
        const lineWidth = 10;
        const tileWidth = this.appWidth - (this.appWidth * 2/3) - lineWidth / 2;
        const tileHeight = this.appHeight - (this.appHeight * 2/3) - lineWidth / 2; 
        // First vertical line's points
        const line_1_x1 = this.appWidth - (this.appWidth * 2/3);
        const line_1_y1 = 0;
        const line_1_x2 = line_1_x1;
        const line_1_y2 = this.appHeight;
        // Second vertical line's points
        const line_2_x1 = line_1_x1 * 2;
        const line_2_y1 = 0;
        const line_2_x2 = line_2_x1;
        const line_2_y2 = this.appHeight;
        // First horizontal line's points
        const line_3_x1 = 0;
        const line_3_y1 = this.appHeight - (this.appHeight * 2/3);
        const line_3_x2 = this.appWidth;
        const line_3_y2 = line_3_y1;
        // Second horizontal line's points
        const line_4_x1 = 0;
        const line_4_y1 = line_3_y1 * 2;
        const line_4_x2 = this.appWidth;
        const line_4_y2 = line_4_y1;

        lines.lineStyle(lineWidth, colorLine, 1);

        // Draw first vertical line
        lines.moveTo(line_1_x1, line_1_y1);
        lines.lineTo(line_1_x2, line_1_y2);
        // Draw second vertical line
        lines.moveTo(line_2_x1, line_2_y1);
        lines.lineTo(line_2_x2, line_2_y2);
        // Draw first horizontal line
        lines.moveTo(line_3_x1, line_3_y1);
        lines.lineTo(line_3_x2, line_3_y2);
        // Draw second horizontal line
        lines.moveTo(line_4_x1, line_4_y1);
        lines.lineTo(line_4_x2, line_4_y2);

        // Create 3 groups of 3 Tile instances each
        for (let i = 0; i < 3; i++) {
            arrTiles.push(new Tile(
                0,
                i * (tileHeight + lineWidth / 2 + 3),
                tileWidth,
                tileHeight,
                this.getXIsPlaying,
                this.moveMade
            ));
            arrTiles.push(new Tile(
                tileWidth + lineWidth,
                i * (tileHeight + lineWidth / 2 + 3),
                tileWidth - lineWidth / 2,
                tileHeight,
                this.getXIsPlaying,
                this.moveMade
            ));
            arrTiles.push(new Tile(
                2 * tileWidth + lineWidth / 2 + lineWidth,
                i * (tileHeight + lineWidth / 2 + 3),
                tileWidth,
                tileHeight,
                this.getXIsPlaying,
                this.moveMade
            ));    
        }

        // Add an id proteperty for each tile.
        // The id corresponds to the position each tile has on the game board.
        for (let i = 0; i < arrTiles.length; i++) {
            arrTiles[i].id = i;
        }

        // TODO: Maybe before adding childeren the container should be empty
        this.removeChildren();
        arrTiles.forEach((tile) => {
            this.addChild(tile);
        });
        this.addChild(lines);
    }
}