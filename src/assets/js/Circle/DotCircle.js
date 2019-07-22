import { delay } from "utils/Util";

import Circle from "./Circle";

var DotCircle = function(opt) {
  Circle.call(this, opt);
  this.lineDash = undefined;
  this.lineDashOffset = undefined;

  this.n = opt.n; //被分为几等份
};

DotCircle.prototype = new Circle();

DotCircle.prototype.drawDone = async function() {
  for (let i = 0; i < this.n; i++) {
    let start = this.start - this.length / 2 + (i * 100) / this.n;
    await delay(70);
    this._draw(start, start + this.length);
  }
};

export default DotCircle;
