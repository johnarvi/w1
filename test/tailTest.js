const assertEqual = require('../assertEqual');
const tail = require('../tail.js');


assertEqual(tail(["Hello", "Lighthouse", "Labs"]), 'Labs');
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// const words = ["Yo Yo"];
//const words = [];
// console.log(tail(words));
//assertEqual(words.length, 3);