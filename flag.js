#!/usr/bin/env node

const chalk = require("chalk");

//use es6 destructuing to access needed colors

let { bgRed: rStripe, bgWhite: wStripe } = chalk;
let {bgBlue: stars} = chalk.white;


var x = '\u03A9';

let topStarString = ()=> {
  let myString = " "
  for(var i = 0; i < 7; i ++) {
    myString += `${x} `;
  }
  return myString;
}


const topStripe = "                                   ";
const topRowStars = stars(topStarString());
const otherRowStars = stars(`  ${x} ${x} ${x} ${x} ${x} ${x}  `);
const lowerStripe = "                                                  ";
const shortRed = rStripe(topStripe);
const shortWhite = wStripe(topStripe);
const longRed = rStripe(lowerStripe);
const longWhite = wStripe(lowerStripe);

const topRed =topRowStars + shortRed;
const topWhite = otherRowStars + shortWhite;

console.log(topRed);
console.log(topWhite);
console.log(topRed);
console.log(topWhite);
console.log(topRed);
console.log(topWhite);
console.log(topRed);
console.log(longWhite);
console.log(longRed);
console.log(longWhite);
console.log(longRed);
console.log(longWhite);
console.log(longRed);
