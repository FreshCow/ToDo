const todoform = document.querySelector(".js-todoform"),
      todoinput= todoform.querySelector("input"),
      todolist = document.querySelector(".js-todolist");

const todos_ls = "todos";

function filterfn(todo){
    return todo.id === 1
}

let todos = [];

function deletetodo(event){
    const btn = event.target;
    const li = btn.parentNode;
    todolist.removeChild(li);
    const cleantodos = todos.filter(function(todo){
        console.log(todo.id, li.id);
        return todo.id !== parseInt(li.id);
    });
   todos = cleantodos;
   savetodos();
}

function savetodos(){
    localStorage.setItem(todos_ls,JSON.stringify(todos));
}

function painttodo(text) {
    const li = document.createElement("li");
    const delbt = document.createElement("button");
    const span = document.createElement("span");
    const newid = todos.length + 1;
    delbt.innerHTML = "❌";
    delbt.addEventListener("click",deletetodo);
    span.innerText = text;
    li.appendChild(delbt);
    li.appendChild(span);
    li.id = newid;
    todolist.appendChild(li);
    const todoobj = {
        text : text,
        id: newid
    }
    todos.push(todoobj);
    savetodos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = todoinput.value;
    painttodo(currentValue);
    todoinput.value = "";
}

function loadtodos() {
    const loadedToDos = localStorage.getItem(todos_ls);
    if (loadedToDos !== null) {
      const parsedToDos = JSON.parse(loadedToDos);
      parsedToDos.forEach(function(todo) {
        painttodo(todo.text);
      });
    }
  }

function init() {
    loadtodos();
    todoform.addEventListener("submit",handleSubmit);
   }

   init();