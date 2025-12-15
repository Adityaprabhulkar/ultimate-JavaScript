// -----------Chapter 3 Practice set ----------------
// Q2------------=>
// let marks = {
//     harry: 50,
//     raj: 60,
//     lovesh: 56,
//     Monika: 4
// }

//Problem NO 1
// for(let i =0; i<Object.keys(marks).length;i++) {
//     console.log("The marks of " + Object.keys(marks)[i] + "are " + marks[Object.keys(marks)[i]]);
    
// }

//Problem NO 2
// for(const key in marks) {
//     console.log("The marks of " + key + " are " + marks[key]);
    
// }

//Problem NO 3
// let cn = 4 
// let i 
// while(i != cn){
//     console.log("Try again");
//     i = prompt("enter a number")
    
// }
// console.log("you have entered a correct number");


//Problem NO 4

const mean = (a,b,c,d) => {
    return(a+b+c+d)/4
}

console.log(mean(4,5,6,7));



