let todoList = JSON.parse(localStorage.getItem('todoList')) || [];

listHTML()

function listHTML(){
    let todoListHTML = '';

    todoList.forEach((todoObject, index) => {
        const task = todoObject.task;
        const dueDate = todoObject.dueDate;
        const html = 
            `<div>${task}</div>
             <div>${dueDate}</div>
             <button onclick = "
                todoList.splice(${index}, 1);
                savetodoList();
                listHTML();
            " class = "delete-todo-button"> Delete </button>`;
        todoListHTML += html
    })

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}


function addToDo() {
    const inputLM = document.querySelector('.js-task-input')
    const task = inputLM.value;

    const dateInputLM = document.querySelector('.js-due-date-input');
    const dueDate = dateInputLM.value;

    todoList.push({
        task,
        dueDate
    });

    savetodoList();

    inputLM.value = '';

    listHTML();
}

function savetodoList() {
    localStorage.setItem('todoList', JSON.stringify(todoList));
}



