// problem 1
// Random Promise

let pr = new Promise(function (res, rej) {
  let generatedNumber = Math.round(Math.random() * 10);

  if (generatedNumber > 7) {
    res(generatedNumber);
  } else {
    rej(generatedNumber);
  }
});

pr.then(function (values) {
  console.log('resolved number ' + values);
}).catch(function (values) {
  console.log('rejected number ' + values);
});
