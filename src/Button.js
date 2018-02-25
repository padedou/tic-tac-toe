export default class Button extends PIXI.Sprite {
    constructor(x, y, width, height, counter) {
        super();
        this.text;
        this.x = x;
        this.y = y;
        this.interactive = true;
        this.on('click', this.clicked);
        this.generateTextureAndText(width, height);
    }

    generateTextureAndText(width, height) {
        // generate the texture
        const gfx = new PIXI.Graphics();
        gfx.beginFill(0xffffff, 0.5);
        gfx.drawRoundedRect(0, 0, width, height);
        gfx.endFill();
        this.texture = gfx.generateCanvasTexture();

        // create the text object
        this.text = new PIXI.Text();
        this.text.anchor = new PIXI.Point(0.5, 0.5);
        this.text.x = this.width / 2;
        this.text.y = this.height / 2;
        this.addChild(this.text);
    }

    setText(val, style) {
        // Set text to be the value passed as a parameter
        this.text.text = val;
        // Set style of text to the style passed as a parameter
        this.text.style = style;
    }

    clicked() {
        console.log('Test button clicked');
    }
}