document.getElementById("contractForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent form submission
  
    // Get the form input values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;
  
    // Create an object to store the contract data
    var contractData = {
      name: name,
      email: email,
      phone: phone,
      message: message
    };
  
    // Convert the contract data to JSON format
    var jsonData = JSON.stringify(contractData);
  
    // Write the JSON data to the data.json file
    var fileSystem = require("fs");
    fileSystem.writeFile("data.json", jsonData, function(err) {
      if (err) {
        console.log("Error writing to data.json:", err);
      } else {
        console.log("Contract data saved successfully!");
        // You can perform additional actions here, such as displaying a success message or redirecting the user
      }
    });
  });
  

  // Add event listener to toggle the mobile menu
document.addEventListener("DOMContentLoaded", function() {
    var menuToggle = document.getElementById("menu-toggle");
    var menu = document.getElementById("menu");
  
    menuToggle.addEventListener("click", function() {
      menu.classList.toggle("show");
    });
  });
  