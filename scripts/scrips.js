const DomElement = function (
  selector,
  height,
  width,
  bg,
  fontSize,
  position = "block"
) {
  this.selector = selector;
  this.height = parseFloat(height);
  this.width = parseFloat(width);
  this.bg = bg;
  this.fontSize = parseFloat(fontSize);
  this.position = position;
  let elem;

  this.createElem = function () {
    if (this.selector.substring(0, 1) == ".") {
      elem = document.createElement("div");
      elem.classList.add(this.selector.substring(1, this.selector.lenght));
    } else {
      elem = document.createElement("p");
      elem.id = this.selector.substring(1, this.selector.lenght);
    }
    elem.style.cssText = `height:${this.height}px;width:${this.width}px;background:${bg};font-size:${this.fontSize}px;position:${this.position};`;
    elem.textContent = "Block";
    document.body.appendChild(elem);
  };

  this.move = function (direction) {
    const coordinats = elem.getBoundingClientRect();

    switch (direction) {
      case "up":
        elem.style.top = (coordinats.top - 10).toString() + "px";
        break;
      case "right":
        elem.style.left = (coordinats.left + 10).toString() + "px";
        break;
      case "down":
        elem.style.top = (coordinats.top + 10).toString() + "px";

        break;
      case "left":
        elem.style.left = (coordinats.left - 10).toString() + "px";

        break;
    }
  };
};

const block1 = new DomElement("#block", "100", "100", "red", "24px");

const square = new DomElement(
  ".block",
  "100px",
  "100px",
  "yellow",
  24,
  "absolute"
);

document.addEventListener("DOMContentLoaded", function () {
  block1.createElem();
  square.createElem();
});

document.addEventListener("keydown", function (e) {
  switch (e.key) {
    case "ArrowUp":
    case "w":
      square.move("up");

      break;
    case "ArrowRight":
    case "d":
      square.move("right");
      break;
    case "ArrowDown":
    case "s":
      square.move("down");
      break;
    case "ArrowLeft":
    case "a":
      square.move("left");
      break;
  }
});
