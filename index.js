let date_id=document.querySelector("#date")
let det=""
for(let i=1;i<=31;i++)
{
det+=`<option value=${i}>${i}</option>`
}
date_id.innerHTML=det

console.log(date_id)
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let date=new Date()
let month_id=document.querySelector("#month")
let month=""
for(let i=0;i<12;i++)
{
month+=`<option value=${months[date.getMonth()+i]}>${months[date.getMonth()+i]}</option>`
}
month_id.innerHTML=month


let year_id=document.querySelector("#year")
let year=""
for(let i="1970";i<=date.getFullYear();i++)
{
year+=`<option value=${i}>${i}</option>`

}
year_id.innerHTML=year

let birth_day=document.querySelector(".date_of_birth")
function dateOfBirth(event){
    let dob={
        date:document.querySelector("#date").value,
        
        month:document.querySelector("#month").value,

        year:document.querySelector("#year").value

    }
    birth_day.innerHTML=`<h3>BIRTH DATE IS:</h3><h1><b>${dob.date} ${dob.month},${dob.year}</b></h1>`

}
   
console.log(date.getFullYear())