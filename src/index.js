import {initialize} from "./canvas/canvas.js";
import {lerp} from "./utils/math.js"

import {Entity} from "./shapes/entity.js";
import {Graphic} from "./shapes/graphic.js";

import {BehaviourBase} from "./behaviours/behaviour-base.js"
import {MoveBehaviour} from "./behaviours/move-behaviour.js";

import {Rectangle} from "./shapes/simple/rectangle.js";

globalThis.crsCanvas = globalThis.crsCanvas || {
    initialize: initialize,
    base: {
        Entity: Entity,
        Graphic: Graphic,
        BehaviourBase: BehaviourBase
    },
    shapes: {
        Rectangle: Rectangle
    },
    behaviours: {
        Move: MoveBehaviour
    },
    math: {
        lerp: lerp
    }
};
