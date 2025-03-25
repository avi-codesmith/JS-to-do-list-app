"use strict";

const btn = document.querySelector("button");
const ul = document.querySelector("ul");
const input = document.querySelector("input");
const logo = document.querySelector("h1");
const wrapper = document.querySelector(".wrapper");

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
    const writer = document.createElement("span");
    writer.textContent = inputValue;
    writer.classList.add("text");
    ul.appendChild(list);
    list.appendChild(writer);
    const span = document.createElement("p");
    span.classList.add("delete");
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
  if (e.target.tagName === "SPAN") {
    e.target.classList.toggle("checked");
    saveHistory();
  } else if (e.target.tagName === "P") {
    e.target.parentElement.remove();
    saveHistory();
  }
};

const saveHistory = () => {
  localStorage.setItem("data", ul.innerHTML);
};

// const showHistory = () => {
//   ul.innerHTML = localStorage.getItem("data");
// };

// showHistory();

const focus = () => {
  input.focus();
};

const animation = () => {
  wrapper.style.transform = "scale(1)";
};

btn.addEventListener("click", activeState);
document.addEventListener("keypress", keyPressAc);
btn.addEventListener("click", addList);
document.addEventListener("keypress", keyPressAdd);
logo.addEventListener("click", reload);
ul.addEventListener("click", check);
window.addEventListener("load", focus);
window.addEventListener("load", animation);
