function registerPatient(){

let name=document.getElementById("name").value;
let age=document.getElementById("age").value;
let gender=document.getElementById("gender").value;
let disease=document.getElementById("disease").value;

if(name=="" || age=="" || gender=="" || disease==""){
alert("Please fill all fields");
return;
}

let table=document.getElementById("patientTable");

let row=table.insertRow();

row.insertCell(0).innerHTML=name;
row.insertCell(1).innerHTML=age;
row.insertCell(2).innerHTML=gender;
row.insertCell(3).innerHTML=disease;

document.getElementById("name").value="";
document.getElementById("age").value="";
document.getElementById("gender").value="";
document.getElementById("disease").value="";

alert("Patient Registered Successfully");

}