// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ===================================
    // Preloader
    // ===================================
    
    const preloader = document.getElementById('preloader');
    if (preloader) {
        // Hide preloader after page loads
        window.addEventListener('load', function() {
            preloader.classList.add('fade-out');
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        });
    }
    
    // ===================================
    // Navigation & Header
    // ===================================
    
    const header = document.querySelector('.header');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Sticky header on scroll
    let lastScroll = 0;
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
    
    // Hamburger menu toggle
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });
    }
    
    // Close menu when clicking nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navMenu.contains(event.target);
        const isClickOnHamburger = hamburger.contains(event.target);
        
        if (!isClickInsideNav && !isClickOnHamburger && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // Active nav link on scroll
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', function() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 150;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLink) navLink.classList.add('active');
            }
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const headerHeight = header.offsetHeight;
                    const targetPosition = target.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // ===================================
    // Back to Top Button
    // ===================================
    
    const backToTopBtn = document.getElementById('backToTop');
    
    if (backToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });
        
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // ===================================
    // Counter Animation (About Section)
    // ===================================
    
    const counters = document.querySelectorAll('.stat-number');
    
    // Display numbers instantly without animation
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        if (!isNaN(target)) {
            counter.textContent = target + '+';
        }
    });
    
    // ===================================
    // Reviews Slider
    // ===================================
    
    const reviewCards = document.querySelectorAll('.review-card');
    const prevBtn = document.querySelector('.review-btn.prev');
    const nextBtn = document.querySelector('.review-btn.next');
    const sliderDots = document.querySelector('.reviews-dots');
    
    let currentReview = 0;
    let autoSlideInterval;
    
    // Create dots
    if (sliderDots && reviewCards.length > 0) {
        reviewCards.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToReview(index));
            sliderDots.appendChild(dot);
        });
    }
    
    const dots = document.querySelectorAll('.dot');
    
    function showReview(index) {
        reviewCards.forEach(card => card.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        if (reviewCards[index]) {
            reviewCards[index].classList.add('active');
        }
        if (dots[index]) {
            dots[index].classList.add('active');
        }
        
        currentReview = index;
    }
    
    function nextReview() {
        currentReview = (currentReview + 1) % reviewCards.length;
        showReview(currentReview);
    }
    
    function prevReview() {
        currentReview = (currentReview - 1 + reviewCards.length) % reviewCards.length;
        showReview(currentReview);
    }
    
    function goToReview(index) {
        showReview(index);
        resetAutoSlide();
    }
    
    function startAutoSlide() {
        autoSlideInterval = setInterval(nextReview, 5000);
    }
    
    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextReview();
            resetAutoSlide();
        });
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            prevReview();
            resetAutoSlide();
        });
    }
    
    // Start auto-slide
    if (reviewCards.length > 1) {
        startAutoSlide();
        
        // Pause on hover
        const reviewsSlider = document.querySelector('.reviews-slider');
        if (reviewsSlider) {
            reviewsSlider.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
            reviewsSlider.addEventListener('mouseleave', startAutoSlide);
        }
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        const reviewsSection = document.querySelector('.reviews-section');
        if (reviewsSection) {
            const rect = reviewsSection.getBoundingClientRect();
            const isInView = rect.top < window.innerHeight && rect.bottom >= 0;
            
            if (isInView) {
                if (e.key === 'ArrowLeft') {
                    prevReview();
                    resetAutoSlide();
                } else if (e.key === 'ArrowRight') {
                    nextReview();
                    resetAutoSlide();
                }
            }
        }
    });
    
    // ===================================
    // Contact Form Validation & Submission
    // ===================================
    
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        const nameInput = contactForm.querySelector('#name');
        const emailInput = contactForm.querySelector('#email');
        const messageInput = contactForm.querySelector('#message');
        
        // Real-time validation
        function validateField(input, validationFn, errorMessage) {
            const formGroup = input.closest('.form-group');
            const errorSpan = formGroup.querySelector('.error-message');
            
            input.addEventListener('blur', function() {
                if (!validationFn(input.value.trim())) {
                    formGroup.classList.add('error');
                    errorSpan.textContent = errorMessage;
                } else {
                    formGroup.classList.remove('error');
                    errorSpan.textContent = '';
                }
            });
            
            input.addEventListener('input', function() {
                if (formGroup.classList.contains('error') && validationFn(input.value.trim())) {
                    formGroup.classList.remove('error');
                    errorSpan.textContent = '';
                }
            });
        }
        
        // Validation functions
        const validateName = value => value.length >= 2;
        const validateEmail = value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        const validateMessage = value => value.length >= 10;
        
        if (nameInput) {
            validateField(nameInput, validateName, 'Name must be at least 2 characters');
        }
        
        if (emailInput) {
            validateField(emailInput, validateEmail, 'Please enter a valid email address');
        }
        
        if (messageInput) {
            validateField(messageInput, validateMessage, 'Message must be at least 10 characters');
        }
        
        // Form submission
        contactForm.addEventListener('submit', function(e) {
            const name = nameInput.value.trim();
            const email = emailInput.value.trim();
            const message = messageInput.value.trim();
            
            let isValid = true;
            
            // Validate all fields
            if (!validateName(name)) {
                nameInput.closest('.form-group').classList.add('error');
                nameInput.closest('.form-group').querySelector('.error-message').textContent = 'Name must be at least 2 characters';
                isValid = false;
            }
            
            if (!validateEmail(email)) {
                emailInput.closest('.form-group').classList.add('error');
                emailInput.closest('.form-group').querySelector('.error-message').textContent = 'Please enter a valid email address';
                isValid = false;
            }
            
            if (!validateMessage(message)) {
                messageInput.closest('.form-group').classList.add('error');
                messageInput.closest('.form-group').querySelector('.error-message').textContent = 'Message must be at least 10 characters';
                isValid = false;
            }
            
            if (!isValid) {
                e.preventDefault();
                showNotification('Please fill in all required fields correctly.', 'error');
            } else {
                // Let the form submit naturally to Web3Forms
                // Remove error states
                document.querySelectorAll('.form-group.error').forEach(group => {
                    group.classList.remove('error');
                });
            }
        });
    }
    
    // ===================================
    // Notification System
    // ===================================
    
    function showNotification(message, type = 'info') {
        // Remove existing notification if any
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        // Create notification
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
                <span>${message}</span>
            </div>
        `;
        
        // Add styles
        Object.assign(notification.style, {
            position: 'fixed',
            top: '100px',
            right: '20px',
            padding: '20px 30px',
            background: type === 'success' ? '#4CAF50' : '#f44336',
            color: '#fff',
            borderRadius: '10px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            zIndex: '10000',
            animation: 'slideInRight 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            maxWidth: '400px'
        });
        
        document.body.appendChild(notification);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 5000);
    }
    
    // Add notification animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            gap: 15px;
            font-size: 16px;
        }
        
        .notification-content i {
            font-size: 24px;
        }
    `;
    document.head.appendChild(style);
    
    // ===================================
    // Intersection Observer for Animations
    // ===================================
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements
    const animatedElements = document.querySelectorAll('.service-card, .review-card, .hero-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // ===================================
    // Performance Optimizations
    // ===================================
    
    // Lazy load images
    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            img.src = img.src;
        });
    } else {
        // Fallback for browsers that don't support lazy loading
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
        document.body.appendChild(script);
    }
    
    // Debounce function for scroll events
    function debounce(func, wait = 10) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // Apply debounce to scroll-heavy functions
    window.addEventListener('scroll', debounce(function() {
        // Your scroll-heavy code here
    }, 10));
    
    // ===================================
    // Accessibility Enhancements
    // ===================================
    
    // Trap focus in mobile menu when open
    if (navMenu) {
        navMenu.addEventListener('keydown', function(e) {
            if (!navMenu.classList.contains('active')) return;
            
            const focusableElements = navMenu.querySelectorAll('a, button');
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];
            
            if (e.key === 'Tab') {
                if (e.shiftKey && document.activeElement === firstElement) {
                    e.preventDefault();
                    lastElement.focus();
                } else if (!e.shiftKey && document.activeElement === lastElement) {
                    e.preventDefault();
                    firstElement.focus();
                }
            }
            
            if (e.key === 'Escape') {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
                hamburger.focus();
            }
        });
    }
    
    // Skip to main content link (add to HTML if needed)
    const skipLink = document.createElement('a');
    skipLink.href = '#home';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 0;
        background: var(--primary-color);
        color: white;
        padding: 8px;
        text-decoration: none;
        z-index: 10001;
    `;
    skipLink.addEventListener('focus', () => skipLink.style.top = '0');
    skipLink.addEventListener('blur', () => skipLink.style.top = '-40px');
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // ===================================
    // Console Welcome Message
    // ===================================
    
    console.log('%cWelcome to BuuyTheDip! 🚀', 'color: #3382D1; font-size: 24px; font-weight: bold;');
    console.log('%cInterested in our trading courses? Contact us at Info@buuythdip.com', 'color: #66BAF1; font-size: 14px;');
});
