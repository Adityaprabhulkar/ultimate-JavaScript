const hello = () => {
    return console.log("Hey how are you. I am fine yaar");

}

function onePlusAvg(x,y) {
    return Math.round(1 + (x + y) / 2)
}

const sum = (p,q) => {
    return p + q
}

let a = 1
let b = 2
let c = 3



let v = hello()

console.log(v);


console.log("One plus Avarage of a and b is ", onePlusAvg(a,b));
console.log("One plus Avarage of b and c is ", onePlusAvg(b,c));
console.log("One plus Avarage of a and c is ", onePlusAvg(a,c));

console.log(sum(3,4));
