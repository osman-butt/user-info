"use strict";

window.addEventListener("load", initApp);

function initApp() {
  // Event Listeners
  document.querySelector("#form-create").addEventListener("submit", createUser);
}

function createUser(event) {
  event.preventDefault();
  console.log(this);
  const name = this.name.value;
  const username = this.username.value;
  const age = this.age.value;
  const title = this.title.value;
  const mail = this.mail.value;
  const image = this.image.value;

  console.log(name);
  console.log(username);
  console.log(age);
  console.log(title);
  console.log(mail);
  console.log(image);

  removeInvalidInput(name, username, age, title, mail, image);
  // validate user info
  let isValid = validateUser(name, username, age, title, mail, image);
  console.log(isValid);
  if (isValid) {
    document.querySelector("#validate").textContent = "User is valid";
  } else {
    document.querySelector("#validate").textContent = "User is not valid";
    displayInvalidInput(name, username, age, title, mail, image);
  }
}

function validateUser(name, username, age, title, mail, image) {
  let isValidate = false;

  if (
    name.length > 2 &&
    title != "" &&
    (username != "" || (mail.length > 6 && mail.length < 20)) &&
    image != "" &&
    age >= 18
  ) {
    isValidate = true;
  }
  return isValidate;
}

function displayInvalidInput(name, username, age, title, mail, image) {
  if (!(name.length > 2)) {
    document.querySelector("#name").classList.add("invalid");
  }
  if (title == "") {
    document.querySelector("#title").classList.add("invalid");
  }
  if ((username == "" && mail.length < 6) || mail.length > 20) {
    document.querySelector("#username").classList.add("invalid");
    document.querySelector("#mail").classList.add("invalid");
  }
  if (image == "") {
    document.querySelector("#image").classList.add("invalid");
  }
  if (age < 18) {
    document.querySelector("#age").classList.add("invalid");
  }
}

function removeInvalidInput(name, username, age, title, mail, image) {
  document.querySelector("#name").classList.remove("invalid");
  document.querySelector("#name").offsetHeight;
  document.querySelector("#title").classList.remove("invalid");
  document.querySelector("#title").offsetHeight;
  document.querySelector("#username").classList.remove("invalid");
  document.querySelector("#username").offsetHeight;
  document.querySelector("#mail").classList.remove("invalid");
  document.querySelector("#mail").offsetHeight;
  document.querySelector("#image").classList.remove("invalid");
  document.querySelector("#image").offsetHeight;
  document.querySelector("#age").classList.remove("invalid");
  document.querySelector("#age").offsetHeight;
}
