const button = document.getElementById("button");

button.addEventListener("click", (AddClass))
    
function AddClass(){
    button.classList.add("active");
}

function EndAnimation(){
    button.classList.remove("active");
    setTimeout(next, 100);
}
function next(){
    button.classList.add("end");
    setTimeout(checkVanish, 1000);
}

function checkVanish(){
    button.classList.remove("end");
}