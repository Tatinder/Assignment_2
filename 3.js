
document.addEventListener('DOMContentLoaded', function () {
  

    'use strict';
    const form = document.getElementById('contactForm');

   form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Form validation
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || subject === '' || message === '') {
            alert('Please fill out all fields.');
            return;
        }

        // Submit form
        alert('Form submitted successfully!');
        form.reset();
    });
});
