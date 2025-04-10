// From ES6

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}abs`;
  }

  changeUsername() {
    return`${this.username.toUpperCase()}`
  }
}

const User1 = new User("code", "code@gmail.com", "123");

console.log(User1.encryptPassword());
console.log(User1.changeUsername());

// Before ES6

