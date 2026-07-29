const on = document.getElementById("on");
const off = document.getElementById("off");
const bulb = document.querySelector(".circle");

// function turnOn() {
//     bulb.style.backgroundColor = "yellow";
// }
// on.addEventListener("click", turnOn);

// function turnOff() {
//     bulb.style.backgroundColor = "white";
// }
// off.addEventListener("click", turnOff);

on.addEventListener("click",()=>{
    bulb.style.backgroundColor = "yellow"
})
off.addEventListener("click",()=>{
    bulb.style.backgroundColor = "white";
})