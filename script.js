// store todos
var todoData = [];

// store values
var value;

function newTodo() {
    // get input value to array
    var todoInput = document.getElementById("todo-input");
    todoData.push(todoInput.value);
    console.log(todoData);
    
    // create list item and append value
    var todoItems = document.getElementById("todo-items");
    var listItem = document.createElement("LI");
    var listItemTxt = document.createTextNode(todoInput.value);
    todoItems.appendChild(listItem);
    listItem.appendChild(listItemTxt);
}

console.log(todoData);
