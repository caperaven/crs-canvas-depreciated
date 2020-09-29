export function updateBehaviours(behaviours, entity) {
    for (let behaviour of behaviours) {
        const done = behaviour.update(entity);

        if (done == true) {
            behaviour.stop()
        }
    }
}