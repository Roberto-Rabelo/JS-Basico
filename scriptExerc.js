var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todo')) || [];

function renderTodos() {
    listElement.innerHTML = " ";
    for (todo of todos) {
        var todotext = document.createTextNode(todo);
        var todoElement = document.createElement('li');

        //criando link 
        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');
        var pas = todos.indexOf(todo)
        linkElement.setAttribute('onclick', 'deleteVetor(' + pas + ')')
        var linkText = document.createTextNode('Excluir');


        linkElement.appendChild(linkText);
        todoElement.appendChild(todotext);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    }
}


renderTodos();

function adicionar() {
    var todotext = inputElement.value;

    todos.push(todotext);
    inputElement.value = '';

    renderTodos();
    saveToStoreage();
}
buttonElement.onclick = adicionar;

function deleteVetor(pas) {
    todos.splice(pas, 1);
    renderTodos()
    saveToStoreage();
}
function saveToStoreage(){
    localStorage.setItem('list_todo', JSON.stringify(todos));
}