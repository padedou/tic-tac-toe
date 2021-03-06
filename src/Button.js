// Code based on the example:
// https://sprite-storm.com/tutorial/pixi-tutorial/dynamic-button-class-pixi-js/

export default class Button extends PIXI.Sprite {
    constructor(x = 0, y = 0, width = 100, height = 50, color = 0xfffffff, alpha = 1, txtDescription = 'Button', txtStyleOptions = {}) {
        super();
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.txtDescription = txtDescription;
        this.color = color;
        this.alpha = alpha;
        this.txtStyleOptions = txtStyleOptions;
        this.interactive = true;
        this.generateTextureAndText(new PIXI.TextStyle(this.txtStyleOptions));
    }

    generateTextureAndText(txtStyle = new PIXI.TextStyle(this.txtStyleOptions)) {
        const gfx = new PIXI.Graphics();
        const text = new PIXI.Text();

        this.removeChildren();

        // generate the texture
        gfx.beginFill(this.color, this.alpha);
        gfx.drawRoundedRect(0, 0, this.width, this.height);
        gfx.endFill();
        this.texture = gfx.generateCanvasTexture();

        // create the text object
        text.anchor = new PIXI.Point(0.5, 0.5);
        text.x = this.width / 2;
        text.y = this.height / 2;
        text.text = this.txtDescription;
        text.style = txtStyle;
        
        this.addChild(text);
    }

    set txtStyle(styleProperties) {
        this.txtStyleOptions = styleProperties;
        this.generateTextureAndText();
    }
}