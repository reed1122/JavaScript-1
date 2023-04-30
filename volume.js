function getDepth(){
    return parseFloat(prompt("Please enter the house depth:"));
}

function getWidth(){
    return parseFloat(prompt("Please enter the house width:"));
}

function getHeight(){
    return parseFloat(prompt("Please enter the house height:"));
}

function getSweep(){
    return parseFloat(prompt("Please enter the house sweep:"));
}

function houseVolume(width, depth, height, sweep){
    return livingVolume(width, depth, height) + roofVolume(width, depth, sweep); 
}

function livingVolume(width, depth, height,){
    return width * depth * height;
}

function roofVolume(width, depth, sweep){
    let triangle = triangleArea(width, depth, sweep);
    return triangle * depth;
}

function triangleArea(a, b, c){
    let p = (a + b + c) / 2;
    return Math.sqrt(p * (p - a) * (p - b) * (p - c));
}

let houseWidth = getWidth();
let houseDepth = getDepth();
let houseHeight = getHeight();
let houseSweep = getSweep();

alert("The volume of the house is: " + houseVolume(houseWidth, houseDepth, houseHeight, houseSweep));


