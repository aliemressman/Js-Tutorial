const textInputDOM = document.getElementById("todo-input");
const btnAddTodoDOM = document.getElementById("add-todo");
const todosDOM = document.querySelector("#todos");
const btnClearDOM = document.getElementById("clear");

let textInputValue = "";

class Storage{
    static addTodoStorage(todoArray){
        let storage = localStorage.setItem("todo",JSON.stringify(todoArray));
        return storage;
    }
    static getStorage(){
        let storage = localStorage.getItem("todo") === null 
        ? [] 
        : JSON.parse(localStorage.getItem("todo"));
        return storage;
    }}
let todoArr = Storage.getStorage();

// const {...rest} = todoArr[4];
// console.log(rest);


btnAddTodoDOM.addEventListener("click", function(e){
    e.preventDefault();
    let id = todoArr.length + 1;
    let title = textInputDOM.value;
    const todo = new Todo(id, title);
    todoArr = [...todoArr, todo];
    console.log(todoArr);
    
    //todoArr.push(todo);
    todoArr.reverse();
    Ui.clearInput();  
    Ui.displayTodos();  
    Ui.alert("Todo eklendi!");
    Storage.addTodoStorage(todoArr);
})

class Todo {
    constructor(id,title) {
        this.id = id;
        this.title = title;
    }
}

class Ui{

    static displayTodos(){
        if(todoArr.length === 0){
            todosDOM.innerHTML = "Liste Boş!";
        }else{
            let result = "";
            todoArr.map((item)=> {
            result += `
            <li class="flex justify-between border px-4 py-3 items-center 
            justify-between">
            <span> ${item.title}</span>
            <button class="text-red-400 remove " data-id = "${item.id}"> SİL </button>
        </li> `;
        });
        todosDOM.innerHTML = result;
        }    
    }

    static clearInput(){
        textInputDOM.value = " ";
    }

    static alert(text){
        window.alert(text);
    }

    static removeTodo(){
        todosDOM.addEventListener("click",(e) => {
            if(e.target.classList.contains("remove")){
                e.target.parentElement.remove();
                let btnId = e.target.dataset.id;
                Ui.removeArrayTodo(btnId);
            }
        });
    }
    static removeArrayTodo(id){
        todoArr = todoArr.filter((item) => item.id  !== +id);
        Storage.addTodoStorage(todoArr);
        Ui.alert("Todo Silindi!");
        Ui.displayTodos();

    }

    static clearTodos(){
        btnClearDOM.addEventListener("click",() => {
            todoArr = []
            Storage.addTodoStorage(todoArr);
            Ui.displayTodos();
            Ui.alert("Hepsi silindi.")
        })
    }
}   



window.addEventListener("DOMContentLoaded",() => {
    Ui.removeTodo();
    Ui.displayTodos();
    Ui.clearTodos();
})


// OLD PROJECT
/* textInputDOM.addEventListener("change",function(event){
    textInputValue = event.target.value;
    console.log(textInputValue);   
})
btnAddTodoDOM.addEventListener("click", addTodo);
btnClearDOM.addEventListener("click",clearTODO);

function addTodo(e){
    e.preventDefault();
    todos.unshift({
        id : todos.length + 1,
        todoTitle: textInputValue
    });
    textInputDOM.value = "";
    displayTODO();
}

function displayTODO(){
    if(todos.length === 0){
        todosDOM.innerHTML = "Liste Boş!";
    }else{
        let result = "";
        todos.forEach((item)=> {
        result += `
        <li class="flex justify-between border px-4 py-3 items-center 
        justify-between">
        <span> ${item.todoTitle}</span>
        <button class="text-red-400" onclick = "deleteTODO(${item.id})"> SİL </button>
    </li> `;
    });
    todosDOM.innerHTML = result;
    }     
}
displayTODO();

function deleteTODO(id){
    let deleteID;
    for(let index in todos){
        if(todos[index].id == id){
            deleteID = index;
        }
    }
    todos.splice(deleteID,1);
    displayTODO();
}

function clearTODO(){
    todos.splice(0,todos.length);
    displayTODO();
}
*/