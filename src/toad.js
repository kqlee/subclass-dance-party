var Toad = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src="Characters/toad.png" class="character spinner">');
  this.setPosition();
};

Toad.prototype = Object.create(makeDancer.prototype);
Toad.prototype.constructor = Toad;
Toad.prototype.step = function() {
  makeDancer.prototype.step.call(this);
};