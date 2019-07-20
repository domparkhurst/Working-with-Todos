var todoData = [];

function newTodo() {
    var todoInput = document.getElementById("todo-input");
    todoData.push(todoInput.value);
    
    var todoItems = document.getElementById("todo-items");
    var liElem = document.createElement("LI");
    var liElemTxt = document.createTextNode(todoInput.value);
    todoItems.appendChild(liElem);

    var divElem = document.createElement("DIV");
    liElem.appendChild(divElem);

    var divElemContainer = document.createElement("DIV");
    divElem.appendChild(divElemContainer);
    divElemContainer.appendChild(liElemTxt);

    divElemContainer.setAttribute("class", "text-value");

    liElem.setAttribute("class", "remove");
    divElem.setAttribute("class", "li-flex");

    liElem.getElementsByClassName("remove");
    liElem.addEventListener("click", function() {
        var bgColour = this.style.backgroundColor = "#eee";
    });

    divElemContainer.getElementsByClassName = "text-value";
    console.log(divElemContainer.innerText);
    
    var btnElem = document.createElement("BUTTON");
    btnElem.setAttribute("style", "margin-right: 0;");

    var btnElemTxt = document.createTextNode("X");
    btnElem.appendChild(btnElemTxt);
    divElem.appendChild(btnElem);

    btnElem.addEventListener("click", function(){
        var liElem = this.parentElement.parentElement;
        liElem.remove(this);
    });
}

function deleteAllTodos() {
    todoData = [];

    var todoItems = document.getElementById("todo-items");
    
    todoItems.remove();

    var ulElem = document.createElement("UL");
    ulElem.setAttribute("id", "todo-items");

    var controlBar = document.getElementById("main");
    controlBar.appendChild(ulElem);
}
