var PrincessPeach = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src="Characters/princess.png" class="character rotate"></span>');
};

PrincessPeach.prototype = Object.create(makeDancer.prototype);

PrincessPeach.prototype.constructor = PrincessPeach;

PrincessPeach.prototype.step = function() {
  makeDancer.prototype.step.call(this);
};