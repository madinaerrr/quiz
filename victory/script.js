const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")
const content = document.getElementById("content")

btn1.addEventListener("click", click1)
btn2.addEventListener("click2", click1)
btn3.addEventListener("click", click1)


function click1(){
    content.innerHTML="Неправильно"
}

function click2(){
    content.innerHTML="Правильно"
}




