// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
  function generatePassword() {
    password = "";

    // Defines pool from which characters are taken
    const keypool = {
      upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      lowerCase: "abcdefghijklmnopqrstuvwxyz",
      number: "0123456789",
      special: "!@#$%^&*()-_=+[{]}\|;:,<.>/?`~"  
    }

    // Asks for length of password and denies input outside of bounds
    function getlength() {
      var passlength = prompt("Enter length of password between 8 and 128");
      if (passlength >= 9 && passlength <= 128) {
        window.passlength = passlength;
      } else {
        alert("Number not within range")
        getlength()
      }
    }

    getlength()

    // Asks if user wants different criteria
    var incLowercase = confirm("Would you like to include lowercase letters?");
    var incUppercase = confirm("Would you like to include uppercase letters?");
    var incNumbers = confirm("Would you like to include numbers?");
    var incSpecial = confirm("would you like to include special characters");
    
    // If user selects no criteria, restarts questions
    if (!incLowercase && !incUppercase && !incNumbers && !incSpecial === true) {
      alert("Please select at least one option");
    }

    // Creates array and concatenates pool matching criteria selected
    var passOptions = []
    
    if (incLowercase) {
      passOptions = passOptions.concat(keypool.lowerCase)
    }

    if (incUppercase) {
      passOptions = passOptions.concat(keypool.upperCase)
    }

    if (incNumbers) {
      passOptions = passOptions.concat(keypool.number)
    }

    if (incSpecial) {
      passOptions = passOptions.concat(keypool.special)
    }

    // Joins array into a single string for random selection
    passOptions = passOptions.join("")
    console.log(passOptions)

    // Randomly selects a character for each character length requested
    for (var i = 0; i < passlength; i++) {
      password = password + passOptions[Math.floor(Math.random() * passOptions.length)];
    }
  
    return password;
  };
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


