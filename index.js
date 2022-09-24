//selecteurs
//document.querySelector('h4').style.background="yellow"; = faire du html/css avec js


//const baliseHTML = document.querySelector('h4');

// click event

const questionContainer = document.querySelector(".click-event");

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const response = document.querySelector('p');



questionContainer.addEventListener('click', () => {
   //questionContainer.style.background = "rgb(122, 14, 14)"
   //questionContainer.style.border = "3px solid black"

   questionContainer.classList.toggle("question-clicked");
});
btn1.addEventListener('click', () => {
    response.classList.toggle("show-response");
    response.style.background="red";
});

btn2.addEventListener('click', () => {
    response.classList.toggle("show-response");
    response.style.background="green";
   
});

//--------------------------------------------------
//mouse events cercle autour du curseur + réaction à chaque clic

const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e)=>{
 mousemove.style.left = e.pageX + "px";
 
 mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
    mousemove.style.transform = "scale(2)  translate(-25%,-25%)";
});

window.addEventListener("mouseup", () => {
    mousemove.style.transform = "scale(1)  translate(-25%,-25%)";
});
// different de mouse over
questionContainer.addEventListener('mouseenter',  ()=>{
    questionContainer.style.background = "grey";
});

questionContainer.addEventListener("mouseout", () =>{
    questionContainer.style.background = "black";
})
// mouse over
response.addEventListener('mouseover', () => {
    response.style.transform="rotate(2deg)";
});

// key press event

const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

document.addEventListener("keypress", (e) =>{
    key.textContent = e.key;
});

//https://www.youtube.com/watch?v=6q-zt0aQ74U&list=PLEiMYEzpB4QtYf4F6PwW57f971VqUzGhv&index=6