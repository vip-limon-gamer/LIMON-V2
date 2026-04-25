/* ===================================
   MAIN JAVASCRIPT - Interactive Features
   =================================== */

// Global Variables
let currentTheme = 'dark';
let isScrolling = false;

/* ===================================
   PRELOADER
   =================================== */
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    const loadingPercentage = document.querySelector('.loading-percentage');
    let progress = 0;
    
    // Simulate loading progress
    const loadingInterval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress >= 100) {
            progress = 100;
            clearInterval(loadingInterval);
            
            // Hide preloader after loading complete
            setTimeout(() => {
                preloader.classList.add('hidden');
                // Initialize animations after preloader
                initializeAnimations();
            }, 500);
        }
        loadingPercentage.textContent = Math.floor(progress) + '%';
    }, 100);
});

/* ===================================
   NAVIGATION
   =================================== */
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
hamburger?.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger
    const spans = hamburger.querySelectorAll('span');
    spans.forEach((span, index) => {
        if (navMenu.classList.contains('active')) {
            if (index === 0) span.style.transform = 'rotate(45deg) translateY(10px)';
            if (index === 1) span.style.opacity = '0';
            if (index === 2) span.style.transform = 'rotate(-45deg) translateY(-10px)';
        } else {
            span.style.transform = '';
            span.style.opacity = '';
        }
    });
});

// Close menu when clicking nav link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = hamburger?.querySelectorAll('span');
        spans?.forEach(span => {
            span.style.transform = '';
            span.style.opacity = '';
        });
    });
});

// Smooth scroll to sections
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

/* ===================================
   THEME TOGGLE
   =================================== */
const themeToggle = document.getElementById('themeToggle');

themeToggle?.addEventListener('click', () => {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', currentTheme);
    
    // Update theme icon
    const themeIcon = themeToggle.querySelector('.theme-icon');
    themeIcon.textContent = currentTheme === 'dark' ? '◐' : '◑';
    
    // Save preference to localStorage
    localStorage.setItem('theme', currentTheme);
});

// Load saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    currentTheme = savedTheme;
    document.body.setAttribute('data-theme', currentTheme);
    const themeIcon = themeToggle?.querySelector('.theme-icon');
    if (themeIcon) {
        themeIcon.textContent = currentTheme === 'dark' ? '◐' : '◑';
    }
}

/* ===================================
   CURSOR TRAIL
   =================================== */
const cursorTrail = document.querySelector('.cursor-trail');
let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;
const speed = 0.2; // Smooth follow speed

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    if (cursorTrail) {
        cursorTrail.style.opacity = '1';
    }
});

// Animate cursor trail to follow mouse smoothly
function animateCursor() {
    const distX = mouseX - cursorX;
    const distY = mouseY - cursorY;
    
    cursorX += distX * speed;
    cursorY += distY * speed;
    
    if (cursorTrail) {
        cursorTrail.style.left = cursorX + 'px';
        cursorTrail.style.top = cursorY + 'px';
    }
    
    requestAnimationFrame(animateCursor);
}
animateCursor();

/* ===================================
   TYPING ANIMATION
   =================================== */
const typingText = document.getElementById('typingText');
const phrases = [
    'Full Stack Developer',
    'UI/UX Enthusiast',
    'Tech Innovator',
    'Creative Coder',
    'Problem Solver'
];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        // Delete character
        typingText.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
    } else {
        // Add character
        typingText.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
    }
    
    // Determine typing speed
    let typeSpeed = isDeleting ? 50 : 100;
    
    // If word is complete
    if (!isDeleting && charIndex === currentPhrase.length) {
        // Pause before deleting
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        // Move to next phrase
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 500;
    }
    
    setTimeout(typeWriter, typeSpeed);
}

// Start typing animation after page load
setTimeout(typeWriter, 1000);

/* ===================================
   PROFILE IMAGE PLACEHOLDER
   =================================== */
// Create a gradient placeholder for profile image
const profileImage = document.getElementById('profileImage');
if (profileImage && !profileImage.complete) {
    profileImage.style.background = 'linear-gradient(135deg, #00f0ff 0%, #7b2cbf 100%)';
    profileImage.alt = 'Profile Picture';
}

/* ===================================
   REVEAL ON SCROLL
   =================================== */
const revealElements = document.querySelectorAll('.reveal-on-scroll');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 150;
        
        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('revealed');
        }
    });
};

// Initial check
revealOnScroll();

// Check on scroll with throttle
let scrollTimeout;
window.addEventListener('scroll', () => {
    if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout);
    }
    
    scrollTimeout = window.requestAnimationFrame(() => {
        revealOnScroll();
    });
});

/* ===================================
   ANIMATED STATISTICS COUNTER
   =================================== */
const statNumbers = document.querySelectorAll('.stat-number');

const animateCounter = (element) => {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps
    let current = 0;
    
    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };
    
    updateCounter();
};

// Trigger counter animation when visible
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            animateCounter(entry.target);
            entry.target.classList.add('counted');
        }
    });
}, { threshold: 0.5 });

statNumbers.forEach(stat => counterObserver.observe(stat));

/* ===================================
   SKILL PROGRESS BARS ANIMATION
   =================================== */
const progressBars = document.querySelectorAll('.progress-fill');

const animateProgressBar = (bar) => {
    const width = bar.getAttribute('data-width');
    bar.style.width = width + '%';
};

// Trigger progress bar animation when visible
const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            animateProgressBar(entry.target);
            entry.target.classList.add('animated');
        }
    });
}, { threshold: 0.5 });

progressBars.forEach(bar => progressObserver.observe(bar));

/* ===================================
   PROJECT MODAL
   =================================== */
const modal = document.getElementById('projectModal');
const modalClose = document.querySelector('.modal-close');
const viewProjectBtns = document.querySelectorAll('.btn-view-project');

// Open modal
viewProjectBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

// Close modal
modalClose?.addEventListener('click', () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
});

// Close modal when clicking outside
modal?.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
});

/* ===================================
   DIGITAL CLOCK
   =================================== */
const digitalClock = document.getElementById('digitalClock');

function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    if (digitalClock) {
        digitalClock.textContent = `${hours}:${minutes}:${seconds}`;
    }
}

// Update clock every second
setInterval(updateClock, 1000);
updateClock(); // Initial call

/* ===================================
   CONTACT FORM HANDLING
   =================================== */
const contactForm = document.getElementById('contactForm');

contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Here you would typically send the form data to a server
    // For now, we'll just show a success message
    
    // Create success notification
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, #00f0ff 0%, #7b2cbf 100%);
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        box-shadow: 0 0 30px rgba(0, 240, 255, 0.5);
        z-index: 10000;
        animation: slideInRight 0.5s ease-out;
        font-family: var(--font-tech);
    `;
    notification.textContent = 'Message sent successfully!';
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'fadeOut 0.5s ease-out';
        setTimeout(() => notification.remove(), 500);
    }, 3000);
    
    // Reset form
    contactForm.reset();
    
    // Remove focus from inputs to hide labels
    document.querySelectorAll('.form-input').forEach(input => {
        input.blur();
    });
});

/* ===================================
   FORM INPUT ANIMATIONS
   =================================== */
const formInputs = document.querySelectorAll('.form-input');

formInputs.forEach(input => {
    // Add placeholder attribute for the floating label effect
    input.setAttribute('placeholder', ' ');
    
    // Add focus sound effect (visual feedback only, no actual sound)
    input.addEventListener('focus', () => {
        input.parentElement.querySelector('.input-glow')?.style.setProperty('width', '100%');
    });
    
    input.addEventListener('blur', () => {
        if (!input.value) {
            input.parentElement.querySelector('.input-glow')?.style.setProperty('width', '0');
        }
    });
});

/* ===================================
   PARALLAX SCROLLING EFFECT
   =================================== */
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    
    // Parallax for floating elements
    const floatingElements = document.querySelectorAll('.float-item');
    floatingElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.1);
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
    
    // Parallax for profile container
    const profileContainer = document.querySelector('.profile-container');
    if (profileContainer) {
        profileContainer.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

/* ===================================
   GLITCH EFFECT ON HOVER
   =================================== */
const glitchText = document.querySelector('.glitch-text');

if (glitchText) {
    glitchText.addEventListener('mouseenter', () => {
        glitchText.style.animation = 'glitchEffect 0.3s ease-in-out';
    });
    
    glitchText.addEventListener('animationend', () => {
        glitchText.style.animation = '';
    });
}

/* ===================================
   PROJECT CARDS HOVER EFFECTS
   =================================== */
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', function(e) {
        // Add glow effect
        this.style.animation = 'cardHoverGlow 1s ease-in-out infinite';
    });
    
    card.addEventListener('mouseleave', function() {
        // Remove glow effect
        this.style.animation = '';
    });
    
    // 3D tilt effect
    card.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = '';
    });
});

/* ===================================
   INITIALIZE ANIMATIONS
   =================================== */
function initializeAnimations() {
    // Add entrance animations to home section elements
    const homeContent = document.querySelector('.home-content');
    if (homeContent) {
        homeContent.style.opacity = '0';
        setTimeout(() => {
            homeContent.style.transition = 'opacity 1s ease-out';
            homeContent.style.opacity = '1';
        }, 100);
    }
    
    // Animate profile container
    const profileContainer = document.querySelector('.profile-container');
    if (profileContainer) {
        profileContainer.style.opacity = '0';
        profileContainer.style.transform = 'scale(0.8)';
        setTimeout(() => {
            profileContainer.style.transition = 'all 1s ease-out';
            profileContainer.style.opacity = '1';
            profileContainer.style.transform = 'scale(1)';
        }, 300);
    }
    
    // Animate intro text
    const introText = document.querySelector('.intro-text');
    if (introText) {
        introText.style.opacity = '0';
        introText.style.transform = 'translateY(30px)';
        setTimeout(() => {
            introText.style.transition = 'all 1s ease-out';
            introText.style.opacity = '1';
            introText.style.transform = 'translateY(0)';
        }, 600);
    }
}

/* ===================================
   SMOOTH SCROLL BEHAVIOR
   =================================== */
// Already handled by CSS scroll-behavior: smooth
// But we can add custom easing for better effect

/* ===================================
   TIMELINE ANIMATION
   =================================== */
const timelineItems = document.querySelectorAll('.timeline-item');

const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }, index * 200);
        }
    });
}, { threshold: 0.2 });

timelineItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-50px)';
    item.style.transition = 'all 0.6s ease-out';
    timelineObserver.observe(item);
});

/* ===================================
   LIGHT BEAM CURSOR EFFECT
   =================================== */
// Create light beam element
const lightBeam = document.createElement('div');
lightBeam.style.cssText = `
    position: fixed;
    width: 2px;
    height: 100vh;
    background: linear-gradient(to bottom, transparent, var(--primary-color), transparent);
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 9997;
    filter: blur(2px);
`;
document.body.appendChild(lightBeam);

document.addEventListener('mousemove', (e) => {
    lightBeam.style.left = e.clientX + 'px';
    lightBeam.style.opacity = '0.3';
});

document.addEventListener('mouseleave', () => {
    lightBeam.style.opacity = '0';
});

/* ===================================
   INTERACTIVE SOUND EFFECTS (Visual Feedback)
   =================================== */
// Add ripple effect on click
document.addEventListener('click', (e) => {
    const ripple = document.createElement('div');
    ripple.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 2px solid var(--primary-color);
        left: ${e.clientX - 10}px;
        top: ${e.clientY - 10}px;
        pointer-events: none;
        z-index: 9999;
        animation: energyPulse 0.6s ease-out;
    `;
    document.body.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
});

/* ===================================
   FLOATING PARTICLES INTERACTION
   =================================== */
const floatItems = document.querySelectorAll('.float-item');

floatItems.forEach(item => {
    // Random animation delays
    item.style.animationDelay = Math.random() * 5 + 's';
    
    // Mouse interaction
    document.addEventListener('mousemove', (e) => {
        const rect = item.getBoundingClientRect();
        const itemCenterX = rect.left + rect.width / 2;
        const itemCenterY = rect.top + rect.height / 2;
        
        const distanceX = e.clientX - itemCenterX;
        const distanceY = e.clientY - itemCenterY;
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
        
        if (distance < 200) {
            const force = (200 - distance) / 200;
            const moveX = (distanceX / distance) * force * -30;
            const moveY = (distanceY / distance) * force * -30;
            
            item.style.transform = `translate(${moveX}px, ${moveY}px)`;
        } else {
            item.style.transform = '';
        }
    });
});

/* ===================================
   SECTION TRANSITION EFFECTS
   =================================== */
const sections = document.querySelectorAll('.section');

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.8s ease-out';
    sectionObserver.observe(section);
});

/* ===================================
   RESPONSIVE ADJUSTMENTS
   =================================== */
function handleResize() {
    const width = window.innerWidth;
    
    // Adjust particle count based on screen size
    if (width < 768) {
        // Mobile optimizations
        document.documentElement.style.setProperty('--particle-count', '30');
    } else {
        document.documentElement.style.setProperty('--particle-count', '80');
    }
}

window.addEventListener('resize', handleResize);
handleResize(); // Initial call

/* ===================================
   PERFORMANCE OPTIMIZATION
   =================================== */
// Disable animations during scroll for better performance
let scrollTimer;
window.addEventListener('scroll', () => {
    clearTimeout(scrollTimer);
    document.body.classList.add('scrolling');
    
    scrollTimer = setTimeout(() => {
        document.body.classList.remove('scrolling');
    }, 100);
});

/* ===================================
   EASTER EGG: KONAMI CODE
   =================================== */
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            activateEasterEgg();
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

function activateEasterEgg() {
    // Add special effect
    document.body.style.animation = 'rainbow 2s linear infinite';
    
    const message = document.createElement('div');
    message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #00f0ff 0%, #7b2cbf 100%);
        color: white;
        padding: 2rem 3rem;
        border-radius: 15px;
        font-family: var(--font-display);
        font-size: 2rem;
        z-index: 10001;
        box-shadow: 0 0 50px rgba(0, 240, 255, 0.8);
        animation: pulseScale 1s ease-in-out infinite;
    `;
    message.textContent = '🎮 KONAMI CODE ACTIVATED! 🎮';
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.remove();
        document.body.style.animation = '';
    }, 3000);
}

/* ===================================
   CONSOLE WELCOME MESSAGE
   =================================== */
console.log('%c Welcome to MD Lijanur Rahman Limon\'s Portfolio! ', 
    'background: linear-gradient(135deg, #00f0ff 0%, #7b2cbf 100%); color: white; font-size: 20px; padding: 10px; border-radius: 5px;');
console.log('%c Built with ❤️ using HTML, CSS, and JavaScript', 
    'color: #00f0ff; font-size: 14px;');
console.log('%c Try the Konami Code for a surprise! ↑ ↑ ↓ ↓ ← → ← → B A', 
    'color: #7b2cbf; font-size: 12px; font-style: italic;');
