var Letter = require('./letter.js');

function Word() {
    this.letters = [new Letter("c", false), new Letter("a", false), new Letter("t", false)];
    this.stringWord = function() {
        var string = "";
        this.letters.forEach(function(element) {
            // console.log(element.outcome());
            string += element.display(); 
        })
        console.log(string);
    }
    this.takesCharacter = function(input) {
        this.letters.forEach(function(element) {
            element.guess(element.letter);
        })
    }
}

// var cat = new Word()

// console.log(cat);

// cat.stringWord()
// cat.takesCharacter()
// cat.stringWord()

module.exports = Word; 
