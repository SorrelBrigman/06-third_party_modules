#!/usr/bin/env node

const chalk = require("chalk");

//use es6 destructuing to access needed colors

let { bgRed: rStripe, bgWhite: wStripe } = chalk;
let {bgBlue: stars} = chalk.white;




const topStripe = "                                   ";
const topRowStars = stars(" * * * * * * * ");
const otherRowStars = stars("  * * * * * *  ");
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
