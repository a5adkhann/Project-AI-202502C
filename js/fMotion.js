const { animate } = Motion;
const navbar_logo = document.getElementsByClassName("navbar-logo")[0];
const hero_img = document.querySelector(".hero-section .hero-image img")

animate(navbar_logo, {
    translateX: [0, 20, 0]
}, 
    {
        duration: 1.5,
        repeat: Infinity
    }   
);

animate(hero_img, {
    translateY: [0, 20, 0]
},

{
    duration: 1.5,
    repeat: Infinity
}
)