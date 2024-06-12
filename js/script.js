document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Here you can handle the form submission, e.g., send the data to the server or display a message
        console.log('Form submitted:', { name, email, message });

        // Display a thank you message or send the data to your backend
        alert('Thank you for your message, we will get back to you shortly!');
        
        // Optionally clear the form
        form.reset();
    });
});

