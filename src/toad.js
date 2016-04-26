var Toad = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

Toad.prototype = Object.create(makeDancer.prototype);

Toad.prototype.constructor = Toad;

Toad.prototype.step = function() {
  makeDancer.prototype.step.call(this);
};