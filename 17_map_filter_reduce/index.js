let arr1 = [20, 40, 60];
// Array Map method----------
let a = arr1.map((value, index, array) => {
  console.log(value, index, array);
  return value + 1;
});
console.log(a);

//Array filter method----------

// let arr2 = [20, 40, 60, 0, 3, 4];
// let a2 = arr2.filter((a) => {
//   return a < 10;
// });

// console.log(a2, arr2);


//Array reduce method----------
// let arr3 = [1, 2, 3, 5, 3, 2, 1];
// const reduce_func = (h1,h2) => {
//     return h1 + h2
// }

// let newarr3 = arr3.reduce(reduce_func)
// console.log(newarr3);

