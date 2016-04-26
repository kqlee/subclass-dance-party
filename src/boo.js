var Boo = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src="Characters/boo.png" class="character blink">');
  this.setPosition();
};

Boo.prototype = Object.create(makeDancer.prototype);

Boo.prototype.constructor = Boo;

Boo.prototype.step = function() {
  makeDancer.prototype.step.call(this);
};