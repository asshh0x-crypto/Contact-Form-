document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;

  const fname = document.getElementById("fname");
  const lname = document.getElementById("lname");
  const email = document.getElementById("email");
  const contact = document.getElementById("contact");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");

  document.querySelectorAll(".error").forEach(e => e.innerText = "");

  if (fname.value.trim() === "") {
    showError(fname, "First name is required");
    isValid = false;
  }

  if (lname.value.trim() === "") {
    showError(lname, "Last name is required");
    isValid = false;
  }

  if (email.value.trim() === "") {
    showError(email, "Email is required");
    isValid = false;
  }

  if (!/^\d{10}$/.test(contact.value)) {
    if (isNaN(contact.value)) {
      showError(contact, "Only numbers are allowed");
    } else {
      showError(contact, "Contact must be exactly 10 digits");
    }
    isValid = false;
  }

  if (password.value.length < 6) {
    showError(password, "Password must be at least 6 characters");
    isValid = false;
  }

  if (password.value !== confirmPassword.value) {
    showError(confirmPassword, "Password doesn't match");
    isValid = false;
  }

  if (isValid) {
    alert("Form submitted successfully!");
    document.getElementById("registerForm").submit();
  }
});

function showError(input, message) {
  input.nextElementSibling.innerText = message;
}
