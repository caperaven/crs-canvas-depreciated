import {Graphic} from "./../graphic.js";

export class Circle extends Graphic {
    constructor(x, y, radius, args) {
        super(x, y, args);
        this._radius = radius;
        this._endAngle = Math.PI * 2;
    }

    draw(ctx) {
        ctx.arc(this.x, this.y, this._radius, 0, this._endAngle);
        super.draw(ctx);
        return this;
    }
}