function generateBill(){

let patientName=document.getElementById("patientName").value;
let consultation=Number(document.getElementById("consultation").value);
let medicine=Number(document.getElementById("medicine").value);
let test=Number(document.getElementById("test").value);

if(patientName=="" || consultation==0 || medicine==0 || test==0){
alert("Please fill all fields.");
return;
}

let total=consultation+medicine+test;

document.getElementById("billName").innerHTML=patientName;
document.getElementById("billConsultation").innerHTML=consultation;
document.getElementById("billMedicine").innerHTML=medicine;
document.getElementById("billTest").innerHTML=test;
document.getElementById("billTotal").innerHTML=total;

document.getElementById("bill").style.display="block";
}
function goToReport(){
    window.location.href="reports.html"
}