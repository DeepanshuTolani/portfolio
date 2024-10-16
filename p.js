document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});
  // Function to scroll to the top of the page smoothly
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
   // Function to toggle the visibility of the scroll-to-top button based on scroll position
   window.onscroll = function() {
    var scrollButton = document.getElementById('scroll-top');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollButton.classList.add('active');
    } else {
      scrollButton.classList.remove('active');
    }
  };
$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }
    });
});document.addEventListener('DOMContentLoaded', () => {
    // Toggle Navbar Menu
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('show');
        });
    }

    // Smooth Scroll for Navbar Links
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70, // Adjust 70px for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form Submission Handler
    const contactForm = document.querySelector('section.contact form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Simulate form submission and provide feedback
            const formData = new FormData(contactForm);
            const formDataObj = Object.fromEntries(formData.entries());
            console.log('Form Data Submitted:', formDataObj);
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset(); // Clear form fields
        });
    }

    // Skill Hover Effect
    const skills = document.querySelectorAll('.skill');

    skills.forEach(skill => {
        skill.addEventListener('mouseenter', () => {
            skill.style.transform = 'translateY(-10px)';
            skill.style.transition = 'transform 0.3s';
        });

        skill.addEventListener('mouseleave', () => {
            skill.style.transform = 'translateY(0)';
            skill.style.transition = 'transform 0.3s';
        });
    });
   // Scroll to Top Button
   const scrollToTopBtn = document.querySelector('.scroll-to-top');

   if (scrollToTopBtn) {
       window.addEventListener('scroll', () => {
           if (window.scrollY > 300) {
               scrollToTopBtn.classList.add('show');
           } else {
               scrollToTopBtn.classList.remove('show');
           }
       });

       scrollToTopBtn.addEventListener('click', () => {
           window.scrollTo({
               top: 0,
               behavior: 'smooth'
           });
       });
   }
    // Typing Effect
    const typingText = document.querySelector('.typing-text');
    if (typingText) {
        const textArray = typingText.textContent.split('');
        typingText.textContent = '';
        let charIndex = 0;

        const type = () => {
            if (charIndex < textArray.length) {
                typingText.textContent += textArray[charIndex];
                charIndex++;
                setTimeout(type, 150); // Adjust typing speed here
            }
        };

        type();
    }
});
(function() {
    emailjs.init(" tolanideepanshu@gmail.com");
})();


$(document).ready(function () {

    // Toggle menu
    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    // Update scroll indicator
    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        let scrollTop = $(window).scrollTop();
        let docHeight = $(document).height();
        let winHeight = $(window).height();
        let scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;
        $('#scroll-indicator').css('height', scrollPercent + '%');

        // Scroll spy
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // Smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear')
    });

    // EmailJS integration for contact form
    $("#contact-form").submit(function (event) {
        emailjs.init("user_TTDmetQLYgWCLzHTDgqxm");

        emailjs.sendForm('contact_service', 'template_contact', '#contact-form')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                document.getElementById("contact-form").reset();
                alert("Form Submitted Successfully");
            }, function (error) {
                console.log('FAILED...', error);
                alert("Form Submission Failed! Try Again");
            });
        event.preventDefault();
    });
});

// block
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
}, false);

document.addEventListener('keydown', function(e) {
    if (e.keyCode == 123) { // F12
        e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) { // Ctrl+Shift+I
        e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) { // Ctrl+Shift+C
        e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) { // Ctrl+Shift+J
        e.preventDefault();
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) { // Ctrl+U
        e.preventDefault();
    }
});

(function() {
    const element = new Image();
    Object.defineProperty(element, 'id', {
        get: function() {
            window.location.href = 'about:blank';
        }
    });
    console.log(element);
})();
