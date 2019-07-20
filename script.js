// store todos
var todoData = [];

function newTodo() {
    var inputText = document.getElementById("todo-input");
    todoData.push(inputText.value);
    
    var ulElem = document.getElementById("todo-items");
    var liElem = document.createElement("LI");
    var liElemTxt = document.createTextNode(inputText.value);
    ulElem.appendChild(liElem);

    var divElem = document.createElement("DIV");
    liElem.appendChild(divElem);
    
    var divElemTwo = document.createElement("DIV");
    divElem.appendChild(divElemTwo);
    divElemTwo.appendChild(liElemTxt);
    divElemTwo.setAttribute("class", "text-value");

    liElem.setAttribute("class", "remove");
    divElem.setAttribute("class", "li-flex");

    liElem.getElementsByClassName("checked");
    liElem.addEventListener("click", function() {
        liElem.classList.toggle("checked");
    });

    divElemTwo.getElementsByClassName = "text-value";
    console.log(divElemTwo.innerText);
    
    var btnElem = document.createElement("BUTTON");
    var btnElemTxt = document.createTextNode("X");
    btnElem.setAttribute("style", "margin-right: 0;");
    btnElem.appendChild(btnElemTxt);
    divElem.appendChild(btnElem);

    btnElem.addEventListener("click", function(){
        var liElem = this.parentElement.parentElement;
        liElem.remove(this);
    });
}

function deleteAllTodos() {
    todoData = [];

    var liElem = document.getElementById("todo-items");

    liElem.remove();

    var ulElem = document.createElement("UL");
    ulElem.setAttribute("id", "todo-items");

    var inputBlock = document.getElementById("main");
    inputBlock.appendChild(ulElem);
}
