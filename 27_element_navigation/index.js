

const changeBodyColor = () => {
    document.body.firstElementChild.style.background = "red"
}

let b = document.body
console.log("the child of body is :", b.firstChild);
console.log("the Element child of body is :", b.firstElementChild);


changeBodyColor()
