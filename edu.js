let menuBtn = document.querySelector(“#menu-btn”);
let navbar = document.querySelector(“.header .flex .navbar”);

menuBtn.onclick = () => {
  menuBtn.classList.toggle(“fa-times”);
  navbar.classList.toggle(“active”);
};

window.onscroll = () => {
  menuBtn.classList.remove(“fa-times”);
  navbar.classList.remove(“active”);
};

var swiper = new Swiper(“.course-slider”, {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  pagination: {
    el: “.swiper-pagination”,
    clickable: true,
  },
  breakpoints: {
    540: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(“.reviews-slider”, {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  pagination: {
 …





 <title>Our Services</title>
 <link rel="stylesheet" href="serviceSection.css">
 <!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
<!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>