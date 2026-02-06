// let heading =document.getElementById("heading");
// heading.innerHTML="DOM element select by id";


const paragraphs=document.getElementsByTagName("p");
paragraphs[0].innerText="first paragraph updated!!";


// const paragraphs=document.getElementsByTagName("p");
paragraphs[1].innerText="second updated buddy successfully";
paragraphs[2].innerText="third is also updated"




const  myBtn=document.getElementsByClassName("myBtn");
myBtn[1].innerText="click me!!!"




// const heading=document.querySelector("h1");
// Select the heading using querySelector
let heading = document.querySelector("h2");
heading.style.color="blue";
// heading.querySelector="blue";



let listitems=document.querySelectorAll("li");
listItems.forEach(function(item) {
    item.style.color = "green";
});



let paragraph=document.querySelector("my_paragraph");
paragraph.style.color="purple";
paragraph.style.fontSize="50px"
paragraph.style.backgroundColor="lightgrey"