var Letter = require('./letter.js');

function Word() {
    this.letters = [];
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
            element.guess(input);
        })
    }
}

// var cat = new Word()

// console.log(cat);

// cat.stringWord()
// cat.takesCharacter()
// cat.stringWord()

// new Letter("c", false), new Letter("a", false), new Letter("t", false)

module.exports = Word;
// module.exports = Letter; 
