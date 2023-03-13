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
      var passlength = prompt("Enter length of password between 8 and 128");
      if (passlength >= 9 && passlength <= 128) {
        //console.log(passlength);
        window.passlength = passlength;
      } else {
        alert("Number not within range")
        getlength()
      }
    }

    getlength()

    var incLowercase = confirm("Would you like to include lowercase letters?");
    var incUppercase = confirm("Would you like to include uppercase letters?");
    var incNumbers = confirm("Would you like to include numbers?");
    var incSpecial = confirm("would you like to include special characters");
    
    if (!incLowercase && !incUppercase && !incNumbers && !incSpecial === true) {
      alert("Please select at least one option");
    }


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

    passOptions = passOptions.join("")
    console.log(passOptions)


    for (var i = 0; i < passlength; i++) {
      password = password + passOptions[Math.floor(Math.random() * passOptions.length)];
    }
  
    return password;
  };
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


