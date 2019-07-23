const Radar = function(opt) {
  if (!opt) {
    return;
  }

  let { element, color, width, height, point, radius } = opt;

  this.element = element;
  this.color = color;
  this.width = width;
  this.height = height;
  this.point = point;
  this.radius = radius;
};

Radar.prototype = {
  constructor: Radar,
  draw() {
    let c = this.element;

    var ctx = c.getContext("2d");
    var ww, wh;
    // var color_gold = "0,255,255";
    var color_gold = this.color;
    ctx.restore();
    ctx.translate(this.point.x, this.point.y);

    var enemies = Array(10)
      .fill({})
      .map(obj => {
        return {
          r: Math.random() * this.radius, //被扫描的物体出现范围的半径
          deg: Math.random() * 360,
          opacity: 0
        };
      });

    const innerDraw = () => {
      time += 1;

      ctx.fillStyle = "#111";
      ctx.beginPath();
      ctx.rect(-2000, -2000, 4000, 4000);
      ctx.fill();

      ctx.strokeStyle = "rgba(255,255,255,0.1)";
      ctx.moveTo(-ww / 2, 0);
      ctx.lineTo(ww / 2, 0);
      ctx.moveTo(0, -wh / 2);
      ctx.lineTo(0, wh / 2);
      ctx.stroke();

      //画雷达扫描仪
      ctx.strokeStyle = Color(1);
      var r = this.radius; //雷达扫描仪半径
      //   var deg = time;
      //   var newpoint = Point(r, deg);
      var line_deg = (time / 2) % 360;

      //雷达扫描仪的扇形大小
      var line_deg_len = 100;

      for (var i = 0; i < line_deg_len; i++) {
        // var deg = (time-i);
        var deg1 = line_deg - i - 1;
        var deg2 = line_deg - i;

        var point1 = Point(r, deg1);
        var point2 = Point(r, deg2);
        var opacity = 1 - i / line_deg_len - 0.3;
        if (i == 0) opacity = 1;
        ctx.beginPath();
        ctx.fillStyle = Color(opacity);
        ctx.moveTo(0, 0);
        ctx.lineTo(point1.x, point1.y);
        ctx.lineTo(point2.x, point2.y);
        ctx.fill();
      }

      //画被扫描的目标
      enemies.forEach(function(obj) {
        ctx.fillStyle = Color(obj.opacity);
        var obj_point = Point(obj.r, obj.deg);

        ctx.beginPath();
        ctx.arc(obj_point.x, obj_point.y, 2, 0, 2 * Math.PI); //画被被发现物体中间的小点
        ctx.fill();

        // ctx.strokeStyle = Color(obj.opacity);
        // var x_size = 6;
        // ctx.lineWidth = 4;
        // ctx.beginPath();
        // ctx.moveTo(obj_point.x - x_size, obj_point.y + x_size);
        // ctx.lineTo(obj_point.x + x_size, obj_point.y - x_size);
        // ctx.moveTo(obj_point.x + x_size, obj_point.y + x_size);
        // ctx.lineTo(obj_point.x - x_size, obj_point.y - x_size);
        // ctx.fill();

        //画被发现物体
        if (Math.abs(obj.deg - line_deg) <= 1) {
          obj.opacity = 1;
        }
        obj.opacity *= 0.99;

        ctx.strokeStyle = Color(obj.opacity);
        ctx.lineWidth = 1;
        ctx.beginPath();

        // let radius = 10 * (1 / (obj.opacity + 0.0001));
        let radius = 10 * (1 / (obj.opacity + 0.0001));
        if (radius > 30) {
          return;
        }

        //画被发现物体的外圆
        //创建渐变
        let gradient = ctx.createRadialGradient(
          obj_point.x,
          obj_point.y,
          0,
          obj_point.x,
          obj_point.y,
          radius
        );
        gradient.addColorStop(0, "rgba(255,255,255,0)");
        gradient.addColorStop(0.4, "rgba(255,255,255,0)");
        gradient.addColorStop(1, Color(0.2));
        ctx.fillStyle = gradient;

        ctx.arc(obj_point.x, obj_point.y, radius, 0, 2 * Math.PI);
        ctx.fill();

        //画被发现物体的内圆
        if (radius > 15) {
          let innerRadius = radius / 3;
          //创建渐变
          let gradient = ctx.createRadialGradient(
            obj_point.x,
            obj_point.y,
            0,
            obj_point.x,
            obj_point.y,
            innerRadius
          );
          gradient.addColorStop(0, "rgba(255,255,255,0)");
          gradient.addColorStop(0.4, "rgba(255,255,255,0)");
          gradient.addColorStop(1, Color(0.1));
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(obj_point.x, obj_point.y, innerRadius, 0, 2 * Math.PI);
          ctx.fill();
        }
      });
    };

    setInterval(innerDraw, 10);
    var time = 0;

    var deg_to_pi = Math.PI / 180;

    function Point(r, deg) {
      return {
        x: r * Math.cos(deg_to_pi * deg),
        y: r * Math.sin(deg_to_pi * deg)
      };
    }

    function Color(op) {
      return "rgba(" + color_gold + "," + op + ")";
    }
  }
};

export default Radar;
