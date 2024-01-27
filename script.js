document.addEventListener('DOMContentLoaded', function () {
  let scrollUpButton = document.getElementById('top');

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    // Check if the screen width is greater than 1055px
    if (window.innerWidth > 1055) {
      if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        scrollUpButton.style.display = 'block';
      } else {
        scrollUpButton.style.display = 'none';
      }
    } else {
      // If screen width is not greater than 1055px, always hide the button
      scrollUpButton.style.display = 'none';
    }
  }

  scrollUpButton.addEventListener('click', function () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  });
});
