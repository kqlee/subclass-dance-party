var Koopa = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src="Characters/koopa.png" class="character spinner">');
  this.setPosition();
};

Koopa.prototype = Object.create(makeDancer.prototype);

Koopa.prototype.constructor = Koopa;

Koopa.prototype.step = function() {
  makeDancer.prototype.step.call(this);
};