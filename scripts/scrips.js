const DomElement = function (
  selector,
  height,
  width,
  bg,
  fontSize,
  position = "block"
) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
  this.position = position;
  let elem;

  this.createElem = function () {
    if (this.selector.substring(0, 1) == ".") {
      elem = document.createElement("div");
      elem.classList.add(this.selector.substring(1, this.selector.lenght));
    } else {
      elem = document.createElement("p");
      elem.attributes("id");
      elem.id = this.selector.substring(1, this.selector.lenght);
    }
    elem.style.cssText = `height:${this.height};width:${this.width};background:${bg};font-size:${this.fontSize};position:${this.position};`;
    elem.textContent = "Block";
    document.body.appendChild(elem);
  };

  this.move = function (direction) {
    debugger;
    switch (direction) {
      case "up":
        elem.style.top =
          elem.style.top != ""
            ? (parseFloat(elem.style.top) - 10).toString() + "px"
            : "-10px";
        break;
      case "right":
        elem.style.left =
          elem.style.left != ""
            ? (parseFloat(elem.style.left) + 10).toString() + "px"
            : "10px";
        break;
      case "down":
        elem.style.top =
          elem.style.top != ""
            ? (parseFloat(elem.style.top) + 10).toString() + "px"
            : "10px";

        break;
      case "left":
        elem.style.left =
          elem.style.left != ""
            ? (parseFloat(elem.style.left) - 10).toString() + "px"
            : "-10px";

        break;
    }
  };
};

const block1 = new DomElement(".block", "100px", "50px", "red", 24);

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
