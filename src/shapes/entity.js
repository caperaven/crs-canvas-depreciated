export class Entity {
    constructor() {
        this._behaviours = [];
    }

    dispose() {
        for (let behaviour of this._behaviours) {
            behaviour.dispose();
        }

        this._behaviours.length = 0;
    }

    addBehaviour(behaviour) {
        this._behaviours.push(behaviour);
        behaviour.initialize(this);
    }

    update() {
        for (let behaviour of this._behaviours) {
            const done = behaviour.update(this);

            if (done == true) {
                behaviour.stop()
            }
        }

        return this;
    }
}