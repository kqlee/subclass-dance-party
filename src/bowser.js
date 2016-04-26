var Bowser = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src="Characters/bowser.png" class="character rotate">');
  this.setPosition();
};

Bowser.prototype = Object.create(makeDancer.prototype);

Bowser.prototype.constructor = Bowser;

Bowser.prototype.step = function() {
  makeDancer.prototype.step.call(this);
};