var Line = function(opt) {
  if (!opt) {
    return;
  }

  let {
    start,
    end,
    width,
    color,
    alpha,
    element,
    canvasWidth,
    canvasHeight
  } = opt;

  this.start = start;
  this.end = end;
  this.width = width;
  this.color = color;
  this.alpha = alpha;
  this.element = element;
  this.canvasWidth = canvasWidth;
  this.canvasHeight = canvasHeight;

  this.context = this.element.getContext("2d");
};

Line.prototype = {
  constructor: Line,
  clear: function() {
    //清除画板
    this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
  },
  draw: function() {
    this.clear();
    //初始化 context
    this.context.strokeStyle = this.color;
    this.context.lineWidth = this.width;
    if (this.alpha) {
      this.context.globalAlpha = this.alpha;
    }

    this.context.beginPath();
    this.context.moveTo(this.start.x, this.start.y);
    this.context.lineTo(this.end.x, this.end.y);
    this.context.stroke();
  }
};

export default Line;
