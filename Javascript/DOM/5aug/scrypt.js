const main = document.querySelector("main");
const video = document.querySelector(".video");

main.addEventListener("mousemove", (e) => {
    document.getElementById("main-video").style.visibility = "visible"
    video.style.left = (e.clientX - 150) + "px";
    video.style.top = (e.clientY - 100) + "px";
});
