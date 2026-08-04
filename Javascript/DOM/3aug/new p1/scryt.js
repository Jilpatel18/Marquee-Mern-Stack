const items = document.querySelectorAll(".draggables");
const containers = document.querySelectorAll(".containers");

let dragItme = null
items.forEach((e)=>{
    e.addEventListener("dragstart",()=>{
        dragItme = e
    })
})

containers.forEach((container) => {
  container.addEventListener("dragover", (e) => {
    e.preventDefault(); 
  });
   container.addEventListener("drop", () => {
    if (dragItme) {
      container.appendChild(dragItme);
      dragItme = null;
    }
  });
})