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

// Write password to the #password input
function writePassword() {

  //generate password
  function generatePassword(){
    
    var passwordLength;
    var approvedCharacters = [];
    var passwordCharacters = [];

    //Function to get password length
    function getLength(){
      //Ask user for a password length between 8-128 characters
      passwordLength = window.prompt("How many characters would you like your password to contain?(between 8-128):");
      //Checks to make sure passwordLength is a number between 8-128
      if (passwordLength == null || passwordLength == undefined) {
        window.alert("Password generation has been cancelled.")
      } else if (passwordLength == ''){
        window.alert("Nothing was entered, please input a number.")
        getLength()
      } else if (passwordLength < 8) {
        window.alert("Password length must be 8 or more characters.")
        getLength()
      } else if (passwordLength > 128) {
        window.alert("Password length must be 128 or less characters.")
        getLength() 
      } else if (isNaN(passwordLength)){
        window.alert("Please input a number")
        getLength()
      } else {
        console.log(passwordLength)
        getCriteria()

      }
    }
    
    //Asking for password character criteria
    function getCriteria(){

      //Ask if user would like to include numeric characters
      var includeNumeric = window.confirm("Would you like to include numeric characters?");
      console.log(includeNumeric);

      // If user says yes add numeric characters array to array of approved characters
      if (includeNumeric) {
        approvedCharacters = approvedCharacters.concat(numericCharacters);
        console.log(approvedCharacters);
      };

      //Ask if user would like to include lower case letters
      var includeLower = window.confirm("Would you like to include lower case letters?");
      console.log(includeLower);

      // If user says yes add lower case characters array to array of approved characters
      if (includeLower){
        approvedCharacters = approvedCharacters.concat(lowerCasedCharacters);
        console.log(approvedCharacters);
      };

      //Ask if user would like to include upper case letters
      var includeUpper = window.confirm("Would you like to include upper case letters?");
      console.log(includeUpper);

      // If user says yes add upper case characters array to array of approved characters
      if (includeUpper){
        approvedCharacters = approvedCharacters.concat(upperCasedCharacters);
        console.log(approvedCharacters);
      };

      //Ask if user would like to include special characters
      var includeSpecial = window.confirm("Would you like to include special characters?");
      console.log(includeSpecial);

      // If user says yes add special characters array to array of approved characters
      if (includeSpecial){
        approvedCharacters = approvedCharacters.concat(specialCharacters);
        console.log(approvedCharacters);
      };
      
      //Checks to make sure user included at least 1 character type
      if (!includeLower && !includeNumeric && !includeSpecial && !includeUpper){
        window.alert("Please include some character types.");
        getCriteria();
      };

    }

    // Runs getLength function
    getLength();

    // Randomly choosing characters from approvedCharacters array and adding it to passwordcharacters
    // until it has passwordLegnth number of characters
    for (var i = 0; i < passwordLength; i++){
      var randomIndex = Math.floor(Math.random() * approvedCharacters.length);
      passwordCharacters.push(approvedCharacters[randomIndex])
      console.log(passwordCharacters)
    }
    // Outputting the passwordArray as a string
    return passwordCharacters.join('')
  }

  // Creating a variable(password) to equal what is output from generatePassword function
  var password = generatePassword();
  
  // Creating a variable(passwordText) to link to first item with the id password
  var passwordText = document.querySelector("#password");

  // Changing the value of passwordText to password. This will change what appears on screen.
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


