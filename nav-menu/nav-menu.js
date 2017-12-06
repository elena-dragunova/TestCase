window.onscroll = function() {getSticky()};

var navbar = document.querySelector(".nav-menu");

var sticky = navbar.offsetTop;

function getSticky() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}