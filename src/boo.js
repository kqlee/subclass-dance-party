var Boo = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src="Characters/boo.png" class="character">');
  this.setPosition();
};

Boo.prototype = Object.create(Blinker.prototype);

Boo.prototype.constructor = Boo;
