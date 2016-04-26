var Bowser = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

Bowser.prototype = Object.create(makeDancer.prototype);

Bowser.prototype.constructor = Bowser;

Bowser.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};