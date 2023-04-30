for(var i = 1; i <= 5; i++){
    console.log("The number is " + i);
}

var person = {"name" : "Corey", "age": "34"};


for(var prop in person){
    console.log(prop + " = " + person[prop]);
}

let letters = ["a", "b", "c"];

for(let letter of letters){
    console.log(letter);
}

let greet = "Hello World";

for(let character of greet){
    console.log(character)
}