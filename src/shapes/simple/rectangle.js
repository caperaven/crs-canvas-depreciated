import {Graphic} from "./../graphic.js";

export class Rectangle extends Graphic {
    constructor(x, y, width, height) {
        super(x, y);
        this._width = width;
        this._height = height;
    }

    draw(ctx) {
        ctx.rect(this.x, this.y, this._width, this._height);
        ctx.fillStyle = "coral";
        ctx.fill();

        return this;
    }
}