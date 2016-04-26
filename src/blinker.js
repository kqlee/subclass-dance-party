var Blinker = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

Blinker.prototype = Object.create(makeDancer.prototype);
Blinker.prototype.constructor = Blinker;
Blinker.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.animate({opacity: 0}, this.timeBetweenSteps/2, (function(){
    this.$node.animate({opacity:1}, this.timeBetweenSteps/2);
  }).bind(this));
};