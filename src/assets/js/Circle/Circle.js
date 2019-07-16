var Circle = function(opt) {
  if (!opt) {
    return;
  }

  this.point = opt.point;
  this.radius = opt.radius;
  this.element = opt.element;
  this.color = opt.color;
  this.lineWidth = opt.lineWidth;
  this.lineDash = opt.lineDash;
  this.lineDashOffset = opt.lineDashOffset;
  this.globalAlpha = opt.alpha; //透明度
  this.afterDrawDone = opt.afterDrawDone;

  this.context = this.element.getContext("2d");

  this.start = opt.start;
  if(!this.start){
      this.start = 0;
  }
  this.end = this.start + 100;

  this.n = this.start; //0 - 10
};

Circle.prototype = {
  constructor: Circle,
  _getAngle: function(n) {
    return ((n - 25) / 100) * Math.PI * 2;
  },
  canDraw() {
    return this.n < this.end;
  },
  _draw: function(start, n) {
    //初始化 context
    this.context.strokeStyle = this.color;
    this.context.lineWidth = this.lineWidth;
    if (this.lineDash) {
      this.context.setLineDash(this.lineDash);
    }
    if (this.globalAlpha) {
      this.context.globalAlpha = this.globalAlpha;
    }
    if (this.lineDashOffset) {
      this.context.lineDashOffset = this.lineDashOffset;
    }
    //清除画板
    this.context.clearRect(0, 0, 400, 400);
    this.context.beginPath();
    let startAngle = this._getAngle(start);
    let endAngle = this._getAngle(n);

    this.context.arc(
      this.point.x,
      this.point.y,
      this.radius,
      startAngle,
      endAngle,
      false
    );
    this.context.stroke();
  },
  draw: function(time) {
    let _this = this;
    let _time = time;

    (function f(time) {
      if (_this.canDraw() === false) {
        if (_this.afterDrawDone) {
          _this.afterDrawDone();
        }
        return;
      }

      setTimeout(function() {
        //控制速度
        if (_this.n >= _this.start && _this.n < _this.start + 25) {
          time = (_time * 4) / 3;
        } else if (_this.n >= _this.start + 25 && _this.n < _this.start + 50) {
          time = (_time * 3) / 4;
        } else if (_this.n >= _this.start + 50 && _this.n < _this.start + 75) {
          time = _time;
        } else {
          time = time + 1;
        }

        _this._draw(_this.start, ++_this.n);

        f(time, _this);
      }, time);
    })();
  }
};

export default Circle;
