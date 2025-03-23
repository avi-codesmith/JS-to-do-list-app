"use strict";

const btn = document.querySelector("button");
const sound = new Audio("sound.mp3");
const tasks = document.querySelectorAll("ul li");

const activeState = () => {
  sound.play();
  btn.classList.add("active");
  setTimeout(() => {
    btn.classList.remove("active");
  }, 100);
};

const checked = tasks.forEach((li) => {
  li.addEventListener("click", () => {
    li.classList.toggle("checked");
  });
});

const keyPress = (e) => {
  if (e.key === "Enter") {
    activeState();
  }
};

btn.addEventListener("click", activeState);
document.addEventListener("keypress", keyPress);
document.addEventListener("keypress", activeState);
