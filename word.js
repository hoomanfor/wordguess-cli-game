var Letter = require('./letter.js');

function Word() {
    this.letters = [];
    this.stringWord = function() {
        var string = "";
        this.letters.forEach(function(element) {
            // console.log(element.outcome());
            string += element.display(); 
        })
        return string;
    }
    this.checkCharacter = function(input) {
        this.letters.forEach(function(element) {
            if (element.guessed == false) {
                element.guess(input);
            }
        })
    }
}

module.exports = Word;
