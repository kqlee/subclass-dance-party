var Jumper = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

Jumper.prototype = Object.create(makeDancer.prototype);
Jumper.prototype.constructor = Jumper;
Jumper.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.animate({top: '+=20'}, this.timeBetweenSteps/2, (function(){
    this.$node.animate({top: '-=20'}, this.timeBetweenSteps/2);
  }).bind(this));
};