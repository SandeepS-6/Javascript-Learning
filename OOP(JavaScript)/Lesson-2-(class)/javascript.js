class MilkProducts {
  constructor(milkItem, itemPrice, itemName, itemColor) {
    this.milkItem = milkItem;
    this.itemPrice = itemPrice;
    this.itemName = itemName;
    this.itemColor = itemColor;
  }
  remove() {
    document.querySelectorAll('p').forEach((e) => {
      if (e.style.color == this.itemColor) {
        e.remove();
      }
    });
  }
  kalakandProduct(text) {
    let p = document.createElement('p');
    p.textContent = text;
    p.style.color = this.itemColor;
    document.body.appendChild(p);
  }
}

let kalakand = new MilkProducts('kalakand', 20, 'milkyKalakand', 'black');
let kova = new MilkProducts('kova', 20, 'milkykova', 'blue');

// 1st created the class as the MilkProducts and inside constructur for being immediatly exicute when new is created (object)
// use another method where i that it can able to create the product
// added the remove mehtod used the forEach method to remove that particular color of text .MilkProducts
// created a 2 new object by using the "new" method.
