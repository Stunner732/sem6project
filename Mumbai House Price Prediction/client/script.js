document.addEventListener("DOMContentLoaded", function() {
    var aboutLink = document.querySelector('.scroll-to-about');
    var aboutSection = document.getElementById('about');
  
    aboutLink.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default behavior of the link
  
      // Scroll to the about section smoothly
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    });
  });
  