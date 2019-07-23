import { delay } from "utils/Util";

function Rectangle(opt) {
  let { color, lineWidth, canvasWidth, canvasHeight, element } = opt;

  this.color = color;
  this.lineWidth = lineWidth;

  this.canvasWidth = canvasWidth;
  this.canvasHeight = canvasHeight;
  this.element = element;

  this.time = 5;
  this.rightTopDifferent = this.canvasHeight / 4;
  this.leftRightDifferent = {
    value: this.canvasHeight / 8,
    length: this.canvasHeight / 5
  };
  this.bottomDifferent = {
    value: (this.canvasWidth * 2) / 5,
    width: this.canvasWidth / 20,
    height: this.canvasHeight / 10
  };

  this.context = this.element.getContext("2d");
}

Rectangle.prototype = {
  constructor: Rectangle,
  _clear() {
    //清除画板
    this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
  },
  async _draw() {
    const draw1DownFun = await this._draw1();
    const draw2DownFun = await this._draw2(draw1DownFun);
    const draw3DownFun = await this._draw3(draw2DownFun);
    const draw4DownFun = await this._draw4(draw3DownFun);
    const draw5DownFun = await this._draw5(draw4DownFun);
    const draw6DownFun = await this._draw6(draw5DownFun);
    const draw7DownFun = await this._draw7(draw6DownFun);
    const draw8DownFun = await this._draw8(draw7DownFun);
    await this._draw9(draw8DownFun);
  },
  draw() {
    this._clear();
    this.context.strokeStyle = this.color;
    this.context.lineWidth = this.lineWidth;

    this.context.beginPath();

    this._draw();
  },
  async _draw1() {
    let start = { x: 0, y: 0 };
    let end = { x: this.canvasWidth - this.rightTopDifferent, y: 0 };

    let currentEnd = { ...start };
    while (currentEnd.x < end.x) {
      currentEnd.x++;

      await delay(this.time);
      this._clear();
      this.context.moveTo(start.x, start.y);
      this.context.lineTo(currentEnd.x, currentEnd.y);
      this.context.stroke();
    }

    return () => {
      this._clear();
      this.context.moveTo(start.x, start.y);
      this.context.lineTo(end.x, end.y);
      this.context.stroke();
    };
  },
  async _draw2(beforeFun) {
    let start = { x: this.canvasWidth - this.rightTopDifferent, y: 0 };
    let end = { x: this.canvasWidth, y: this.rightTopDifferent };

    let deg = (45 * Math.PI) / 180;

    let currentEnd = { ...start };
    while (currentEnd.x < end.x) {
      currentEnd = {
        x: currentEnd.x + 1 * Math.cos(deg),
        y: currentEnd.y + 1 * Math.sin(deg)
      };

      await delay(this.time);

      this._clear();
      beforeFun();
      this.context.moveTo(start.x, start.y);
      this.context.lineTo(currentEnd.x, currentEnd.y);
      this.context.stroke();
    }

    return () => {
      beforeFun();
      this.context.moveTo(start.x, start.y);
      this.context.lineTo(end.x, end.y);
      this.context.stroke();
    };
  },
  async _draw3(beforeFun) {
    let start = { x: this.canvasWidth, y: this.rightTopDifferent };
    let end = {
      x: this.canvasWidth,
      y: this.rightTopDifferent + this.leftRightDifferent.value
    };

    let currentEnd = { ...start };
    while (currentEnd.y < end.y) {
      currentEnd.y++;

      await delay(this.time);

      this._clear();
      beforeFun();
      this.context.moveTo(start.x, start.y);
      this.context.lineTo(currentEnd.x, currentEnd.y);
      this.context.stroke();
    }

    return () => {
      beforeFun();
      this.context.moveTo(start.x, start.y);
      this.context.lineTo(end.x, end.y);
      this.context.stroke();
    };
  },
  async _draw4(beforeFun) {
    let start = {
      x: this.canvasWidth,
      y:
        this.rightTopDifferent +
        this.leftRightDifferent.value +
        this.leftRightDifferent.length
    };
    let end = {
      x: this.canvasWidth,
      y: this.canvasHeight
    };

    let currentEnd = { ...start };
    while (currentEnd.y < end.y) {
      currentEnd.y++;

      await delay(this.time);

      this._clear();
      beforeFun();
      this.context.moveTo(start.x, start.y);
      this.context.lineTo(currentEnd.x, currentEnd.y);
      this.context.stroke();
    }

    return () => {
      beforeFun();
      this.context.moveTo(start.x, start.y);
      this.context.lineTo(end.x, end.y);
      this.context.stroke();
    };
  },
  async _draw5(beforeFun) {
    let start = {
      x: this.canvasWidth,
      y: this.canvasHeight
    };
    let end = {
      x: this.canvasWidth - this.bottomDifferent.value,
      y: this.canvasHeight
    };

    let currentEnd = { ...start };
    while (currentEnd.x > end.x) {
      currentEnd.x--;

      await delay(this.time);

      this._clear();
      beforeFun();
      this.context.moveTo(start.x, start.y);
      this.context.lineTo(currentEnd.x, currentEnd.y);
      this.context.stroke();
    }

    return () => {
      beforeFun();
      this.context.moveTo(start.x, start.y);
      this.context.lineTo(end.x, end.y);
      this.context.stroke();
    };
  },
  async _draw6(beforeFun) {
    let start = {
      x: this.canvasWidth - this.bottomDifferent.value,
      y: this.canvasHeight
    };
    let end = {
      x:
        this.canvasWidth -
        this.bottomDifferent.value -
        this.bottomDifferent.width,
      y: this.canvasHeight - this.bottomDifferent.height
    };

    let width = this.bottomDifferent.width,
      height = this.bottomDifferent.height;
    let z = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));

    let sin = height / z;
    let cos = width / z;

    let currentEnd = { ...start };
    while (currentEnd.x > end.x) {
      currentEnd = {
        x: currentEnd.x - 1 * cos,
        y: currentEnd.y - 1 * sin
      };

      await delay(this.time);

      this._clear();
      beforeFun();
      this.context.moveTo(start.x, start.y);
      this.context.lineTo(currentEnd.x, currentEnd.y);
      this.context.stroke();
    }

    return () => {
      beforeFun();
      this.context.moveTo(start.x, start.y);
      this.context.lineTo(end.x, end.y);
      this.context.stroke();
    };
  },
  async _draw7(beforeFun) {
    let start = {
      x:
        this.canvasWidth -
        this.bottomDifferent.value -
        this.bottomDifferent.width,
      y: this.canvasHeight - this.bottomDifferent.height - 0.5
    };
    let end = {
      x: 0,
      y: this.canvasHeight - this.bottomDifferent.height - 0.5
    };
    let currentEnd = { ...start };
    while (currentEnd.x > end.x) {
      currentEnd.x--;

      await delay(this.time);

      this._clear();
      beforeFun();
      this.context.moveTo(start.x, start.y);
      this.context.lineTo(currentEnd.x, currentEnd.y);
      this.context.stroke();
    }

    return () => {
      beforeFun();
      this.context.moveTo(start.x, start.y);
      this.context.lineTo(end.x, end.y);
      this.context.stroke();
    };
  },
  async _draw8(beforeFun) {
    let start = {
      x: 0,
      y: this.canvasHeight - this.bottomDifferent.height
    };
    let end = {
      x: 0,
      y:
        this.rightTopDifferent +
        this.leftRightDifferent.value +
        this.leftRightDifferent.length
    };

    let currentEnd = { ...start };
    while (currentEnd.y > end.y) {
      currentEnd.y--;

      await delay(this.time);

      this._clear();
      beforeFun();
      this.context.moveTo(start.x, start.y);
      this.context.lineTo(currentEnd.x, currentEnd.y);
      this.context.stroke();
    }

    return () => {
      beforeFun();
      this.context.moveTo(start.x, start.y);
      this.context.lineTo(end.x, end.y);
      this.context.stroke();
    };
  },
  async _draw9(beforeFun) {
    let start = {
      x: 0,
      y: this.rightTopDifferent + this.leftRightDifferent.value
    };
    let end = {
      x: 0,
      y: 0
    };

    let currentEnd = { ...start };
    while (currentEnd.y > end.y) {
      currentEnd.y--;

      await delay(this.time);

      this._clear();
      beforeFun();
      this.context.moveTo(start.x, start.y);
      this.context.lineTo(currentEnd.x, currentEnd.y);
      this.context.stroke();
    }

    return () => {
      beforeFun();
      this.context.moveTo(start.x, start.y);
      this.context.lineTo(end.x, end.y);
      this.context.stroke();
    };
  }
};

export default Rectangle;
