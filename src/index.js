import {initialize} from "./canvas/canvas.js";
import {Scene} from "./canvas/scene.js";
import {lerp} from "./utils/math.js"

import {Entity} from "./shapes/entity.js";
import {Graphic} from "./shapes/graphic.js";

import {BehaviourBase} from "./behaviours/behaviour-base.js"
import {MoveBehaviour} from "./behaviours/move-behaviour.js";

import {Rectangle} from "./shapes/simple/rectangle.js";
import {Circle} from "./shapes/simple/circle.js";

globalThis.crsCanvas = globalThis.crsCanvas || {
    initialize: initialize,
    base: {
        Entity: Entity,
        Graphic: Graphic,
        BehaviourBase: BehaviourBase,
        Scene: Scene
    },
    shapes: {
        Rectangle: Rectangle,
        Circle: Circle
    },
    behaviours: {
        Move: MoveBehaviour
    },
    math: {
        lerp: lerp
    }
};
