function getMotto() {
    return prompt("Please enter your favorite motto.");
}

function getCount() {
    return parseFloat(prompt("How many times would you like to see the motto displayed?"));
}
function printMotto(motto, count) {
  current = 0;
  while(current < count) {
    console.log((current + 1) + ". " + motto);
    current+=1;
  }
}

let motto = getMotto();
let count = getCount();

printMotto(motto, count);


