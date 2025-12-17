
console.time("forloop");

for(let i=0;i<500;i++) {
    console.log(233);
    
}
console.timeEnd("forloop");


console.time("whileloop");
let i = 0
while( i<500) {
    console.log(233)
    i++
    
}
console.timeEnd("whileloop");