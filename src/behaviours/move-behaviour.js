import {BehaviourBase} from "./behaviour-base.js";

export class MoveBehaviour extends BehaviourBase {
    constructor(x, y, time) {
        super();

        this._endX = x;
        this._endY = y;
        this._time = time;
        this._step = 0;
    }

    initialize(target) {
        this._startX = target.x;
        this._startY = target.y;
        super.initialize();
    }

    update(target) {
        if (this.isRunning != true) return;

        this._step += this._time;
        target.x = crsCanvas.math.lerp(this._startX, this._endX, this._step);
        target.y = crsCanvas.math.lerp(this._startY, this._endY, this._step);

        return this._step >= 1;
    }
}