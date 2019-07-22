function Triangle(opt) {
  let { color, canvasWidth, element } = opt;

  this.color = color;

  this.canvasWidth = canvasWidth;
  this.canvasHeight = canvasWidth;
  this.element = element;

  this.context = this.element.getContext("2d");
}

Triangle.prototype = {
  constructor: Triangle,
  _clear() {
    //清除画板
    this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
  },
  draw() {
    let length = this.canvasHeight / Math.cos((30 / 180) * Math.PI);

    this._clear();
    this.context.fillStyle = this.color;
    this.context.moveTo(this.canvasWidth / 2, 0);
    this.context.lineTo(this.canvasWidth / 2 + length / 2, this.canvasHeight);
    this.context.lineTo(this.canvasWidth / 2 - length / 2, this.canvasHeight);
    this.context.fill();
  }
};

export default Triangle;
