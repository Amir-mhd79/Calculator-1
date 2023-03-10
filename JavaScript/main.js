let num1=document.querySelector("input#num1")
let num2=document.querySelector("input#num2")
let sum=document.querySelector("button#sum")
let sub=document.querySelector("button#sub")
let mul=document.querySelector("button#mul")
let div=document.querySelector("button#div")
let rem=document.querySelector("button#rem")
sum.addEventListener("click",function(){
    document.querySelector("h1.output").innerHTML=Number(num1.value) + Number(num2.value)
})
sub.addEventListener("click",function(){
    document.querySelector("h1.output").innerHTML=Number(num1.value) - Number(num2.value)
})
mul.addEventListener("click",function(){
    document.querySelector("h1.output").innerHTML=Number(num1.value) * Number(num2.value)
})
div.addEventListener("click",function(){
    document.querySelector("h1.output").innerHTML=Number(num1.value) / Number(num2.value)
})
rem.addEventListener("click",function(){
    document.querySelector("h1.output").innerHTML=Number(num1.value) % Number(num2.value)
})