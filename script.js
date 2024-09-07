const inputBox = document.querySelector("#ipBox");

const listItem = document.querySelector("#list-container");



function addTask(){

    if(inputBox.value === ''){
        alert("Lode ! khuch likh to shi !! ");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listItem.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML =  "\u00d7";
        li.appendChild(span);   
    }

    inputBox.value = "";
    saveData();
}

listItem.addEventListener("click", function(e){

    if(e.target.tagName.toLowerCase() === "li"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName.toLowerCase() === "span"){
        e.target.parentElement.remove();
        saveData();
    }

}, false);


function saveData(){
    localStorage.setItem("Data", listItem.innerHTML);
}

function showData(){
    listItem.innerHTML = localStorage.getItem("Data");

}

showData();
