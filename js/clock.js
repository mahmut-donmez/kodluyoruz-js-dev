let myName =prompt("adınızı giriniz")
let info = document.querySelector("#myName")
info.innerHTML=myName




let today = new Date();
let now = ` ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()} `
let day=  today.getDay();           
let gün ;
if (day==0) {
    gün = "pazar"
}
else if (day==1) {
    gün = "pazartesi"
}
else if (day==2) {
    gün = "salı"
}
else if (day==3) {
    gün = "çarşamba"
}
else if (day==4) {
    gün = "perşembe"
}
else if (day==5) {
    gün = "cuma"
}
else if (day==6) {
    gün = "cumartesi"
}


let clock = document.querySelector("#myClock")
clock.innerHTML = `${now}   ${gün}   `


