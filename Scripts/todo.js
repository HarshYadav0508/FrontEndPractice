let todo = JSON.parse(localStorage.getItem('todo'));
if (!Array.isArray(todo)) {
    todo = [];
}
rendertodo();

function rendertodo() {

    let todoHTML = '';

    for (let i=0; i < todo.length; i++) {
        const todoObject = todo[i];
        const {name, dueDate} = todoObject;
        const HTML = `
        <div>${name}</div>
        <div class="dueDate">${dueDate}</div>
        <button onclick="
            todo.splice(${i}, 1);
            rendertodo();
        " class="delete-btn">Delete</button>
        `;
        todoHTML += HTML;
    }

    document.querySelector('.js-text').innerHTML = todoHTML;
}

function addtodo() {
    const inputElement = document.querySelector('.js-name-input');
    const dateElement = document.querySelector('.js-duedate');
    const name = inputElement.value;
    const dueDate = dateElement.value;

    todo.push({
        name,
        dueDate
    });
    // console.log(todo);
    inputElement.value = '';
    rendertodo();
    localStorage.setItem('todo', JSON.stringify(todo));
}