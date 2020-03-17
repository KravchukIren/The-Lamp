function changeLamp() {
  let color = document.getElementsByName("color")[0].value;
  if (!color) {
    color = "black";
  }
  const button = document.getElementById("turnOn");
  const pTag = document.getElementById("changeText");
  const body = document.getElementById("changeColor");
  const lamp = document.getElementsByClassName("fa-lightbulb")[0];
  pTag.style.color = "black";
  pTag.innerHTML = "Bulb is: ON";
  body.style.backgroundColor = "white";
  lamp.style.color = color;
}

function changeBack() {
  const button = document.getElementById("turnOn");
  const pTag = document.getElementById("changeText");
  const body = document.getElementById("changeColor");
  const lamp = document.getElementsByClassName("fas fa-lightbulb")[0];
  pTag.style.color = "beige";
  pTag.innerHTML = "Bulb is: OFF";
  body.style.backgroundColor = "grey";
  lamp.style.color = "black";
}
