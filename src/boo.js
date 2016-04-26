var Boo = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

Boo.prototype = Object.create(makeDancer.prototype);

Boo.prototype.constructor = Boo;

Boo.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};