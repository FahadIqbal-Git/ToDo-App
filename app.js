var list = document.getElementById("list");


function addTodo(){
    var todo_input = document.getElementById("todo-input")

    var li = document.createElement('li')
    var liText = document.createTextNode(todo_input.value)
    li.setAttribute("class","listingL")
    li.appendChild(liText)

    var delBtn = document.createElement('button')
    var delText = document.createTextNode("Delete")
    delBtn.setAttribute("class","del")
    delBtn.setAttribute("onclick","delItem(this)")
    delBtn.appendChild(delText)

    var editBtn = document.createElement("button");
    var editText = document.createTextNode("Edit");
    editBtn.setAttribute("class","btnEdit")
    editBtn.setAttribute("onclick","editItem(this)")
    editBtn.appendChild(editText)

    li.appendChild(delBtn)
    li.appendChild(editBtn)
    list.appendChild(li)

    todo_input.value="";
    console.log(li)
}
function delAll(){
    list.innerHTML=""
}

function delItem(e){
    e.parentNode.remove()
}

function editItem(e){
    var val = e.parentNode.firstChild.nodeValue
    var editValue = prompt("Edit Task",val)
    e.parentNode.firstChild.nodeValue = editValue
}
