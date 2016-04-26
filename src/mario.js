var Mario = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src="Characters/mario.png" class="character extrastyle">');
  this.setPosition();
};

Mario.prototype = Object.create(Jumper.prototype);
Mario.prototype.constructor = Mario;