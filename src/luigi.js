var Luigi = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src="Characters/luigi.png" class="character extrastyle">');
  this.setPosition();
};

Luigi.prototype = Object.create(Jumper.prototype);

Luigi.prototype.constructor = Luigi;
