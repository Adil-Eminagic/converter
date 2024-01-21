let red = document.getElementById("red");
let green = document.getElementById("green");
let blue = document.getElementById("blue");
let rgbValue = document.getElementById("rgbValue");
let container = document.getElementById("container");

container.style.backgroundColor = "rgb(150,150,150)";
valueRedChnge = () => {
    container.style.backgroundColor = `rgb(${red.value},${green.value},${blue.value})`;
    rgbValue.innerHTML = `rgb(${red.value},${green.value},${blue.value})`;
}

valueGreenChnge = () => {
    container.style.backgroundColor = `rgb(${red.value},${green.value},${blue.value})`;
    rgbValue.innerHTML = `rgb(${red.value},${green.value},${blue.value})`;

}

valueBlueChnge = () => {
    container.style.backgroundColor = `rgb(${red.value},${green.value},${blue.value})`;
    rgbValue.innerHTML = `rgb(${red.value},${green.value},${blue.value})`;

}
