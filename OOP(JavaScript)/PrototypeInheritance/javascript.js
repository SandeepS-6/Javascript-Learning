// one object of values or props or methods can use another object

let names = {
  name1: 'sandeep',
  name2: 'saligant',
  method: function () {
    console.log('names are defind');
  },
};

let names2 = Object.create(names);
names2.name3 = 'deepak';
names2.method();

//keyword
Object.create();
//it can create the new object with shared memory of the names object (1st object)
