let num = [3, 5, 1, 2, 4];

// // for( let i=0;i<num.length;i++){
// //     console.log(num[i]);
// // }

// -------------------For Each Loop----------//
// num.forEach((element) => {
//     console.log(element*element);
    
// })

//----------------Array.from--------------//
// let name = "Aditya"
// let arr = Array.from(name)
// console.log(arr);

// ----for..of-----------//
for(let i of num) {
    console.log(i);
    
}

//--------------For..in-----------//
for(let item in num) {
    console.log(item, num[item]);
    
}



