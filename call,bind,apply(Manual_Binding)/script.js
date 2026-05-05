//call apply bind

//call method

let obj = {
  name: 'sandeep',
  age: 25,
};

//call

function test() {
  return this;
}

let thisone = test.call(obj);

console.log(thisone);

//apply

function abcd(a, b, c) {
  console.log(this, a, b, c);
}

abcd.apply(obj, [2, 2, 2]);

//bind

function bindMethod() {
  console.log(this);
}

let thistwo = bindMethod.bind(obj);

console.log(thistwo);
