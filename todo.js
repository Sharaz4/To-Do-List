let inputs = document.getElementById("inp");
let text = document.querySelector(".storage");

function Add() {
    if (inputs.value == "") {
        alert("Please Enter Your Data");
    }
    else {
        let newEle = document.createElement("li");
        newEle.innerHTML = `${inputs.value} <i class="fa-solid fa-trash"></i> `;
        text.appendChild(newEle);
        inputs.value = "";
        saveData();
        newEle.querySelector("i").addEventListener("click", remove);
    }
}

function remove(event) {
    let listItem = event.target.closest("li");
    listItem.remove();
    event.target.removeEventListener("click", remove);
    saveData();
}

function saveData() {
    localStorage.setItem("data", text.innerHTML);
}

