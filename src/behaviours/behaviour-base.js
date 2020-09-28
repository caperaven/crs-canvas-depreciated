export class BehaviourBase {
    dispose() {
        this.stop();
    }

    initialize() {
        this.isRunning = true;
    }

    stop() {
        this.isRunning = false;
    }
}