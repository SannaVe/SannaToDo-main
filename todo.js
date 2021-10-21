//selectors
const taskInput = document.querySelector(".task-input");
const taskButton = document.querySelector(".task-button");
const taskList = document.querySelector(".task-list");
const filterOption = document.querySelector(".filter-task")

//Event listeners
document.addEventListener("DOMContentLoaded", getTasks);
taskButton.addEventListener("click", addTask);
taskList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTask);

//Functions
function addTask(event){
    event.preventDefault();


    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
// new task creation
    const newTask = document.createElement('li');
    newTask.innerText = taskInput.value;
    newTask.classList.add('task-item');

    taskDiv.appendChild(newTask);

// add to a local storage
    saveLocalTasks(taskInput.value);
// mark task as a done
    const completedButton = document.createElement('button');
    completedButton.innerHTML= '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    taskDiv.appendChild(completedButton);
// delete task
    const trashButton = document.createElement('button');
    trashButton.innerHTML= '<i class="fas fa-trash"></i>';
    trashButton.classList.add("delete-button");
    taskDiv.appendChild(trashButton);
// add task to a tasklist
    taskList.appendChild(taskDiv);
// clear input after adding
    taskInput.value= "";
}
function deleteCheck(e){
    const item = e.target;
//delete task
    if(item.classList[0] === "delete-button") {
        const task = item.parentElement;
        task.remove();
    }
// mark as done
    if(item.classList[0] === "complete-btn") {
        const task = item.parentElement;
        task.classList.toggle("completed");
    }
}
// filters

function filterTask(e){
    const tasks = taskList.childNodes;
    tasks.forEach(function(task){
        switch(e.target.value){
            case "all":
                task.style.display = "flex";
                break;
                case "completed":
                    if(task.classList.contains("completed")){
                        task.style.display = "flex";
                    }else{
                        task.style.display = "none";
                    }
                    break;
                    case "uncompleted":
                        if(!task.classList.contains("completed")){
                            task.style.display = "flex";
                        }else{
                            task.style.display = "none";
                        }
                        break;
        }
    })
}
//checking local storage
function saveLocalTasks(task){
let tasks;
if(localStorage.getItem('tasks')===null){
    tasks = [];
}else{
    tasks = JSON.parse(localStorage.getItem('tasks'));
}
task.push(task);
localStorage.setItem("tasks",JSON.stringify(tasks));
}

function getTasks(){
    let tasks;
    if(localStorage.getItem('tasks')===null){
    tasks = [];
    }else{
    tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task){
        const taskDiv = document.createElement("div");
        taskDiv.classList.add("task");
    // new task creation
        const newTask = document.createElement('li');
        newTask.innerText = task;
        newTask.classList.add('task-item');
    
        taskDiv.appendChild(newTask);

    // mark task as a done
        const completedButton = document.createElement('button');
        completedButton.innerHTML= '<i class="fas fa-check"></i>';
        completedButton.classList.add("complete-btn");
        taskDiv.appendChild(completedButton);
    // delete task
        const trashButton = document.createElement('button');
        trashButton.innerHTML= '<i class="fas fa-trash"></i>';
        trashButton.classList.add("delete-button");
        taskDiv.appendChild(trashButton);
    // add task to a tasklist
        taskList.appendChild(taskDiv);
    })
}
