"use strict";

window.addEventListener("load", initApp);

function initApp() {
    // Event Listeners
    document.querySelector("#form-create").addEventListener("submit", createUser);
}

function createUser(event) {
    event.preventDefault();

    const name = this.name.value;
    const title = this.title.value;
    const mail = this.mail.value;
    const image = this.image.value;

    console.log(name);
    console.log(title);
    console.log(mail);
    console.log(image);

    // validate user info
}
