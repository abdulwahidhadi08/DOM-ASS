let heading = document.getElementById("heading");
  heading.style.color="brown";
  heading.style.margin="30px";
//   heading.style.fontStyle="800px"
heading.style.transition="3s";
// heading.style.transitionProperty="height";
heading.innerHTML="wellcome to the javascript dom"

let para =document.getElementById("para");
para.style.color="blue";
function good(){
    para.innerHTML="paragraph text changed sucees fully because this is a task that in this task we should convert this is a paragraph to convert paragraph text successfully"

}

let khan =document.getElementById("khan");
 khan.style.backgroundColor="lightblue";


function bad() {
    khan.innerHTML="lightblue";
    khan.style.width="1500px"
    khan.style.height="1500px"
   

}


let alertBtn=document.createElement("alertBtn");


function showAlert(){
    alert("dom is working buddy!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
}

// function updatetext(){
// let inputValue =document.getElementById("userInput").value;
// document.getElementById("outertext").innerText=inputValue;
// }


 function updateText() {
            let inputValue = document.getElementById("userInput").value;
            document.getElementById("outputText").innerText = inputValue;
        }