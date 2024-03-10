let iconn= document.getElementById("iconn");
let nav=document.getElementById("12");
let po=document.getElementById("po");
let bacc=document.getElementById("bacc");
let foot=document.getElementById("foot");
 iconn.onclick=function(){
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark")){
        iconn.src="moon.png"
        nav.style.backgroundColor ='turquoise';
        po.style.color = 'black';
        bacc.style.backgroundColor = 'turquoise';
        foot.style.color = 'black';
    }
    else {
        iconn.src="brightness.png"
        nav.style.backgroundColor ='white';
    }
 }


 var navbar = document.getElementById("12");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyNavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get all navbar links
    var navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    // Add click event listener to each navbar link
    navLinks.forEach(function(navLink) {
        navLink.addEventListener('click', function(event) {
            // Prevent default link behavior
            event.preventDefault();

            // Get the target section's ID from the href attribute of the clicked link
            var targetId = this.getAttribute('href').substring(1);

            // Get the corresponding section element
            var targetSection = document.getElementById(targetId);

            // Check if the target section exists
            if (targetSection) {
                // Scroll to the target section smoothly
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });

                // Close the navbar by toggling the 'show' class on the navbar collapse element
                var navbarCollapse = document.querySelector('.navbar-collapse');
                navbarCollapse.classList.remove('show');
            } else {
                console.error('Target section not found:', targetId);
            }
        });
    });
});


// When the user scrolls the page, execute stickyNavbar
window.onscroll = function() {stickyNavbar()};


 
function validateForm() {
    // Get input field values
    var name = document.getElementById('name').value.trim();
    var number = document.getElementById('number').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();

    // Validate name
    if (name === '') {
        alert('Please enter your name');
        return false;
    }

    // Validate number
    if (number === '') {
        alert('Please enter your number');
        return false;
    }
    if (!/^\d{11}$/.test(number)) {
        alert('Please enter a valid 11-digit number');
        return false;
    }

    // Validate email
    if (email === '') {
        alert('Please enter your email');
        return false;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert('Please enter a valid email address');
        return false;
    }

    // Validate message
    if (message === '') {
        alert('Please enter your message');
        return false;
    }
    
    alert('Thanks for visiting! I\'ll reply soon.');
        
    // Reset the form after submission
    document.getElementById("myForm").reset();
    return true;


    // Prevent form submission
     

    // Form is valid
    


    
}

function downloadCV() {
    // Create a dummy anchor element
    var link = document.createElement('a');
    link.href = '.ahmedali\CV.pdf'; // Specify the path to your CV file
    link.download = 'your_cv.pdf'; // Specify the filename   for the downloaded file
}

document.addEventListener('DOMContentLoaded', function () {
    var navbarToggler = document.querySelector('.navbar-toggler');
    var navbarCollapse = document.querySelector('.navbar-collapse');

    navbarToggler.addEventListener('click', function () {
        if (navbarCollapse.classList.contains('show')) {
            document.body.classList.remove('disable-scroll');
        } else {
            document.body.classList.add('disable-scroll');
        }
    });
});

 