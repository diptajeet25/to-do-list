let array = [];
let add = document.getElementById("add");
let save = document.getElementById("save");
let container = document.getElementById("container");
let output = document.getElementById("output");

add.style.backgroundColor = "blue";

add.addEventListener("click", addItem);
save.addEventListener("click", saveItems);

function addItem() {
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
    let inputs = document.querySelectorAll(".input");
    array = [];

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value.trim() !== "") {
            array.push(inputs[i].value.trim());
        }
    }

    output.innerHTML = '';
    output.innerHTML = '<h2 style="color:black">Saved Tasks:</h2>';

    for (let i = 0; i < array.length; i++) {
        let item = document.createElement("p");
        item.textContent = array[i];
        output.appendChild(item);
    }

    output.style.backgroundColor = "yellow";
    output.style.padding = "10px";
    output.style.borderRadius = "5px";
    output.style.marginTop = "20px";
    output.style.marginLeft = "780px";
    output.style.marginBottom = "200px";
    output.style.fontFamily = "Arial, sans-serif";
    output.style.fontSize = "26px";
    output.style.color = "darkblue";
    output.style.textAlign = "center";
    output.style.border = "1px solid black";
    output.style.width = "500px";
}
