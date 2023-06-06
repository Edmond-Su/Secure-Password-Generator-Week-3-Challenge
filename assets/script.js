// Assignment Code
var generateBtn = document.querySelector("#generate");

// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters

var numericCharacters = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0'
]

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

//generate password
function generatePassword(){
  //Ask for password legnth between 8-128 characters
  var passwordLength;
  var passwordCharacters = [];

  function getLength(){
    passwordLength = window.prompt("How many characters would you like your password to contain?(between 8-128):");
    if (passwordLength < 8){
      window.alert("Password length must be 8 or more characters")
      getLength()
    } else if (passwordLength > 128){
      window.alert("Password length must be 128 or less characters")
      getLength()
    } else if (passwordLength = false){
      
    } else {
      getCriteria()
    }
  }
  
  function getCriteria(){
    //Ask to include numbers
    var includeNumeric = window.confirm("Would you like to include numeric characters?")
    console.log(includeNumeric)
    if (includeNumeric) {
      passwordCharacters = passwordCharacters.concat(numericCharacters)
      console.log(passwordCharacters)
    }
    //Ask to include lower case letters
    var includeLower = window.confirm("Would you like to include lower case letters?");
    console.log(includeLower);
    if (includeLower){
      passwordCharacters = passwordCharacters.concat(lowerCasedCharacters)
      console.log(passwordCharacters)
    }
    //Ask to include upper case letters
    var includeUpper = window.confirm("Would you like to include upper case letters?");
    console.log(includeUpper);
    if (includeUpper){
      passwordCharacters = passwordCharacters.concat(upperCasedCharacters)
      console.log(passwordCharacters)
    }
    //ASk to include special characters
    var includeSpecial = window.confirm("Would you like to include special characters?");
    console.log(includeSpecial);
    if (includeSpecial){
      passwordCharacters = passwordCharacters.concat(specialCharacters)
      console.log(passwordCharacters)
    }
    
  }
  getLength()
  
}








// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());

// Button testing code
generateBtn.addEventListener("click", function(){
  console.log("clicked")
})


