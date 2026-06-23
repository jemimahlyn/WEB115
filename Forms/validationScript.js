// JavaScript code for form validation

const form = document.getElementById("myForm");

// Prevent form from submitting
form.addEventListener("submit", function(event) {

   // Retrieve the input field value
   const inputValue = document.getElementById("inputField").value;

   // Regular expression pattern for alphanumeric input
   const pattern = /^[a-zA-Z0-9]+$/;

   // Check if the input value matches the pattern
   if (pattern.test(inputValue)) {

      // Valid input: display confirmation and submit the form
      alert("Success! Form submitted.");

   } else {

      // Invalid input: display error message
      event.preventDefault();
      alert("Error: Please enter only letters and numbers.");

   }
});