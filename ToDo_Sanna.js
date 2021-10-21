//selectors
const taskInput = document.querySelector(".task-input");
const taskButton = document.querySelector(".task-button");
const taskList = document.querySelector(".task-list");

//Event listeners
taskButton.addEventListener("click", addTask);

//Functions
function addTask(event){
    event.preventDefault();


    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");

    const newTask = document.createElement('li');
    newTask.innerText = 'Hi';
    newTask.classList.add('task-item');

    taskDiv.appendChild(newTask);

    const completedButton = document.createElement('button');
    completedButton.innerHTML= '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    taskDiv.appendChild(completedButton);

    const trashButton = document.createElement('button');
    trashButton.innerHTML= '<i class="fas fa-trash"></i>';
    trashButton.classList.add("delete-button");
    taskDiv.appendChild(trashButton);

    taskList.appendChild(taskDiv);
}



