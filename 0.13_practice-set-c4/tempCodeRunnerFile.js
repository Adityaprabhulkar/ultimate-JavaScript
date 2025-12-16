// console.log("har\"".length);

// console.log(str.toLowerCase());

// let str = "Please give Rs 1000"


// console.log(str.slice(15));

// console.log();

// Chapter 4 -practice set
// problem 1
const sentence = ' The quick brown fox jumps over the lazy dog.';
const word = 'fox2';
console.log(sentence.includes(word));

console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);


//  problem 2
const str = "Saturday night plans";

console.log(str.startsWith("Sat"));
// Expected output: true

console.log(str.startsWith("Sat", 3));
// Expected output: false

// problem 3
console.log(word.toLowerCase());
console.log(word.toUpperCase());

// problem 4

 let str2 = "Please give Rs 1000"
 let ammount = Number.parseInt(str2.slice(15))
 console.log(ammount);
 