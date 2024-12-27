function addTask() {
    let taskText = document.getElementById("newTask").value;
    if (taskText.trim() === "") return; // Don't add empty tasks

    let li = document.createElement("li");
    li.textContent = taskText;
    li.onclick = function() {
        this.classList.toggle("completed");
    };

    document.getElementById("taskList").appendChild(li);
    document.getElementById("newTask").value = ""; // Clear the input
}
