var Word = require('./word.js');
var inquirer = require('inquirer')

var vocabulary = ["warm", "grateful", "kindness", "plain", "sophisticated"]
var index = Math.floor(Math.random() * vocabulary.length);
var selection = vocabulary[index];
console.log(selection);



