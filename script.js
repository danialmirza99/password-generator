// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var passwordString = ""
var options = [];
var finalPassword = [];
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialCharacters = [" ", "!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

function generatePassword(){
    var passwordLength = prompt("How long would you like your password? Please keep it between 8 and 128 characters. Type the number");
    if (passwordLength >= 8 && passwordLength <= 128){
        const lowerCase = confirm("Do you want lowercase letters in your password? Press Ok for yes and Cancel for no.");
        const upperCase = confirm("Do you want uppercase letters in your password? Press Ok for yes and Cancel for no.");
        const numbers = confirm("Do you want numbers in your password? Press Ok for yes and Cancel for no.");
        const specChars = confirm("Do you want special characters in your password? Press Ok for yes and Cancel for no.");
        options = [];
        if (lowerCase == true){
            for(var i = 0; i < lowerCaseLetters.length; i++){
                options.push(lowerCaseLetters[i]);
            }
        }
        if (upperCase == true){
            for(var i = 0; i < upperCaseLetters.length; i++){
                options.push(upperCaseLetters[i]);
            }
        }
        if (numbers == true){
            for(var i = 0; i < nums.length; i++){
                options.push(nums[i]);
            }
        }
        if (specChars == true){
            for(var i = 0; i < specialCharacters.length; i++){
                options.push(specialCharacters[i]);
            }
        }
        if ((lowerCase == false) && (upperCase == false) && (numbers == false) && (specChars == false)){
            alert("Please try again");
        }
    }
    else{
        alert("Please try again");
    }

    function shuffleOptions(options){
        for (var i = 0; i < options.length; i++){
            var randomIndex = Math.floor(Math.random() * options.length);
            var tempOption = "";
            var currentOption = options[i];
            var randomOption = options[randomIndex];
            tempOption = currentOption;
            options[i] = randomOption;
            options[randomIndex] = tempOption;
        }
    }
    shuffleOptions(options)
    finalPassword = []
    for(var i = 0; i < passwordLength; i++){
        finalPassword.push(options[i])
    }
    return (finalPassword.join(""));
    // return (passwordString);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);