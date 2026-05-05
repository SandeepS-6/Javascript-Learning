let form = document.querySelector('form');
let role = document.querySelector('#role');
let name = document.querySelector('#name');
let bio = document.querySelector('#bio');
let cards = document.querySelector('#cards');
let rolesObject = {
  users: [],
  init: function () {
    form.addEventListener('submit', this.aaddProfile.bind(this));
  },
  aaddProfile: function (e) {
    e.preventDefault();
    this.addUsers();
  },
  addUsers: function () {
    this.users.push({
      role: role.value,
      name: name.value,
      bio: bio.value,
      photo: photo.value,
    });
    form.reset();
    this.showUsers();
  },
  showUsers: function () {
    cards.innerHTML = '';
    this.users.forEach((users, index) => {
      let div = document.createElement('div');
      let img = document.createElement('img');
      let h2 = document.createElement('h2');
      let p1 = document.createElement('p');
      let p2 = document.createElement('p');

      console.log(this);
      img.setAttribute('src', users.photo);
      h2.textContent = users.role;
      p1.textContent = users.name;
      p2.textContent = users.bio;

      div.appendChild(img);
      div.appendChild(h2);
      div.appendChild(p1);
      div.appendChild(p2);
      div.dataset.index = index;
      div.addEventListener('click', () => {
        this.removeUsers();
      });
      cards.appendChild(div);
    });
  },
  removeUsers: function (index) {
    this.users.splice(index, 1);
    this.showUsers();
  },
};

rolesObject.init();
// /https://i.pravatar.cc/150?img=1
