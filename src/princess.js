var Princess = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src="Characters/princess.png" class="character rotate">');
  this.setPosition();
};

Princess.prototype = Object.create(makeDancer.prototype);
Princess.prototype.constructor = Princess;
Princess.prototype.step = function() {
  makeDancer.prototype.step.call(this);
};