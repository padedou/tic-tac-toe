import { colorTile, colorLine } from './colors';

export default class Game extends PIXI.Container {
    constructor(appWidth, appHeight) {
        super();

        this.appWidth = appWidth;
        this.appHeight = appHeight;

        this.init();
    }

    init() {
        const lines = new PIXI.Graphics();
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

        lines.lineStyle(10, colorLine, 1);

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

        this.addChild(lines);
    }
}