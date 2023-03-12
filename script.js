// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
  function generatePassword() {
    password = "";

    function getlength() {
      var length = prompt("Enter length of password between 8 and 128");
        if (length >= 9 && length <= 128) {
          console.log(length);
        } else {
          alert("Number not within range")
          getlength()
        }
    
    }
    
    
















    return password;
  };
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

