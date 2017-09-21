const Circle =  function (centerX, centerY, radius, color) {
  this.centerX = centerX;
  this.centerY = centerY;
  this.radius = radius;
  this.color = color;
};

Circle.prototype.render = function (ctx) {
  ctx.fillStyle = '#000000';
  ctx.beginPath();
  ctx.arc(
    this.centerX,
    this.centerY,
    this.radius,
    0,
    2 * Math.PI,
    false
  );

  ctx.fill();
};
