var Mario = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src="Characters/mario.png" class="character jump"></span>');
};

Mario.prototype = Object.create(makeDancer.prototype);

Mario.prototype.constructor = Mario;

Mario.prototype.step = function() {
  makeDancer.prototype.step.call(this);

};