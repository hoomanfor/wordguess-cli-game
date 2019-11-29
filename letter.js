function Letter(letter, guessed) {
    this.letter = letter,
    this.guessed = guessed,
    this.display = function() {
        if (this.guessed) {
            return " " + this.letter + " ";
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

module.exports = Letter; 