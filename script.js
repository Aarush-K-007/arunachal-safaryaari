document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  var msg = document.getElementById('form-msg');
  msg.classList.remove('hidden');
  this.reset();
  setTimeout(function () {
    msg.classList.add('hidden');
  }, 5000);
});

document.querySelectorAll('a[href^="#"]').forEach(function (link) {
  link.addEventListener('click', function (e) {
    var target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
