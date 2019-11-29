var Word = require('./word.js');
var Letter = require("./letter.js");
var inquirer = require('inquirer')

var vocabulary = ["warm", "grateful", "kindness", "plain", "sophisticated"]
var index = Math.floor(Math.random() * vocabulary.length);
var selection = vocabulary[index];
console.log(selection);
var selectionArr = selection.split('');
var mysteryWord = new Word();

for (var i = 0; i < selectionArr.length; i++) {
    var character = new Letter(selectionArr[i], false);
    mysteryWord.letters.push(character);
    console.log(selectionArr[i]);
}

inquirer.prompt([
    {
        type: "input",
        message: "To play, guess a letter!",
        name: "guess"
    }
]).then(function(response) {
    mysteryWord.takesCharacter(response.guess);
    mysteryWord.stringWord(); 
})

// var cee = new Letter("c", false)
// console.log(cee);

