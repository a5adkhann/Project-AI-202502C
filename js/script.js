const toggle = document.getElementById("toggle");
const navbar_mobile = document.getElementById("navbar_mobile");

toggle.addEventListener("click", function() {
    navbar_mobile.classList.toggle("hide");
})