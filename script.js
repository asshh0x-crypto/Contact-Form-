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

  if (!fname.value.trim()) {
    showError(fname, "First name required");
    isValid = false;
  }

  if (!lname.value.trim()) {
    showError(lname, "Last name required");
    isValid = false;
  }

  if (!email.value.trim()) {
    showError(email, "Email required");
    isValid = false;
  }

  if (!/^\d{10}$/.test(contact.value)) {
    showError(contact, "Enter valid 10 digit number");
    isValid = false;
  }

  if (password.value.length < 6) {
    showError(password, "Minimum 6 characters");
    isValid = false;
  }

  if (password.value !== confirmPassword.value) {
    showError(confirmPassword, "Passwords do not match");
    isValid = false;
  }

  if (isValid) {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(new FormData(this)).toString()
    })
    .then(() => {
      document.getElementById("registerForm").reset();
      document.getElementById("successMessage").style.display = "block";
    })
    .catch(() => alert("Form submission failed"));
  }
});

function showError(input, message) {
  input.nextElementSibling.innerText = message;
}
