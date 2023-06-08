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
    // Creating variable passwordLength for later use
    var passwordLength;
    // Creating array approvedCharacters for later use
    var approvedCharacters = [];
    // Creating passwordCharacters for later use
    var passwordCharacters = [];

    //Function to get password length
    function getLength(){
      //Ask user for a password length between 8-128 characters and assigning that number to variable passwordLength
      passwordLength = window.prompt("How many characters would you like your password to contain?(between 8-128):");
      //Checks to make sure passwordLength is a number between 8-128
      //Checks if user clicked on cancel for the prompt
      if (passwordLength == null || passwordLength == undefined) {
        window.alert("Password generation has been cancelled.")
        //Checks if anything was input and if it is a number
      } else if (passwordLength == ''|| isNaN(passwordLength)){
        window.alert("Please input a number.")
        getLength()
        //Checks if the number input is less than 8
      } else if (passwordLength < 8) {
        window.alert("Password length must be 8 or more characters.")
        getLength()
        //Checks if number input is greater than 128
      } else if (passwordLength > 128) {
        window.alert("Password length must be 128 or less characters.")
        getLength()
      } else {
        getCriteria()
      }
    }
    
    //Asking for password character criteria
    function getCriteria(){

      //Ask if user would like to include numeric characters and assigning boolean result to variable includeNumeric
      var includeNumeric = window.confirm("Click 'OK' to include numeric characters?");
      console.log(includeNumeric);

      // If user confirmed adding numeric characters, add numeric characters array to array of approved characters
      if (includeNumeric) {
        approvedCharacters = approvedCharacters.concat(numericCharacters);
        console.log(approvedCharacters);
      };

      //Ask if user would like to include lower case letters and assigning boolean result to variable to includeLower
      var includeLower = window.confirm("Click 'OK' to include lower case letters?");
      console.log(includeLower);

      // If user confirmed adding lower case characters, add lower case characters array to array of approved characters
      if (includeLower){
        approvedCharacters = approvedCharacters.concat(lowerCasedCharacters);
        console.log(approvedCharacters);
      };

      //Ask if user would like to include upper case letters and assigning boolean result to includeUpper
      var includeUpper = window.confirm("Click 'OK' to include upper case letters?");
      console.log(includeUpper);

      // If user confirmed adding upper case characters, add upper case characters array to array of approved characters
      if (includeUpper){
        approvedCharacters = approvedCharacters.concat(upperCasedCharacters);
        console.log(approvedCharacters);
      };

      //Ask if user would like to include special characters and assigning boolean result to includeSpecial
      var includeSpecial = window.confirm("Click 'OK' to include special characters?");
      console.log(includeSpecial);

      // If user confirmed adding special characters, add special characters array to array of approved characters
      if (includeSpecial){
        approvedCharacters = approvedCharacters.concat(specialCharacters);
        console.log(approvedCharacters);
      };
      
      //Checks to make sure user confirmed including at least 1 character type
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


