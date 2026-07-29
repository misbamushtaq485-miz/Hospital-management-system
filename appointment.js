function bookAppointment(){

let patient=document.getElementById("patientName").value;
let age=document.getElementById("age").value;
let doctor=document.getElementById("doctor").value;
let date=document.getElementById("date").value;
let time=document.getElementById("time").value;

if(patient=="" || age=="" || doctor=="" || date=="" || time==""){
alert("Please fill all fields.");
return;
}

// Save appointment details in localStorage
const appointment = {
    patient: patient,
    age: age,
    doctor: doctor,
    date: date,
    time: time
};

localStorage.setItem("appointment", JSON.stringify(appointment));

let table=document.getElementById("appointmentTable");

let row=table.insertRow();

row.insertCell(0).innerHTML=patient;
row.insertCell(1).innerHTML=age;
row.insertCell(2).innerHTML=doctor;
row.insertCell(3).innerHTML=date;
row.insertCell(4).innerHTML=time;

document.getElementById("patientName").value="";
document.getElementById("age").value="";
document.getElementById("doctor").value="";
document.getElementById("data").value="";
document.getElementById("time").value="";

}
function goToBilling(){
window.location.href="billing.html"
}
