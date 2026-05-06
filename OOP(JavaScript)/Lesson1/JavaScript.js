function createPencil(pendcilBrand, pencilPrice, pencilColor, pencilContent) {
  this.pendcilBrand = pendcilBrand;
  this.pencilPrice = pencilPrice;
  this.pencilColor = pencilColor;
}

createPencil.prototype.pencilContent = function (text, color) {
  let p = document.createElement('p');
  p.textContent = text;
  p.style.color = color;
  document.body.appendChild(p);
};

let pencil1 = new createPencil('nataraj', 20, 'red', 'hey this is nataraj');
let pencil2 = new createPencil('nataraj', 20, 'red', 'hey this is nataraj');
