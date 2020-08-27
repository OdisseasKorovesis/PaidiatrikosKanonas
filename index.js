mybutton = document.getElementById("scrollToTopBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    console.log(document.body.scrollTop);
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; 
} 