let cards = document.querySelector('.cards');

let users = [];
fetch('https://randomuser.me/api/?results=5')
  .then((rawData) => rawData.json())
  .then((data) => {
    data.results.map((element) => {
      // users.push(...element.results);
      console.log(element);
      let card = document.createElement('div');
      card.classList.add('card');

      let img = document.createElement('img');
      img.classList.add('img');
      img.setAttribute('src', element.picture.thumbnail);

      let h2 = document.createElement('h2');
      h2.classList.add('heading');
      h2.textContent = element.name.first + '' + element.name.last;

      let email = document.createElement('p');
      email.classList.add('email');
      email.textContent = element.email;

      let details = document.createElement('div');
      details.classList.add('details');
      details.textContent = `${element.location.city}
       ${element.location.country} ${element.location.postcode}`;

      let age = document.createElement('span');
      age.classList.add('age');
      age.textContent = element.dob.age;

      let gender = document.createElement('span');
      gender.classList.add('gender');
      gender.textContent = element.gender;

      let country = document.createElement('p');
      country.classList.add('country');
      country.textContent = element.location.country;

      let button = document.createElement('button');
      button.classList.add('btn');

      cards.appendChild(card);
      card.appendChild(img);
      card.appendChild(h2);
      card.appendChild(email);
      card.appendChild(details);
      card.appendChild(img);
      card.appendChild(details);
      details.appendChild(age);
      details.appendChild(gender);
    });
  })
  .catch((err) => console.log(err));
