document.addEventListener("DOMContentLoaded", function () {
  const phoneInput = document.getElementById("phone");

  phoneInput.addEventListener("input", onPhoneInput);
  phoneInput.addEventListener("keydown", onPhoneKeyDown);
  phoneInput.addEventListener("focus", onPhoneFocus);
  phoneInput.addEventListener("blur", onPhoneBlur);

  const mask = "+7(___)-___-__-__";
  const maskSymbols = ["+", "7", "(", ")", "-", "-", "-"];

  function onPhoneFocus(e) {
    if (e.target.value === "") {
      (e.target.value = "+7("), caretPosition(4);
    }
  }

  function onPhoneBlur(e) {
    if (e.target.value === "+7(") {
      e.target.value = "";
    }
  }

  function onPhoneInput(e) {
    const input = e.target;
    let value = input.value;

    // Remove all non-digit characters except the first '+'
    let digits = value.replace(/[^\d]/g, "");

    // Ensure it starts with '7'
    if (digits[0] === "7") {
      digits = digits;
    } else if (digits[0] === "8") {
      digits = "7" + digits.slice(1);
    } else {
      digits = "7" + digits;
    }

    // Limit to 11 digits (7 and 10 digits for the phone number)
    digits = digits.slice(0, 12);

    // Reconstruct the masked value
    let maskedValue = "+7(";
    if (digits.length > 1) {
      maskedValue += digits.substring(1, 4);
    }
    if (digits.length > 4) {
      maskedValue += ")-" + digits.substring(4, 7);
    }
    if (digits.length > 7) {
      maskedValue += "-" + digits.substring(7, 9);
    }
    if (digits.length > 9) {
      maskedValue += "-" + digits.substring(9, 11);
    }

    input.value = maskedValue;
  }

  function onPhoneKeyDown(e) {
    const input = e.target;
    const key = e.key;

    // Allow navigation keys
    if (key === "Backspace" || key === "ArrowLeft" || key === "ArrowRight") {
      return;
    }

    // Prevent input if max length is reached
    if (input.value.length >= 17) {
      e.preventDefault();
      return;
    }

    // Allow only digits
    if (!/\d/.test(key)) {
      e.preventDefault();
    }
  }

  function caretPosition(pos) {
    const input = phoneInput;
    setTimeout(() => {
      input.setSelectionRange(pos, pos);
    }, 0);
  }
});
