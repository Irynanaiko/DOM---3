window.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector(".btn"),
        lights = document.querySelectorAll(".lights"),
        red = document.getElementById("red"),
        yellow = document.getElementById("yellow"),
        green = document.getElementById("green");

    btn.addEventListener("click", switchAll);

    let clickTimes = 0;

    function switchAll() {
        clickTimes++;
        switch (clickTimes) {
            case 1:
                red.classList.add("red");
                yellow.classList.remove("yellow");
                green.classList.remove("green");

                clearLights();
                break;
            case 2:
                clearLights();
                yellow.classList.add("yellow");
                red.classList.remove("red");
                green.classList.remove("green");
                break;
            case 3:
                clearLights();
                green.classList.add("green");
                red.classList.remove("red");
                yellow.classList.remove("yellow");
                break;
        }
    }

    function clearLights() {
        lights.forEach((item) => {
            item.classList.remove("first");
        });
    }

    // btn.addEventListener('click', (lights) => {
    //     for (let i = 0; i < lights; i++) {
    //         switch (lights) {
    //             case 0:
    //                 red.classList.add("red");
    //                 yellow.classList.remove("yellow");
    //                 green.classList.remove("green");
    //                 break;

    //             default:
    //                 break;
    //         }
    //     }
    // });

    // red.addEventListener("click", showRed);

    // function showRed() {
    //     red.classList.add("red");
    //     yellow.classList.remove("yellow");
    //     green.classList.remove("green");

    //     lights.forEach((item) => {
    //         item.classList.remove("first");
    //     });
    // }

    // yellow.addEventListener("click", showYellow);

    // function showYellow() {
    //     yellow.classList.add("yellow");
    //     red.classList.remove("red");
    //     green.classList.remove("green");

    //     lights.forEach((item) => {
    //         item.classList.remove("first");
    //     });
    // }

    // green.addEventListener("click", showGreen);

    // function showGreen() {
    //     green.classList.add("green");
    //     red.classList.remove("red");
    //     yellow.classList.remove("yellow");

    //     lights.forEach((item) => {
    //         item.classList.remove("first");
    //     });
    // }
});