let prom = new Promise(function (res, rej) {
  let randomNumber = Math.round(Math.random() * 10);
  if (randomNumber > 4) res(randomNumber);
  else randomNumber;
});

async function getResult() {
  try {
    let newPromises = await prom;
    console.log(newPromises);
  } catch (err) {
    console.log(err);
  }
}

getResult();
