// Variables

var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var special = "!#$%&'()*+,-./:;<=>?@[]^\_`{|}~"

var upperSplit = upper.split("");
var lowerSplit = lower.split("");
var numbersSplit = numbers.split("");
var specialSplit = special.split("");

// Password Generation

function generate() {
    var charactersALL = [];
    var pwd = "";

var pwdLength = prompt("Choose a password length that is between 8 and 128 characters.");

if(pwdLength <8 || pwdLength > 128) {
    alert("Please start over and choose a passowrd that fits the guidelines.");
}

// Character Conditions

else{
    if(confirm("Would you like your password to contain upper case letters?")) {
        Array.prototype.push.apply(charactersALL, upperSplit);
    }

    if(confirm("Would you like your password to contain lower case letters?")) {
        Array.prototype.push.apply(charactersALL, lowerSplit);
    }

    if(confirm("Would you like your password to contain numbers?")) {
        Array.prototype.push.apply(charactersALL, numbersSplit);
    }

    if(confirm("Would you like your password to contain symbols?")) {
        Array.prototype.push.apply(charactersALL, specialSplit);
    }

    if(charactersALL.length === 0) {
        alert("Please start over and choose atleast one type of character.");
    }

    // Generates a random passoword according the user's guidelines

    else{
        for(var i = 0; i < pwdLength; i++) {
            var random = Math.floor(Math.random() * charactersALL.length);
            pwd += charactersALL[random];
        }
    }
    }

    document.getElementById("password").innerHTML = pwd;
}