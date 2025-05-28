// Mobile Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Add shadow to header on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.2)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Resume Modal Functionality
const resumeModal = document.getElementById('resumeModal');
const viewResumeBtn = document.getElementById('viewResumeBtn');
const closeResumeModal = document.querySelector('#resumeModal .close-btn');

viewResumeBtn.addEventListener('click', () => {
    resumeModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
});

closeResumeModal.addEventListener('click', () => {
    resumeModal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Certificate Modal Functionality
const certificateModal = document.getElementById('certificateModal');
const closeCertificateModal = document.querySelector('#certificateModal .close-btn');
const certificateCards = document.querySelectorAll('.certificate-card');

certificateCards.forEach(card => {
    const viewBtn = card.querySelector('.view-certificate');
    viewBtn.addEventListener('click', () => {
        const certificateImg = card.querySelector('img').src;
        const certificateTitle = card.querySelector('h3').textContent;
        
        document.getElementById('certificateImage').src = certificateImg;
        document.getElementById('certificateTitle').textContent = certificateTitle;
        
        certificateModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
});

closeCertificateModal.addEventListener('click', () => {
    certificateModal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Project Video Modal Functionality
const projectModal = document.getElementById('projectModal');
const closeProjectModal = document.querySelector('#projectModal .close-btn');
const projectButtons = document.querySelectorAll('.view-project');

projectButtons.forEach(button => {
    button.addEventListener('click', () => {
        const videoUrl = button.getAttribute('data-video');
        const projectTitle = button.closest('.project-card').querySelector('h3').textContent;
        
        document.getElementById('projectVideo').src = videoUrl;
        document.getElementById('projectTitle').textContent = projectTitle;
        
        projectModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
});

closeProjectModal.addEventListener('click', () => {
    document.getElementById('projectVideo').src = '';
    projectModal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Close modals when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === resumeModal) {
        resumeModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    if (e.target === certificateModal) {
        certificateModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    if (e.target === projectModal) {
        document.getElementById('projectVideo').src = '';
        projectModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// EmailJS Contact Form
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const submitBtn = this.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    
    emailjs.sendForm(
        'service_qqqjdaf',     // Your Service ID
        'template_cnktvpr',    // Your Template ID
        this
    )
    .then(() => {
        alert('Message sent successfully!');
        this.reset();
        submitBtn.textContent = 'Send Message';
        submitBtn.disabled = false;
    }, (error) => {
        alert('Failed to send message. Please try again later.');
        console.error('EmailJS Error:', error);
        submitBtn.textContent = 'Send Message';
        submitBtn.disabled = false;
    });
});