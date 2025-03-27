"use strict";

const btn = document.querySelector("button");
const ul = document.querySelector("ul");
const input = document.querySelector("input");
const logo = document.querySelector("h1");
const wrapper = document.querySelector(".wrapper");
const sound = new Audio("errorSound.mp3");

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
    btn.textContent = "Add to list";
    const list = document.createElement("li");
    const writer = document.createElement("span");
    writer.textContent = inputValue;
    writer.title = "Mark as complete";
    writer.classList.add("text");
    const span = document.createElement("p");
    span.classList.add("delete");
    span.title = "Delete";
    span.textContent = "\u00d7";
    const edit = document.createElement("div");
    edit.classList.add("edit");
    edit.title = "Edit";
    edit.innerHTML = "&#9998;";
    ul.appendChild(list);
    list.appendChild(writer);
    list.appendChild(span);
    list.appendChild(edit);
  } else {
    input.classList.add("move");
    input.focus();
    setTimeout(() => {
      input.classList.remove("move");
    }, 400);
    sound.play();
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
    e.target.title = e.target.classList.contains("checked")
      ? "Unmark as completed"
      : "Mark as complete";
    saveHistory();
  } else if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
    saveHistory();
  } else if (e.target.classList.contains("edit")) {
    const listItem = e.target.parentElement;
    const textSpan = listItem.querySelector(".text");
    if (textSpan) {
      input.value = textSpan.textContent;
      btn.textContent = "Edit Task";
      e.target.parentElement.remove();
      input.focus();
    }
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
