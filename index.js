var Word = require('./word.js');
var Letter = require("./letter.js");
var inquirer = require('inquirer')

var vocabulary = ["warm", "grateful", "kindness", "plain", "sophisticated"]
var index = Math.floor(Math.random() * vocabulary.length);
var selection = vocabulary[index];
var selectionArr = selection.split('');
var mysteryWord = new Word();
var guessesRemain = 9;  
var win = false;

function newWord() {
    index = Math.floor(Math.random() * vocabulary.length);
    selection = vocabulary[index];
    // console.log(selection);
    selectionArr = selection.split('');
    mysteryWord = new Word();
    guessesRemain = 9;  
    win = false
    for (var i = 0; i < selectionArr.length; i++) {
        var character = new Letter(selectionArr[i], false);
        mysteryWord.letters.push(character);
    }
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
            if (response.guess == "exit") {
                process.exit(); 
            }
            mysteryWord.checkCharacter(response.guess);
            if (mysteryWord.stringWord().indexOf(response.guess) == -1) {
                guessesRemain--;
                if (guessesRemain > -1) {
                    console.log("");
                    console.log("You've made an Incorrect Guess!\n" + 
                    "You have " + guessesRemain + " guesses left.");
                    console.log("");
                } else {
                    console.log("");
                    console.log("You've made an Incorrect Guess!\n" + 
                    "You are out of guesses.");
                    win = true;
                    newWord(); 
                    play(); 
                }
            } else {
                console.log("");
                console.log("Good Job!")
                console.log("'" + response.guess + "'" + " is a correct letter.")
                console.log("");
                console.log(mysteryWord.stringWord());
                console.log("");
            }
            mysteryWord.letters.forEach(function(element) {
                if (element.guessed == true) {
                    correctCount++;
                }
            })
            if (correctCount == mysteryWord.letters.length) {
                win = true;
                console.log("You Won!");
                console.log("");
                newWord();
                play(); 
            } else {
                win = false; 
                play(); 
            }
        })
    }
}

newWord(); 
play(); 


