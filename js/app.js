const todoTemplate = document.querySelector("#todoTemplate");
const tasks = document.querySelector("#tasks");
export function renderTodosUI(todos) {
  todos.forEach(({ Id, isCompleted, inputValue: title }) => {
    const cloneTemplate = todoTemplate.content.cloneNode(true);
    console.log(cloneTemplate);
    cloneTemplate.querySelector("#todoTitle").innerText = title;
    // cloneTemplate.querySelector("#todoStatus").checked = isCompleted;
    tasks.appendChild(cloneTemplate);
  });
}

export function removeTodos(todo) {
  tasks.innerHTML = "";
}
