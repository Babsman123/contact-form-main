const btnForm = document.querySelector(".btn-form");

const inputs = document.querySelectorAll(".input");
const inputEmail = document.querySelector(".email-input");
const btnRadio = document.querySelectorAll(".button-input__radio");
const btnRadioBG = document.querySelectorAll(".button-input");
const btnConsent = document.querySelector(".consent-radio");
const textArea = document.querySelector(".message");

//ERROR MESSAGE FOR THE FORM
const errorMessage = document.querySelectorAll(".error");
const emailError = document.querySelector(".error-email");
const radioError = document.querySelector(".error-query");
const messageError = document.querySelector(".error-message");
const consentError = document.querySelector(".error-consent");

//SUCCESS FORM
const formSuccess = document.querySelector(".form-success");
const overlay = document.querySelector(".overlay");

console.log(overlay);
btnForm.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("submit");

  let inputValue = false;

  inputs.forEach((input, index) => {
    if (input.value) {
      inputs[index].classList.remove("error-input");
      errorMessage[index].classList.remove("display-error");
      inputValue = true;
    }
    if (!input.value) {
      inputs[index].style.border = "none";
      inputs[index].classList.add("error-input");
      errorMessage[index].classList.add("display-error");
      inputValue = false;
    }
  });

  //EMAIL VALUE
  const pattern = /[\w]+@[\w]+.[\w]+/g;
  const emailValue = inputEmail.value;
  const result = emailValue.match(pattern);

  let emailCondition = false;
  if (result) {
    emailCondition = true;
    inputEmail.classList.remove("message-error-display");
    emailError.style.display = "none";
  } else if (!result || emailValue === "") {
    emailCondition = false;
    inputEmail.style.border = "none";
    inputEmail.classList.add("message-error-display");
    emailError.style.display = "block";
  }

  //RADIO CONDITION
  let radioSelected = false;
  btnRadio.forEach((radio) => {
    if (radio.checked) {
      radioSelected = true;
      radioError.style.display = "none";
    }
  });

  if (!radioSelected) {
    radioError.style.display = "block";
  }

  //MESSAGE CONDITION
  let textInput = false;
  if (textArea.value) {
    textInput = true;
    console.log(textArea.value);
    textArea.classList.remove("message-error-display");
  }
  if (!textArea.value) {
    textInput = false;
    messageError.style.display = "block";
    textArea.style.border = "none";
    textArea.classList.add("message-error-display");
  }

  //CONSENT CONDITION
  let consentSelected = false;
  if (btnConsent.checked) {
    consentSelected = true;
    consentError.style.display = "none";
  }
  if (!consentSelected) {
    consentError.style.display = "block";
  }

  //CONDITION IF ALL INPUT ARE DONE TO PASS TO THE NEXT PAGE
  if (
    inputValue &&
    emailCondition &&
    radioSelected &&
    textInput &&
    consentSelected
  ) {
    overlay.style.display = "flex";
    formSuccess.style.display = "block";
  }
});
