// store todos
var todoData = [];

function newTodo() {
    // get input value to array
    var todoInput = document.getElementById("todo-input");
    todoData.push(todoInput.value);
    
    // create an li element and append the input value
    var todoItems = document.getElementById("todo-items");
    var liElem = document.createElement("LI");
    var liElemTxt = document.createTextNode(todoInput.value);
    todoItems.appendChild(liElem);

    // create a div and append to li
    var divElem = document.createElement("DIV");
    liElem.appendChild(divElem);
    
    // create div below the first div and append text
    var divElemContainer = document.createElement("DIV");
    divElem.appendChild(divElemContainer);
    divElemContainer.appendChild(liElemTxt);

    // set class for div button text container
    divElemContainer.setAttribute("class", "text-value");

    // set attributes li and div below li
    liElem.setAttribute("class", "remove");
    divElem.setAttribute("class", "li-flex");

    // change the color with a click event
    liElem.getElementsByClassName("remove");
    liElem.addEventListener("click", function() {
        // a variable to get the color
        var bgColour = this.style.backgroundColor = "#eee";
    });

    // get div inner text value for "text-value" class
    divElemContainer.getElementsByClassName = "text-value";
    console.log(divElemContainer.innerText);
    
    // create button to remove an element
    var btnElem = document.createElement("BUTTON");
    btnElem.setAttribute("style", "margin-right: 0;");

    // append text to button
    var btnElemTxt = document.createTextNode("X");
    btnElem.appendChild(btnElemTxt);
    divElem.appendChild(btnElem);

    // remove the span and then li element on button click
    btnElem.addEventListener("click", function(){
        var liElem = this.parentElement.parentElement;
        liElem.remove(this);
    });
}

function deleteAllTodos() {
    // clear array data
    todoData = [];

    // get ul element
    var todoItems = document.getElementById("todo-items");

    // remove ul element
    todoItems.remove();

    // create a new ul element and set id
    var ulElem = document.createElement("UL");
    ulElem.setAttribute("id", "todo-items");

    // add the created ul below the controls
    var controlBar = document.getElementById("main");
    controlBar.appendChild(ulElem);
}
