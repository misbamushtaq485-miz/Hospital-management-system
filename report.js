function generateReport(){

let name=document.getElementById("patientName").value;
let age=document.getElementById("age").value;
let doctor=document.getElementById("doctor").value;
let diagnosis=document.getElementById("diagnosis").value;
let treatment=document.getElementById("treatment").value;

if(name=="" || age=="" || doctor=="" || diagnosis=="" || treatment==""){
alert("Please fill all fields.");
return;
}

document.getElementById("rName").innerHTML=name;
document.getElementById("rAge").innerHTML=age;
document.getElementById("rDoctor").innerHTML=doctor;
document.getElementById("rDiagnosis").innerHTML=diagnosis;
document.getElementById("rTreatment").innerHTML=treatment;

document.getElementById("report").style.display="block";

alert("Report Generated Successfully!");
}