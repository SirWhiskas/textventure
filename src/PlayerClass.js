import {Organism} from './OrganismClass.js';

export class Player extends Organism {
    constructor(currentHitPoints, maximumHitPoints, gold, xp, level) {
        super(currentHitPoints, maximumHitPoints);
    }
}