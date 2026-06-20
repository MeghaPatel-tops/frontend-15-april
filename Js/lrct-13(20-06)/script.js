import { subject, userLogged } from "./User.js";



userLogged();

console.log("scrip loaded");

function printSubject(){
    let str="";
    subject.forEach((index)=>{
        str+=`<li>${index}</li>`
    })
    document.getElementById('subList').innerHTML=str;

}

window.onload = printSubject;
