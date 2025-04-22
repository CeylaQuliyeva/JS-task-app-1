
const container = document.querySelector(".container")
const information = document.querySelector(".information")
const information_password = document.querySelector(".information_password")
const my_input = document.querySelector(".my_input")
const my_input_password = document.querySelector(".my_input_password")
const backround_img = document.getElementById("backround_img")

my_input_password.addEventListener("input", function () {
    const length = my_input_password.value.length;
    let blur_effect = 20 - length;
    if (blur_effect < 0) {
        blur_effect = 0
    }
    backround_img.style.filter = `blur(${blur_effect}px)`
});

