$(document).ready(function () {
    $(".menu-icon").click(function () {
        $(".menu")
    });
    $(".skills-btn").click(function () {
        $(".about-btn").removeClass("active");
        $(".skills-btn").addClass("active");
        $(".about-text").hide();
        $(".skills-certification-text").css("display", "inline-block");
    });
    $(".about-btn").click(function () {
        $(".skills-btn").removeClass("active");
        $(".about-btn").addClass("active");
        $(".skills-certification-text").hide();
        $(".about-text").show();
    });
    $(".certificateBtn").click(function () {
        $(".certificateBtn").addClass("activeSC");
        $(".skillBtn").removeClass("activeSC");
        $(".certification-text").show();
        $(".skills-text").hide();
    });
    $(".skillBtn").click(function () {
        $(".certificateBtn").removeClass("activeSC");
        $(".skillBtn").addClass("activeSC");
        $(".certification-text").hide();
        $(".skills-text").show();
    });

});
// JavaScript for Bootstrap form validation
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission if validation fails
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()

// Get the menu icon, sidebar, close button, and nav items
const menuIcon = document.getElementById('menuIcon');
const sideNav = document.getElementById('sideNav');
const closeBtn = document.getElementById('closeBtn');
const navLinks = document.querySelectorAll('.side-nav .nav-link');

// When the menu icon is clicked, open the sidebar
menuIcon.onclick = function () {
    sideNav.style.width = '250px'; // Adjust the width as per your preference
}

// When the close button is clicked, close the sidebar
closeBtn.onclick = function () {
    sideNav.style.width = '0';
}

// Add an event listener to each nav link to close the sidebar on click
navLinks.forEach(function (link) {
    link.onclick = function () {
        sideNav.style.width = '0'; // Close sidebar when any nav item is clicked
    }
});

// api code
const contactForm = document.querySelector('.needs-validation');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
    };

    try {
        const response = await fetch('http://localhost:3308/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const result = await response.json();
        if (response.ok && result.success) {
            alert(result.message); // Show success message
            contactForm.reset(); // Reset form fields
        } else {
            alert('There was an error submitting your form: ' + result.message);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    }
});

