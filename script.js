// store todos
var todoData = [];

function newTodo() {
    // get input value and send it to the array
    var todoInput = document.getElementById("todo-input");
    todoData.push(todoInput.value);
    console.log(todoData);
    
    // create a list item which appends input value
    var todoItems = document.getElementById("todo-items");
    var listItem = document.createElement("LI");
    var listItemTxt = document.createTextNode(todoInput.value);
    todoItems.appendChild(listItem);

    // create a span element to hold text
    var spanElem = document.createElement("SPAN");
    listItem.appendChild(spanElem);
    spanElem.appendChild(listItemTxt);

    // create an input button to remove an element
    // the input will be compatible with a form in the future
    var inputDelElem = document.createElement("INPUT");
    inputDelElem.setAttribute("type", "button");
    inputDelElem.setAttribute("value", "X");
    spanElem.appendChild(inputDelElem);
}
