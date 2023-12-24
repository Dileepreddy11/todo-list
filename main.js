function addTask() {
    const input = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    const taskText = input.value.trim();
    
    if (taskText !== "") {
    const li = document.createElement("li");
    const currentTime = getCurrentTime();
    li.innerHTML = `<span>${taskText} - ${currentTime}</span><button onclick="removeTask(this)">Remove</button>`;
    taskList.appendChild(li);
    input.value = "";
    }
    }
    
    function removeTask(button) {
    const taskList = document.getElementById("taskList");
    taskList.removeChild(button.parentNode);
    }
    
    function getCurrentTime() {
    const now = new Date();
    const hours = formatTimeUnit(now.getHours());
    const minutes = formatTimeUnit(now.getMinutes());
    const seconds = formatTimeUnit(now.getSeconds());
    return `${hours}:${minutes}:${seconds}`;
    }
    
    function formatTimeUnit(unit) {
    return unit.toString().padStart(2, '0');
    }