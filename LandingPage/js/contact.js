document.getElementById("contact-form").addEventListener("submit", (event) => {
    event.preventDefault();
    validateForm();
  });
  
  function validateForm() {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const agreementCheckbox = document.getElementById("agreement");
    const emailError = document.getElementById("email-error");
    const nameError = document.getElementById("name-error");
    const messageError = document.getElementById("message-error");
    const countryInput = document.getElementById("country-input");
    const countryError = document.getElementById("country-error");
  
    // validasi
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(emailInput.value);
  
    const isValidName = nameInput.value.length >= 8;
  
    const isValidMessage = messageInput.value.length >= 30;
  
    const isValidCountry = countryInput.value.length >= 4;
  
    // Error message
  
    // Email
    if (!emailInput.value.includes("@")) {
      emailError.style.visibility= "visible";
      emailError.textContent = "Must have '@'";
      emailError.style.display = "block";
    } else if (!isValidEmail) {
      emailError.style.visibility= "visible";
      emailError.textContent = "Email is not valid";
      emailError.style.display = "block";
    } else {
      emailError.style.display = "none";
    }
  
    // Nama
    if (!isValidName) {
      nameError.style.visibility= "visible";
      nameError.textContent = "Name must be at least 8 characters";
      nameError.style.display = "block";
    } else {
      nameError.style.display = "none";
    }
  
    // Message
    if (!isValidMessage) {
      messageError.style.visibility= "visible";
      messageError.textContent = "Message must be at least 30 characters";
      messageError.style.display = "block";
    } else {
      messageError.style.display = "none";
    }
  
    // Country
    if (!isValidCountry) {
      countryError.style.visibility= "visible";
      countryError.textContent = "Please enter a real country";
      countryError.style.display = "block";
    } else {
      countryError.style.display = "none";
    }
  
    // Remove error message klo dh bener
    emailInput.addEventListener("input", () => {
      if (isValidEmail) {
        emailError.style.display = "none";
      }
    });
  
    nameInput.addEventListener("input", () => {
      if (isValidName) {
        nameError.style.display = "none";
      }
    });
  
    messageInput.addEventListener("input", () => {
      if (isValidMessage) {
        messageError.style.display = "none";
      }
    });
  
    countryInput.addEventListener("input", () => {
      if (isValidCountry) {
        countryError.style.display = "none";
      }
    });
  
    // Submit
    if (isValidEmail && isValidName && isValidMessage && isValidCountry) {
      // Success message
      const successMessage = document.createElement("p");
      successMessage.textContent = "Message has been sent!";
      successMessage.classList.add("success-message");
      document.getElementById("contact-form").appendChild(successMessage);
  
      // Remove success message
      setTimeout(() => {
        successMessage.style.opacity = 0;
        successMessage.style.transition = "opacity 0.5s ease-out";
  
        setTimeout(() => {
          successMessage.remove();
        }, 500);
      }, 2000);
  
      // Clear form inputs
      nameInput.value = "";
      emailInput.value = "";
      messageInput.value = "";
      agreementCheckbox.checked = false;
      countryInput.value = "";
    }
  }  