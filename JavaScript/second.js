let x=+prompt("Please Enter The first Number ....")
let y=+prompt("Please Enter The second Number ....")
let calc=prompt("Please Select One of Operands (+ - * / %)")
if (calc === "+"){
    document.querySelector("h1").innerHTML=`Your Answer is ${x + y}`
}else if(calc === "-"){
    document.querySelector("h1").innerHTML=`Your Answer is ${x - y}`
}else if(calc === "*"){
    document.querySelector("h1").innerHTML=`Your Answer is ${x * y}`
}else if(calc === "/"){
    document.querySelector("h1").innerHTML=`Your Answer is ${x / y}`
}else if(calc === "%"){
    document.querySelector("h1").innerHTML=`Your Answer is ${x % y}`
}else{
    document.querySelector("h1").innerHTML="!Please Select the right Command!"
}