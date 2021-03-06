class Pyramid {

  static draw (context, polygon, center, height, minHeight, color, altColor) {
    let
      c = { x:center.x-ORIGIN_X, y:center.y-ORIGIN_Y },
      scale = CAM_Z / (CAM_Z-height),
      minScale = CAM_Z / (CAM_Z-minHeight),
      apex = Buildings.project(c, scale),
      a = { x:0, y:0 },
      b = { x:0, y:0 };

    for (let i = 0, il = polygon.length-3; i < il; i += 2) {
      a.x = polygon[i  ]-ORIGIN_X;
      a.y = polygon[i+1]-ORIGIN_Y;
      b.x = polygon[i+2]-ORIGIN_X;
      b.y = polygon[i+3]-ORIGIN_Y;

      if (minHeight) {
        a = Buildings.project(a, minScale);
        b = Buildings.project(b, minScale);
      }

      // backface culling check
      if ((b.x-a.x) * (apex.y-a.y) > (apex.x-a.x) * (b.y-a.y)) {
        // depending on direction, set shading
        if ((a.x < b.x && a.y < b.y) || (a.x > b.x && a.y > b.y)) {
          context.fillStyle = altColor;
        } else {
          context.fillStyle = color;
        }

        context.beginPath();
        this._triangle(context, a, b, apex);
        context.closePath();
        context.fill();
      }
    }
  }

  static _triangle (context, a, b, c) {
    context.moveTo(a.x, a.y);
    context.lineTo(b.x, b.y);
    context.lineTo(c.x, c.y);
  }

  static _ring (context, polygon) {
    context.moveTo(polygon[0]-ORIGIN_X, polygon[1]-ORIGIN_Y);
    for (let i = 2, il = polygon.length-1; i < il; i += 2) {
      context.lineTo(polygon[i]-ORIGIN_X, polygon[i+1]-ORIGIN_Y);
    }
  }

  static shadow (context, polygon, center, height, minHeight) {
    let
      a = { x:0, y:0 },
      b = { x:0, y:0 },
      c = { x:center.x-ORIGIN_X, y:center.y-ORIGIN_Y },
      apex = Shadows.project(c, height);

    for (let i = 0, il = polygon.length-3; i < il; i += 2) {
      a.x = polygon[i  ]-ORIGIN_X;
      a.y = polygon[i+1]-ORIGIN_Y;
      b.x = polygon[i+2]-ORIGIN_X;
      b.y = polygon[i+3]-ORIGIN_Y;

      if (minHeight) {
        a = Shadows.project(a, minHeight);
        b = Shadows.project(b, minHeight);
      }

      // backface culling check
      if ((b.x-a.x) * (apex.y-a.y) > (apex.x-a.x) * (b.y-a.y)) {
        // depending on direction, set shading
        this._triangle(context, a, b, apex);
      }
    }
  }

  static hitArea (context, polygon, center, height, minHeight, color) {
    let
      c = { x:center.x-ORIGIN_X, y:center.y-ORIGIN_Y },
      scale = CAM_Z / (CAM_Z-height),
      minScale = CAM_Z / (CAM_Z-minHeight),
      apex = Buildings.project(c, scale),
      a = { x:0, y:0 },
      b = { x:0, y:0 };

    context.fillStyle = color;
    context.beginPath();

    for (let i = 0, il = polygon.length-3; i < il; i += 2) {
      a.x = polygon[i  ]-ORIGIN_X;
      a.y = polygon[i+1]-ORIGIN_Y;
      b.x = polygon[i+2]-ORIGIN_X;
      b.y = polygon[i+3]-ORIGIN_Y;

      if (minHeight) {
        a = Buildings.project(a, minScale);
        b = Buildings.project(b, minScale);
      }

      // backface culling check
      if ((b.x-a.x) * (apex.y-a.y) > (apex.x-a.x) * (b.y-a.y)) {
        this._triangle(context, a, b, apex);
      }
    }

    context.closePath();
    context.fill();
  }
}
