const output = document.getElementById("output");
const output1 = document.getElementById("output1");
let tasks = JSON.parse(localStorage.getItem("savedTasks")) || [];
let doneTasks = JSON.parse(localStorage.getItem("doneTasks")) || {};

output1.innerHTML = "<h2 style='text-align:center;margin-top:10%;font-size:40px'>Saved Tasks:</h2>";

function renderTasks() {
    output.innerHTML = ""; 

    for (let task of tasks) {
        const p = document.createElement("div");
        p.textContent = task;
        p.style.width = "30%";
        p.style.border = "0.5px solid black";
        p.style.margin = "2px auto";
        p.style.padding = "10px";
        p.style.fontSize = "25px";
        p.style.flexWrap = "nowrap";
        p.style.color = doneTasks[task] ? "white" : "darkgreen";
        p.style.backgroundColor = doneTasks[task] ? "green" : "transparent";

        p.style.display = "flex";
        p.style.flexDirection = "row";
        p.style.justifyContent = "space-between";
        p.style.alignItems = "center";
        p.style.position = "relative";

        const buttons = document.createElement("div");
        buttons.style.display = "flex";
        buttons.style.gap = "10px";
        buttons.style.flexShrink = "0";

        const cross = document.createElement("button");
        cross.innerHTML = '<i class="fas fa-trash"></i>';
        cross.addEventListener("click", function () {
            tasks = tasks.filter(t => t !== task);
            localStorage.setItem("savedTasks", JSON.stringify(tasks));
            if (doneTasks[task]) {
                delete doneTasks[task];
                localStorage.setItem("doneTasks", JSON.stringify(doneTasks));
            }
            renderTasks();
        });

        const done = document.createElement("button");
        done.innerHTML = "&#x2714;";
        done.addEventListener("click", function () {
            if (doneTasks[task]) {
                delete doneTasks[task];
            } else {
                doneTasks[task] = true;
            }
            localStorage.setItem("doneTasks", JSON.stringify(doneTasks));
            renderTasks();
        });

        buttons.appendChild(done);
        buttons.appendChild(cross);
        p.appendChild(buttons);
        output.appendChild(p);
    }
}

renderTasks();
