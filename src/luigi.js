var Luigi = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

Luigi.prototype = Object.create(makeDancer.prototype);

Luigi.prototype.constructor = Luigi;

Luigi.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};