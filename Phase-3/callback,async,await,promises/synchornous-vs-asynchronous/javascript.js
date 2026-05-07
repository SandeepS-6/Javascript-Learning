function profile(fnc) {
  setTimeout(() => {
    fnc({
      name: 'sandeep',
      age: 24,
      dob: 27 - 2 - 2001,
    });
  }, 2000);
}

function getAllPosts(age, fnc) {
  console.log('checking all posts....');
  setTimeout(() => {
    fnc({
      age: age,
      id: 210,
      post: 'Biryani Cooking Video',
    });
  }, 3000);
}
function getAllLikes(age, post, fnc) {
  setTimeout(() => {
    fnc({
      age: age,
      id: 210,
      post: post,
      likes: 230,
    });
  }, 4000);
}

profile(function (data) {
  //this called as the "call back hell".
  console.log(`checking all posts of ${data.name}`);
  getAllPosts(data.age, function (data) {
    console.log(data);
    getAllLikes(data.age, data.post, function (data) {
      console.log('getting all likes from the Recent post....');
      console.log(data);
    });
  });
});
