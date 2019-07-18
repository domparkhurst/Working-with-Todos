// store todos
var todoData = [];

function newTodo() {
    // get input value to array
    var todoInput = document.getElementById("todo-input");
    todoData.push(todoInput.value);
    console.log(todoData);
    
    // create list item which appends input value
    var todoItems = document.getElementById("todo-items");
    var listItem = document.createElement("LI");
    var listItemTxt = document.createTextNode(todoInput.value);
    todoItems.appendChild(listItem);

    // create a span element to hold text
    var spanElem = document.createElement("SPAN");
    listItem.appendChild(spanElem);
    spanElem.appendChild(listItemTxt);
    listItem.setAttribute("id", "remove");

    // create input button to remove an element
    var inputDelElem = document.createElement("INPUT");
    inputDelElem.setAttribute("type", "button");
    inputDelElem.setAttribute("value", "X");
    spanElem.appendChild(inputDelElem);
}

function deleteAllTodos() {
    // clear array data
    todoData = [];

    // get ul element
    var todoItems = document.getElementById("todo-items");

    // remove ul element
    todoItems.remove();

    // create an new ul element and set id
    var ulElem = document.createElement("UL");
    ulElem.setAttribute("id", "todo-items");

    // add the created ul below the controls
    var navbar = document.getElementById("main");
    navbar.appendChild(ulElem);
}
