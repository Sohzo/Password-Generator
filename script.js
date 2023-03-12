// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
  function generatePassword() {
    password = "";

    const keypool = {
      upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      lowerCase: "abcdefghijklmnopqrstuvwxyz",
      number: "0123456789",
      special: "!@#$%^&*()-_=+[{]}\|;:,<.>/?`~"  
    }

    function getlength() {
      var length = prompt("Enter length of password between 8 and 128");
        if (length >= 9 && length <= 128) {
          console.log(length);
        } else {
          alert("Number not within range")
          getlength()
        }
    
    }

    var incLowercase = confirm("Would you like to include lowercase letters?");
    var incUppercase = confirm("Would you like to include uppercase letters?");
    var incNumbers = confirm("Would you like to include numbers?");
    var incSpecial = confirm("would you like to include special characters");
    


















    return password;
  };
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

