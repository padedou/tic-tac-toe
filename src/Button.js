export default class Button extends PIXI.Sprite {
    constructor(x, y, width, height, counter) {
        super();
        this.text;
        this.create(x, y, width, height);
    }

    create(x, y, width, height) {
        console.log('Button create');
        // generate the texture
        const gfx = new PIXI.Graphics();
        gfx.beginFill(0xffffff, 0.5);
        gfx.drawRoundedRect(0, 0, width, height);
        gfx.endFill();
        this.texture = gfx.generateCanvasTexture();

        this.x = x;
        this.y = y;

        // create the text object
        this.text = new PIXI.Text();
        this.text.anchor = new PIXI.Point(0.5, 0.5);
        this.addChild(this.text);

        this.interactive = true;
        this.on('click', this.clicked);
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