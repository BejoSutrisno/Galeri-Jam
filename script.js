document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const username = document.querySelector("input[placeholder='Username']");
    const email = document.querySelector("input[placeholder='Email']");
    const password = document.querySelector("input[placeholder='Password']");
    const errorMessages = document.getElementById("error-messages");
  
    form.addEventListener("submit", (e) => {
      let errors = [];
  
      // Validasi Username
      if (username.value.trim() === "") {
        errors.push("Username is required.");
      }
  
      // Validasi Email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.value.trim())) {
        errors.push("Please enter a valid email address.");
      }
  
      // Validasi Password
      if (password.value.length < 6) {
        errors.push("Password must be at least 6 characters long.");
      } else if (password.value.length > 20) {
        errors.push("Password must not exceed 20 characters.");
      }
      if (password.value.toLowerCase() === "password") {
        errors.push("Password cannot be 'password'.");
      }
  
      // Jika ada error, hentikan submit dan tampilkan error
      if (errors.length > 0) {
        e.preventDefault();
        errorMessages.innerHTML = errors.join("<br>");
      } else {
        errorMessages.innerHTML = ""; // Bersihkan pesan error jika valid
      }
    });
  });
  
