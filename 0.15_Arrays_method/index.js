// Arrays Methods

// let num = [1,2,34,4]

// let b = num.toString();

// console.log(b);
// let c = num.join("-")
// console.log(c, typeof c);

// let r = num.pop()  // pop return the pop elements
// console.log(num, r);

// let r = num.push(56)  // pop return the pop elements
// console.log(num, r);

// let r = num.shift()
// console.log(r, num); // Removes an element for the start of the

// let r = num.unshift(78)
// console.log(r, num); // add an element for the start of the array

// let num = [1,2,3,4,5,6,7]
// let num2 = [11,12,13,14,15,16,17,18,19,10,17,26,25]
// let num3 = [121,212,213,214,215,216,217,218,219,210,217,226,225]
// console.log(num.length);
// delete num[0]
// console.log(num.length, num);

// let newArray = num.concat(num2, num3)
// console.log(newArray);
// console.log(num);
// console.log(num2);
// console.log(num3);

// ----------------//sort method--------------


// let compare = (a,b) => {
//     return b - a
// }
// let num = [21, 32, 443, 455, 5, 886, 67];
// num.sort(compare);
// num.reverse()
// console.log(num);

//Splice and Slice

//  let num = [21, 32, 443, 455, 5, 886, 67];
// //  let deleted = num.splice(2,3,1021,1025,1725,3644)
// //  console.log(num);
 
// //  console.log( deleted);

// let newArray = num.slice(3,5)
// console.log(newArray);


let compare =(a,b) => {
    return a-b
}
let names = ["aditya", "raj", "bhushan", "Yatin"]
names.sort(compare)
console.log(names);

// names.reverse()
// console.log(names);



 


