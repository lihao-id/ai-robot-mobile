import Line from "./Line";

var GradientLine = function(opt) {
  Line.call(this, opt);
};

GradientLine.prototype = new Line();

GradientLine.prototype.draw = function() {
  this.clear();
  // if (this.alpha) {
  //   this.context.globalAlpha = this.alpha;
  // }

  let gradient = this.context.createLinearGradient(
    this.start.x,
    this.start.y,
    this.end.x,
    this.end.y
  );
  gradient.addColorStop(0, "rgba(255,255,255,0)");
  gradient.addColorStop(0.5, this.color);
  gradient.addColorStop(1, "rgba(255,255,255,0)");
  this.context.strokeStyle = gradient;

  this.context.lineWidth = this.width;
  this.context.beginPath();
  this.context.moveTo(this.start.x, this.start.y);
  this.context.lineTo(this.end.x, this.end.y);
  this.context.stroke();
};

export default GradientLine;
