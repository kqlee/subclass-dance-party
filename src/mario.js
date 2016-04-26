var Mario = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

Mario.prototype = Object.create(makeDancer.prototype);

Mario.prototype.constructor = Mario;

Mario.prototype.step = function() {
  makeDancer.prototype.step.call(this);

};