var Yoshi = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src="Characters/yoshi.png" class="character">');
  this.setPosition();
};

Yoshi.prototype = Object.create(Blinker.prototype);

Yoshi.prototype.constructor = Yoshi;