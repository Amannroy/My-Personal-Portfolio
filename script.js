
// Typed.js animation
const typedText = document.querySelector('.text');

if (typedText) {
  const options = {
    strings: ['Frontend Developer', 'Backend Developer', 'Full Stack Developer'],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 2000,
    startDelay: 1000,
    loop: true,
  };

  const typed = new Typed('.text', options);
}


  
// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

// Scroll to top button
const topButton = document.querySelector('.top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    topButton.style.display = 'block';
  } else {
    topButton.style.display = 'none';
  }
});

topButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


 // Form submission handling
 const form = document.getElementById('myForm');

 form.addEventListener('submit', async (e) => {
     e.preventDefault();
     const formData = new FormData(form);

     try {
         const response = await fetch('/your-server-endpoint', {
             method: 'POST',
             body: formData,
         });

         if (response.ok) {
             // Handle success, e.g., display a thank you message
             alert('Form submitted successfully! Thank you for your submission.');
             form.reset(); // Optionally, reset the form
         } else {
             // Handle error, e.g., display an error message
             alert('Form submission failed. Please try again later.');
         }
     } catch (error) {
         // Handle network or other errors
         console.error('Error:', error);
         alert('An error occurred. Please try again later.');
     }
 });



