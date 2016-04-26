var Luigi = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src="Characters/luigi.png" class="character jump">');
  this.setPosition();
};

Luigi.prototype = Object.create(makeDancer.prototype);

Luigi.prototype.constructor = Luigi;

Luigi.prototype.step = function() {
  makeDancer.prototype.step.call(this);
};