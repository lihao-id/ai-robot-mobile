import Circle from "./Circle";

function interval(func, wait) {
  var interv = function() {
    func.call(null);
    setTimeout(interv, wait);
  };

  setTimeout(interv, wait);
}

var RotateCircle = function(opt) {
  Circle.call(this, opt);

  this.currentStart = opt.start;
  if (!this.currentStart) {
    this.currentStart = 0;
  }
  this.anticlockwise = opt.anticlockwise; //是否为逆时针
};

RotateCircle.prototype = new Circle();

RotateCircle.prototype._drawDone = async function() {
  await this.draw();

  interval(() => {
    //如果是顺时针
    if (this.anticlockwise === false) {
      this.currentStart = (this.currentStart + 0.1) % 100;
    } else {
      //如果是逆时针
      this.currentStart = (this.currentStart - 0.1) % 100;
    }
    this.clear();
    this._draw(this.currentStart, this.currentStart + this.length);
  }, 50);
};

RotateCircle.prototype.drawDone = function() {
  this._drawDone();
};

export default RotateCircle;
