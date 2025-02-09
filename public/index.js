import "./assets/scss/_variables.scss";
import "./assets/scss/style.scss";
import "./index.html";

function validatePhone(phone) {
  const phoneRegex = /^\+?[\d\s\-()]{7,20}$/;
  return phoneRegex.test(phone.trim());
}

document.addEventListener("DOMContentLoaded", () => {
  // Video player

  const videoPlayer = document.getElementById("videoPlayer");
  const videoPreview = document.getElementById("videoPreview");
  const videoButton = document.getElementById("videoButton");

  videoButton.addEventListener("click", () => {
    videoPlayer.classList.add("video__player--show");
    videoPreview.classList.add("video__preview--hidden");
    videoButton.classList.add("video__button--hidden");

    const videoSrc = videoPlayer.getAttribute("src");
    videoPlayer.setAttribute("src", `${videoSrc}&autoplay=1`);
  });

  // Form

  const overlay = document.getElementById("overlay");
  const form = document.getElementById("form");
  const closeFormX = document.getElementById("closeFormX");

  const openForm = () => {
    overlay.classList.remove("overlay--hidden");
    form.classList.remove("form--hidden");
  };

  const closeForm = () => {
    overlay.classList.add("overlay--hidden");
    form.classList.add("overlay--hidden");
  };

  const productButtons = document.querySelectorAll(".products__button");
  productButtons.forEach((button) => {
    button.addEventListener("click", openForm);
  });

  closeFormX.addEventListener("click", closeForm);

  // Valdiate form

  const nameError = document.getElementById("errorName");
  const phoneError = document.getElementById("errorPhone");
  const confirmError = document.getElementById("errorConfirm");
  const nameInput = form.elements["name"];
  const phoneInput = form.elements["phone"];
  const confirmInput = form.elements["confirm"];

  function clearError(input, element) {
    if (input.classList.contains("form__input--error")) {
      input.classList.remove("form__input--error");
    }
    if (!element.classList.contains("form__error--hidden")) {
      element.classList.add("form__error--hidden");
    }
  }

  function setError(input, element) {
    if (!input.classList.contains("form__input--error")) {
      input.classList.add("form__input--error");
    }
    if (element.classList.contains("form__error--hidden")) {
      element.classList.remove("form__error--hidden");
    }
  }

  function clearErrors() {
    clearError(nameInput, nameError);
    clearError(phoneInput, phoneError);
    clearError(confirmInput, confirmError);
  }

  function validateForm() {
    const nameValue = nameInput.value.trim();
    if (nameValue === "") {
      setError(nameInput, nameError);
      return false;
    } else {
      clearError(nameInput, nameError);
    }
    const phoneValue = phoneInput.value.trim();
    if (!validatePhone(phoneValue)) {
      setError(phoneInput, phoneError);
      return false;
    } else {
      clearError(phoneInput, phoneError);
    }
    if (!confirmInput.checked) {
      setError(confirmInput, confirmError);
      return false;
    } else {
      clearError(confirmInput, confirmError);
    }
    return true;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (validateForm()) {
      clearErrors();
      closeForm();
    }
  });
});
