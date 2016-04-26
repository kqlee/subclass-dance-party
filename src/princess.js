var PrincessPeach = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

PrincessPeach.prototype = Object.create(makeDancer.prototype);

PrincessPeach.prototype.constructor = PrincessPeach;

PrincessPeach.prototype.step = function() {
  makeDancer.prototype.step.call(this);
};