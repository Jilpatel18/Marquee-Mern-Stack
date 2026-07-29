const dada = document.getElementById("dada");
const papa = document.getElementById("papa")
const choro = document.getElementById("choro")

choro.addEventListener("click", (e) => {
    // e.stopPropagation();
    console.log("you clicked on choro")
    choro.style.backgroundColor = "red";
})

papa.addEventListener("click", (e) => {
    // e.stopPropagation();
    console.log("you clicked on papa")
    papa.style.background = "blue";
})

dada.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("you clicked on dada")
    dada.style.background = "pink";
})


// const dada = document.getElementById("dada");
// const papa = document.getElementById("papa");
// const choro = document.getElementById("choro");

// // Capturing
// dada.addEventListener("click", () => {
//     console.log("Dada Capture");
// }, true);

// papa.addEventListener("click", () => {
//     console.log("Papa Capture");
// }, true);

// choro.addEventListener("click", () => {
//     console.log("Choro Capture");
// }, true);

// // Bubbling
// dada.addEventListener("click", () => {
//     console.log("Dada Bubble");
// });

// papa.addEventListener("click", () => {
//     console.log("Papa Bubble");
// });

// choro.addEventListener("click", () => {
//     console.log("Choro Bubble");
// });


