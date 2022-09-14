// Contact Button Function
const fullName = document.getElementById("full-name");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phone-number");
const message = document.getElementById("message");
const sendBtn = document.getElementById("send-btn");
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const phoneNumberError = document.getElementById("phone-number-error");
const messageError = document.getElementById("message-error");

sendBtn.addEventListener("click", validateInputs);

//function checking inputs
function validateInputs() {
    if (fullName.value != "") {
        fullName.style.border = "none";
        fullName.style.borderBottom = "1px solid rgb(159, 159, 159)"
        validateName(fullName.value);
    } else {
        fullName.style.border = "2px solid red";
    }
    if (email.value != "") {
        email.style.border = "none";
        email.style.borderBottom = "1px solid rgb(159, 159, 159)"
        validateEmail(email.value);
    } else {
        email.style.border = "2px solid red";
    }
    if (phoneNumber.value != "") {
        phoneNumber.style.border = "none";
        phoneNumber.style.borderBottom = "1px solid rgb(159, 159, 159)"
        validatePhoneNumber(phoneNumber.value);
    } else {
        phoneNumber.style.border = "2px solid red";
    }
    if (message.value != "") {
        message.style.border = "none";
        message.style.borderBottom = "1px solid rgb(159, 159, 159)"
        validateMessage(message.value);
    } else {
        message.style.border = "2px solid red";
    }
}

//Checking for a validate Requirements
function validateName(name) {
    if (name.length < 5) {
        nameError.style.backgroundColor = "red";
        nameError.textContent = "Names should have atleast 5 characters!";
    } else {
        nameError.style.backgroundColor = "white";
        nameError.textContent = "";
    }
}
function validateEmail(email) {
    const pattern = "[a-zA-Z0-9+_.-]{3,}@[a-zA-Z.]{5,}";
    if (!email.match(pattern)) {
        emailError.style.backgroundColor = "red";
        emailError.textContent = "Email should have a minimum of 3 characters before the @ and 5 characters after the @";
    } else {
        emailError.style.backgroundColor = "white";
        emailError.textContent = "";
    }
}
function validatePhoneNumber(phoneNumber) {
    const pattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if (!phoneNumber.match(pattern)) {
        phoneNumberError.style.backgroundColor = "red";
        phoneNumberError.textContent = "Phone Number should start with +961 and followed by either 7 digits (if it's a 03 number, i.e: +9613456789) or. followed by 8 digits (if it's a 71/76/70/etc: +96171345234)";
    } else {
        phoneNumberError.style.backgroundColor = "white";
        phoneNumberError.textContent = "";
    }
}

function validateMessage(message) {
    if (message.length < 100) {
        messageError.style.backgroundColor = "red";
        messageError.textContent = " A Message should be minimum of 100 characters";
    } else {
        messageError.style.backgroundColor = "white";
        messageError.textContent = "";
    }
}

//  API FUNCTION HERE 
function sendForm(full_name, email, phone_number, message) {
    let api = 'http://127.0.0.1/contact-db/messages.php';
    let settings = {
      method: 'POST',
      body: new URLSearchParams({
        full_name,
        email,
        phone_number, 
        message
      })
    }
    fetch(api, settings)
      .then(response => response.json())
      .then(data => {
        formResult.textContent = data.message;
        if (data.status == 200) {
          formResult.dataset.role = "success";
          setTimeout(() => { 
            formResult.textContent = "";
            formResult.dataset.role = "";
          }, 3000)
        } else {
          formResult.dataset.role = "error";
          setTimeout(() => { 
            formResult.textContent = "";
            formResult.dataset.role = "";
          }, 3000)
        } 
      });
  }
  
  function removeError(input, errorField) {
    if (input.classList.contains("error")) {
      input.classList.remove("error");
    }
    errorField.textContent = "";
  }