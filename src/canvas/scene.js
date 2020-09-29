import {Entity} from "../shapes/entity.js";
import {updateBehaviours} from "./../utils/utils.js";

export class Scene extends Entity {
    constructor() {
        super();
        this.entities = [];
    }

    add(entity) {
        this.entities.push(entity);
    }

    updateAndDraw(ctx) {
        for (const entity of this.entities) {
            updateBehaviours(entity._behaviours, entity);
            updateBehaviours(this._behaviours, entity);
            entity.draw(ctx);
        }
    }
}