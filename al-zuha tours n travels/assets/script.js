document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.main-nav');
  if (!toggle || !nav) return;

  // Force close nav on page load
  nav.classList.remove('open');

  toggle.addEventListener('click', function () {
    nav.classList.toggle('open');
  });

  // Close nav when clicking on a link inside
  var navLinks = nav.querySelectorAll('a');
  navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      nav.classList.remove('open');
    });
  });

  // Close nav if resizing to desktop
  window.addEventListener('resize', function () {
    if (window.innerWidth > 800) nav.classList.remove('open');
  });

  // Close nav when clicking outside
  document.addEventListener('click', function (e) {
    if (!nav.contains(e.target) && !toggle.contains(e.target)) {
      nav.classList.remove('open');
    }
  });
});
