// METHOD 1 :

const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task is complete");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise consumed");
});

// METHOD 2 :

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async task 2 resolve");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Chai", email: "code@example.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;

    if (!error) {
      resolve({ username: "anish", password: "123" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log("The promise is either resolved or rejected"));

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;

    if (!error) {
      resolve({ username: "anish", password: "123" });
    } else {
      reject("ERROR: JS went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

// USING "FETCH" KEYWORD

// async function getRandomUser() {
//   try {
//     const response = await fetch(
//       "https://api.freeapi.app/api/v1/public/randomusers/user/random"
//     );
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("ERROR: ", error); 
//   }
// }

// getRandomUser();


// USING "THEN" 

fetch("https://api.freeapi.app/api/v1/public/randomusers/user/random").then((response) => {
  return response.json()
}).then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);

})