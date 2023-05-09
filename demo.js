document.getElementById("myHeading").innerHTML = "Hello World";
let headingContent = document.getElementById("myHeading").innerHTML;
console.log(headingContent);

const para = document.createElement("p");
const node = document.createTextNode("This is my text node");
para.appendChild(node);
let myDiv = document.getElementById("myDiv");
myDiv.appendChild(para);

function changeColor() {
  let colors = ["green", "yellow", "red", "blue", "#777777"];
  let random = Math.floor(Math.random() * colors.length);
  console.log(
    "The random number is:" +
      random +
      ", the random color is: " +
      colors[random]
  );
  document.body.style.backgroundColor = colors[random];
}

function changetext(id) {
  id.innerHTML = "This element text has changed!";
}

document.getElementById("myBtn").addEventListener("click", displayDate);
document.getElementById("myBtn").addEventListener("click", updateColor);

function displayDate() {
  document.getElementById("myDate").innerHTML = Date();
}

function updateColor() {
  document.getElementById("myDate").style.color = "green";
}

let myPara = document.querySelectorAll(".para-1");
let myPara2 = document.getElementsByTagName("p");

myPara[2].style.color = "red";
myPara2[0].style.color = "green";

function displayTime() {
  let currentDate = new Date();
  let hours = currentDate.getHours();
  let am = true;
  if (hours > 12) {
    am = false;
    hours -= 12;
  }
  //console.log(hours);
  let currentTime = hours + ":" + currentDate.getMinutes();

  if (am) {
    currentTime += " AM";
  } else {
    currentTime += " PM";
  }

  document.getElementById("time").innerHTML = currentTime;
}

function move() {
  let id = null;
  const elem = document.getElementById("animate");
  let postion = 0;
  clearInterval(id);
  id = setInterval(frame, 5);

  function frame() {
    if (postion == 350) {
      clearInterval(id);
    } else {
      postion++;
      elem.style.top = postion + "px";
      elem.style.left = postion + "px";
    }
  }
}

function age(){
  let age = number(document.getElementById("age").value);
  console.log("Input: " + age + ", " + typeof age);
  return false;
}
