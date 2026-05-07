//by using the "extend" keyword we can take the values of another class (object template creation )
//it uses in where it want to use another class of values in that we will use

class Users {
  constructor(name, email, address) {
    this.name = name;
    this.email = email;
    this.address = address;
    this.role = 'user';
  }
  CheckRole() {
    console.log(`i am ${this.role}`);
  }
  CreateUser(text) {
    let p = document.createElement('p');
    p.textContent = `i am a ${text}-${this.name} `;
    document.body.appendChild(p);
  }
}
class Admin extends Users {
  //here extend means caprture all user class values
  constructor(name, email, address) {
    super(name, email, address); //super means call the parent constructor here parent is above constructor (always above)
    this.role = 'admin';
  }
  erase() {
    document.querySelectorAll('p').forEach((e) => {
      e.remove();
    });
  }
}

let u1 = new Users('sandeep', 'sandynai4587@gmail.com', 'kummari bazar');
let u2 = new Users('saliganti', 'sandynai4587@gmail.com', 'kummari bazar');
let admin = new Admin('sandeepsaliganti', 'sansas@gmail.com', 'snas');
