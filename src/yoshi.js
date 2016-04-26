var Yoshi = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src="Characters/yoshi.png" class="character blink"></span>');
};

Yoshi.prototype = Object.create(makeDancer.prototype);

Yoshi.prototype.constructor = Yoshi;

Yoshi.prototype.step = function() {
  makeDancer.prototype.step.call(this);
};