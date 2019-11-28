function Letter(letter, guessed) {
    this.letter = letter,
    this.guessed = guessed,
    this.display = function() {
        if (this.guessed) {
            return this.letter;
        } else {
            return " _ ";
        }
    }
    this.guess = function(input) {
        if (input == this.letter) {
            this.guessed = true; 
        } else {
            this.guessed = false; 
        }
    }
}

// var cee = new Letter("c", false)
// console.log(cee);

// cee.updateBoolean("c");

// console.log(cee.outcome())

module.exports = Letter; 