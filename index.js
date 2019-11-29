var Word = require('./word.js');
var Letter = require("./letter.js");
var inquirer = require('inquirer')

var vocabulary = ["warm", "grateful", "kindness", "plain", "sophisticated"]
var index = Math.floor(Math.random() * vocabulary.length);
var selection = vocabulary[index];
console.log(selection);
var selectionArr = selection.split('');
var mysteryWord = new Word();
var guessesRemain = 9;  
var win = false

for (var i = 0; i < selectionArr.length; i++) {
    var character = new Letter(selectionArr[i], false);
    mysteryWord.letters.push(character);
}

function play() {
    var correctCount = 0;
    var incorrectCount = 0; 
    if (win == false) {
        inquirer.prompt([
            {
                type: "input",
                message: "To play, guess a letter!",
                name: "guess"
            }
        ]).then(function(response) {
            mysteryWord.checkCharacter(response.guess);
            console.log(mysteryWord.stringWord());
            // console.log(mysteryWord.stringWord().split(' _ ').length); 
            // console.log(mysteryWord.stringWord().split(''));


            if (mysteryWord.stringWord().indexOf(response.guess) == -1) {
                guessesRemain--;
                console.log("guessesRemain", guessesRemain);
            }

            mysteryWord.letters.forEach(function(element) {
                if (element.guessed == true) {
                    correctCount++;
                }
            })

            if (correctCount == mysteryWord.letters.length) {
                win = true;
                console.log("You Won!")
            } else {
                win = false; 
                play(); 
            }

        })
    }
}

play(); 


