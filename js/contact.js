const inputs = document.querySelectorAll(".input");
const button = document.querySelector("#send-mail");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}

function sendMail() {
    let mailtoRef = "mailto:alain1.nguyen@epitech.eu?subject=";
    const subject = document.getElementsByName("object")[0];
    mailtoRef += subject.value.replaceAll(" ", "%20");
    mailtoRef += "&body=";

    const username = document.getElementsByName("name")[0];
    mailtoRef += "%5B" + username.value.replaceAll(" ", "%20") + "%5D%20%3A%20";
    
    const messageElement = document.getElementsByName("message")[0];
    const messageValueWithoutSpace = messageElement.value.replaceAll(" ", "%20");
    const body = messageValueWithoutSpace.replaceAll("\n", "%0D%0A");
    mailtoRef += body;
    const a = document.getElementById("send-mail");
    a.href = mailtoRef;
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});

button.addEventListener("click", sendMail);