_currentHitPoints = new WeakMap();
_maximumHitPoints = new WeakMap();

export class Organism {
    constructor(currentHitPoints, maximumHitPoints) {
        _currentHitPoints.set(this, currentHitPoints);
        _maximumHitPoints.set(this, maximumHitPoints);
    }

    setCurrentHitPoints(value) {
        _currentHitPoints.set(this, value);
    }

    getCurrentHitPoints() {
        return _currentHitPoints.get(this);
    }

    setMaxiumHitPoints(value) {
        _maximumHitPoints.set(this, value);
    }

    getMaximumHitPoints() {
        return _maximumHitPoints.get(this);
    }

    renderProfile() {
        console.log("Profile =============================>");
        console.log(`Current Hit Points: ${this.getCurrentHitPoints()}`);
        console.log("=====================================>");
    }
}

module.exports = Organism;