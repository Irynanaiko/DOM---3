window.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector(".btn"),
        lights = document.querySelectorAll(".lights"),
        red = document.getElementById("red"),
        yellow = document.getElementById("yellow"),
        green = document.getElementById("green");

    red.addEventListener("click", showRed);

    function showRed() {
        red.classList.add("red");
        yellow.classList.remove("yellow");
        green.classList.remove("green");

        lights.forEach((item) => {
            item.classList.remove("first");
        });
    }

    yellow.addEventListener("click", showYellow);

    function showYellow() {
        yellow.classList.add("yellow");
        red.classList.remove("red");
        green.classList.remove("green");

        lights.forEach((item) => {
            item.classList.remove("first");
        });
    }

    green.addEventListener("click", showGreen);

    function showGreen() {
        green.classList.add("green");
        red.classList.remove("red");
        yellow.classList.remove("yellow");

        lights.forEach((item) => {
            item.classList.remove("first");
        });
    }
});