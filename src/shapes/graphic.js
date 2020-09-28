import {Entity} from "./entity.js";

export class Graphic extends Entity {
    constructor(x, y, args) {
        super();
        this.x = x;
        this.y = y;

        if (args) {
            for (const [key, value] of Object.entries(args)) {
                this[key] = value;
            }
        }
    }

    draw(ctx) {
        ctx.fillStyle = this.fillStyle;
        ctx.strokeStyle = this.strokeStyle || "transparent";
        ctx.fill();
        ctx.stroke();
    }
}