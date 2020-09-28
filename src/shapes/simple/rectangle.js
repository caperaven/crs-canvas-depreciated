import {Graphic} from "./../graphic.js";

export class Rectangle extends Graphic {
    constructor(x, y, width, height, args) {
        super(x, y, args);
        this._width = width;
        this._height = height;
    }

    draw(ctx) {
        ctx.rect(this.x, this.y, this._width, this._height);
        super.draw(ctx);
        return this;
    }
}