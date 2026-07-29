window.onload = function () {

    // Load Appointment Data
    const appointment = JSON.parse(localStorage.getItem("appointment"));

    if (appointment) {
        document.getElementById("patientName").value = appointment.patient;
        document.getElementById("age").value = appointment.age;
        document.getElementById("doctor").value = appointment.doctor;
    }

};

function generateReport(){

    let name = document.getElementById("patientName").value;
    let age = document.getElementById("age").value;
    let doctor = document.getElementById("doctor").value;
    let diagnosis = document.getElementById("diagnosis").value;
    let treatment = document.getElementById("treatment").value;

    if(name=="" || age=="" || doctor=="" || diagnosis=="" || treatment==""){
        alert("Please fill all fields.");
        return;
    }

    document.getElementById("rName").innerHTML = name;
    document.getElementById("rAge").innerHTML = age;
    document.getElementById("rDoctor").innerHTML = doctor;
    document.getElementById("rDiagnosis").innerHTML = diagnosis;
    document.getElementById("rTreatment").innerHTML = treatment;

    // Load Billing Data
    const bill = JSON.parse(localStorage.getItem("bill"));

    if (bill) {
        document.getElementById("billConsultation").innerHTML = bill.consultation;
        document.getElementById("billMedicine").innerHTML = bill.medicine;
        document.getElementById("billTest").innerHTML = bill.test;
        document.getElementById("billTotal").innerHTML = bill.total;
    }

    document.getElementById("report").style.display = "block";

    alert("Report Generated Successfully!");
}