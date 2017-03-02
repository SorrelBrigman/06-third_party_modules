#!/usr/bin/env node

const chalk = require("chalk");
const topStripe = "                                   ";
const topRowStars = chalk.white.bgBlue(" * * * * * * * ");
const otherRowStars = chalk.white.bgBlue("  * * * * * *  ");
const lowerStripe = "                                                  ";
const shortRed = chalk.bgRed(topStripe);
const shortWhite = chalk.bgWhite(topStripe);
const longRed = chalk.bgRed(lowerStripe);
const longWhite = chalk.bgWhite(lowerStripe);

const topRed =topRowStars + shortRed;
const topWhite = topRowStars + shortWhite;

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
