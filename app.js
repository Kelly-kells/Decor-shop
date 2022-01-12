/* eslint-disable no-unused-expressions */
/*$(document).ready(function () {
  $("#menu").click(function () {
    $(this).toggleClass("fa-times");

    $(".navbar").toggleClass("nav-toggle");
  });

  $(window).on("scroll load", function () {
    $("#menu").removeClass("fa-times");

    $(".navbar").removeClass("nav-toggle");
  });

  $(window).on('scroll load', function(){
     
    $("#menu").removeClass("fa-times");

    $(".navbar").removeClass("nav-toggle");

    

  });
});*/

function myFunction() {
  window.scrollTo(0, 1500);
}
var scroll = document.getElementById("link3");
scroll.onclick = myFunction;

const navScroll = document.querySelectorAll("#navbar");
navScroll.forEach((element) => {
  element.addEventListener("click", (e) => {
    window.scrollTo(0,1500)
  });
});
