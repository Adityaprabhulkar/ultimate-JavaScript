let name = "Aditya"
// console.log(name.length);

// console.log(name.toUpperCase());
// console.log(name.toLowerCase());
// console.log(name.slice(2,4));
// console.log(name.slice(2));
// console.log(name.replace("Adi", "Edi"));

// let friend = "Naman"
// console.log(name.concat(" is a friend of ", friend));
// let friend2 = "         Meena       "
// console.log(friend2.trim());
// console.log(friend2);

let fr = "Shivika"
// console.log(fr[0])
// console.log(fr[1])
// console.log(fr[2])
// console.log(fr[3])
// fr[4]= "o" // This is not possible

// for( let i = 0;i<fr.length;i++){
//     console.log(fr[i]);
    
// }

for(const key in fr) {
    console.log(key, fr[key]);
    
}

for (const char of fr) {
    console.log(char);
    
}





