
// Sticky NavBar
const navbar = document.querySelector(".navbar")
const header = document.querySelector(".header")
// window.onscroll = () => {
//     'use strict';
//     if(window.scrollY > header.scrollHeight ) {
//         navbar.classList.add("sticky");
//     }else {
//         navbar.classList.remove("sticky")
//         navbar.classList.add("background")
//     };
// }
window.addEventListener("scroll", function(){
	navbar.classList.toggle("sticky", window.scrollY > header.scrollHeight);
})
