let nameEl = document.getElementById("name");
let emailEl = document.getElementById("email");
let subscribeFormEl = document.getElementById("subscribeForm");
let nameErrMsgEl = document.getElementById("nameErrMsg");
let emailErrMsgEl = document.getElementById("emailErrMsg");

nameEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        nameErrMsgEl.textContent = "Required";
    } else {
        nameErrMsgEl.textContent = "";
    }
});

emailEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        emailErrMsgEl.textContent = "Required";
    } else {
        emailErrMsgEl.textContent = "";
    }
});

subscribeFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
});