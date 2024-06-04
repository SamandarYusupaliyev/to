import { renderTodosUI } from "./app.js";

const dark = document.querySelector("#theme");
const container = document.querySelector(".container");
const list = document.querySelector(".list");
const tasks = document.querySelector("#tasks");
//input
const input = document.querySelector("#input");
const forma = document.querySelector("#forma");

dark.addEventListener("click", () => {
  container.classList.toggle("container-s");
  document.list.style = { background: "#393A4B" };
  if (container.classList.contains("container-s")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.removeItem("theme");
  }
});

if (localStorage.getItem("theme") === "dark") {
  container.classList.add("container-s");
}

forma.onsubmit = (e) => {
  e.preventDefault();
  const inputValue = e.target[1].value;
  const isCompleted = false;
  const id = window.crypto.randomUUID();
  const todo = { inputValue, isCompleted, id };
  addNewTodo(todo);
  input.value = "";
};
const todos = JSON.parse(localStorage.getItem("todos")) || [];
function addNewTodo(todo) {
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
  const todoTemplate = document.querySelector("#todoTemplate");

  const cloneTemplate = todoTemplate.content.cloneNode(true);
  console.log(todo);
  cloneTemplate.querySelector("#todoTitle").innerText = todo.inputValue;
  tasks.appendChild(cloneTemplate);
}

renderTodosUI(todos);
