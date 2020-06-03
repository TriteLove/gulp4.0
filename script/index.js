class Graph {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Line extends Graph {
  constructor(width, height) {
    super(width, height);
  }

  set width(w) {
    this.width = w;
  }

  get width() {
    return this.width;
  }

  set height(h) {
    this.height = h;
  }

  get height() {
    return this.height;
  }
}

let economic = new Line(600, 400);

economic.width = 1000;

console.log(economic.width);
