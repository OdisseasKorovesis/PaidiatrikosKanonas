mybutton = document.getElementById("scrollToTopBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if ((document.body.scrollTop > 20 && $(window).width() > 600) || (document.documentElement.scrollTop > 20 && $(window).width() > 600)) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; 
}

(function(){
  emailjs.init('user_fUgKsBd7qkHwcnN8O9YSE');
})();

window.onload = function () {
  document.getElementById('contact-form').addEventListener('submit', function (event) {
      event.preventDefault();
      // generate the contact number value
      this.contact_number.value = Math.random() * 100000 | 0;
      emailjs.sendForm('gmail', 'contact_form', this);
      alert('Σας ευχαριστούμε για το ενδιαφέρον, με την πρώτη ευκαιρία θα έχετε την απάντηση μας!')
      document.getElementById("contact-form").reset();
  });
}
