const inputBox=document.querySelector("#input-box");
const container=document.querySelector("#list-container");


function addTask(){

if(inputBox.value==''){
    alert("You must enter something!")
}
else{
    let li= document.createElement("li");
    li.innerText=inputBox.value;
    container.appendChild(li);
    let span=document.createElement("span");
    span.innerText="\u00d7"
    li.appendChild(span);
    

} inputBox.value="";
saveData();
}
container.addEventListener("click", function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
e.target.parentElement.remove();
saveData();

}

    }, false
)

function saveData(){
    localStorage.setItem("data",container.innerHTML);
}
function showTsk(){
    container.innerHTML= localStorage.getItem("data");
}
showTsk();