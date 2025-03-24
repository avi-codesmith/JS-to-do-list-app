"use strict";

const btn = document.querySelector("button");
const ul = document.querySelector("ul");
const input = document.querySelector("input");
const logo = document.querySelector("h1");

const reload = () => {
  location.reload();
};

const activeState = () => {
  btn.classList.add("active");
  setTimeout(() => {
    btn.classList.remove("active");
  }, 100);
};

const keyPressAc = (e) => {
  if (e.key === "Enter") {
    activeState();
  }
};

const addList = () => {
  const inputValue = input.value;

  if (inputValue) {
    const list = document.createElement("li");
    list.textContent = inputValue;
    ul.appendChild(list);
    const span = document.createElement("span");
    span.textContent = "\u00d7";
    list.appendChild(span);
  } else {
    alert("add text");
  }
  input.value = "";
  saveHistory();
};

const keyPressAdd = (e) => {
  if (e.key === "Enter") {
    addList();
  }
};

const check = (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveHistory();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveHistory();
  }
};

const saveHistory = () => {
  localStorage.setItem("data", ul.innerHTML);
};

const showHistory = () => {
  ul.innerHTML = localStorage.getItem("data");
};

showHistory();

btn.addEventListener("click", activeState);
document.addEventListener("keypress", keyPressAc);
btn.addEventListener("click", addList);
document.addEventListener("keypress", keyPressAdd);
logo.addEventListener("click", reload);
ul.addEventListener("click", check);
