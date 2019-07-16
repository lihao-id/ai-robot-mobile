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
  if(!this.currentStart){
      this.currentStart = 0;
  }
  this.anticlockwise = opt.anticlockwise; //是否为逆时针
};

RotateCircle.prototype = new Circle();

RotateCircle.prototype._drawDone = function() {
  this._draw(this.currentStart, this.currentStart + 100);
};

RotateCircle.prototype.rotate = function() {
  let _this = this;

  interval(function() {
    //如果是顺时针
    if (_this.anticlockwise === false) {
      _this.currentStart = _this.currentStart + 0.1;
    } else {
      //如果是逆时针
      _this.currentStart = _this.currentStart - 0.1;
    }
    _this._drawDone(_this.currentStart, 100);
  }, 50);
};

export default RotateCircle;
