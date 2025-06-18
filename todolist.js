let array = [];
let add = document.getElementById("add");
let save = document.getElementById("save");
let container = document.getElementById("container");
let msg = document.getElementById("msg");
let output=document.getElementById("output");
add.style.backgroundColor = "blue";

add.addEventListener("click", addItem);
save.addEventListener("click", saveItems);

function addItem() {
    let inputs=document.getElementsByClassName("input");
let lastInput = inputs[inputs.length - 1];
    if(lastInput.value=="")
    {

    msg.innerHTML="Please Fill The Previous One.";
    return false;
    }
    msg.innerHTML="";
    let input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Enter a new item";
    input.className = "input";

    let label = document.createElement("p");
    label.textContent = "Add a new task:";
    label.className = "label";

    container.appendChild(label);
    container.appendChild(input);
    container.appendChild(document.createElement("br"));
}

function saveItems() {
        let inputs1=document.getElementsByClassName("input");
let lastInput = inputs1[inputs1.length - 1];
    if(lastInput.value=="")
    {

    msg.innerHTML="Please Fill all Fields Before Submit";
    return false;
    }
    msg.innerHTML="";

    let inputs = document.querySelectorAll(".input");
    array = [];

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value.trim() !== "") {
            array.push(inputs[i].value.trim());
        }
    }
     localStorage.setItem("savedTasks", JSON.stringify(array));
    window.location.href="result.html";
}