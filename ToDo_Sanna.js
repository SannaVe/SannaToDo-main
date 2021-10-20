//selectors
const taskinput = document.querySelector('.task-input');
const taskbutton = document.querySelector('.task-button');
const tasklist = document.querySelector('.task-list');

//Event listeners
taskbutton.addEventListener('click', addTask);

//Functions
function addTask(event){
    event.preventDefault();

    const taskDiv =document.createElement('div');
    taskDiv.classlist.add('task');

    const newTask = document.createElement('li');
    newTask.innerText = 'Hi';
    newTask.classlist.add('task-item');

    taskDiv.appendChild(newTask);

    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-button");
    taskDiv.appendChild(completedButton);

    const deletedButton = document.createElement('button');
    deletedButton.innerHTML = '<i class="fas fa-check"></i>';
    deletedButton.classList.add("delete-button");
    taskDiv.appendChild(deletedButton);

    taskList.appendChild(taskDiv);


}
