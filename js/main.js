// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Resume accordion
  var triggers = document.querySelectorAll('.acc-trigger');
  triggers.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.closest('.acc-item');
      var wasOpen = item.classList.contains('open');
      // close all
      document.querySelectorAll('.acc-item').forEach(function (i) {
        i.classList.remove('open');
        i.querySelector('.icon').textContent = '+';
      });
      // open clicked one if it wasn't already open
      if (!wasOpen) {
        item.classList.add('open');
        item.querySelector('.icon').textContent = '−';
      }
    });
  });
});
