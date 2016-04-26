var Koopa = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

Koopa.prototype = Object.create(makeDancer.prototype);

Koopa.prototype.constructor = Koopa;

Koopa.prototype.step = function() {
  makeDancer.prototype.step.call(this);
};