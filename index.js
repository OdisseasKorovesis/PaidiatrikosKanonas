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
      emailjs.sendForm('service_wy2uqom', 'contact_form', this);
      alert('Σας ευχαριστούμε για το ενδιαφέρον, με την πρώτη ευκαιρία θα έχετε την απάντηση μας!')
      document.getElementById("contact-form").reset();
  });
}

window.onload = function () {
  let sponsorDiv1 = document.querySelector('.sponsors-img--1');
  let sponsorDiv2 = document.querySelector('.sponsors-img--2');
  let footerImgDiv = document.querySelector('.footer-img_container')
  sponsorDiv1.addEventListener('click', function() {
    window.location.href = "http://www.medical.gr";
  });
  sponsorDiv2.addEventListener('click', function() {
    window.location.href = "http://www.arrowezio.com";
  })
  footerImgDiv.addEventListener('click', function() {
    window.location.href = "https://pedtrauma.gr";
  })
}
