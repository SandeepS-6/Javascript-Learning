//global scope
console.log(this);

//function scope
function right() {
  console.log(this);
}

//object  scope

//inside the object the methods are written so in that this should be an object

let insideMethod = {
  name: 'sandeep',
  age: '26',
  method: function testThis() {
    let method2 = () => {
      console.log(this);
    };
    method2();
  },
};

insideMethod.method();

//event handler
document.querySelector('h1').addEventListener('click', function () {
  this.style.color = 'red';
});

//class nature

class nature {
  constructor() {
    this.a = 10;
    console.log(this);
  }
}

let checking = new nature();
