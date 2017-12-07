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


$(document).ready(function(){

	//Кнопка меню

	$(".toggle-menu").click(function(){
		$(this).toggleClass("on");
		$(".main-menu_hidden").slideToggle();
		$(".nav-menu_hidden").slideToggle();
		return false;
	})
})