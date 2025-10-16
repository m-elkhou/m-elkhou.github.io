/**
 * Modern Portfolio JavaScript - Clean & Working
 */

class Portfolio {
    constructor() {
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.initializeComponents();
    }

    setupEventListeners() {
        document.addEventListener('DOMContentLoaded', () => {
            this.initAOS();
            this.initTypingEffect();
            this.initSkillBars();
            this.initCounters();
            this.hideLoadingScreen();
        });

        window.addEventListener('scroll', this.throttle(this.handleScroll.bind(this), 16));
        window.addEventListener('resize', this.handleResize.bind(this));
    }

    initializeComponents() {
        this.navbar = document.getElementById('navbar');
        this.navToggle = document.getElementById('nav-toggle');
        this.navMenu = document.getElementById('nav-menu');
        this.themeToggle = document.getElementById('theme-toggle');
        this.loadingScreen = document.getElementById('loading-screen');
        this.backToTopBtn = document.getElementById('back-to-top');
        
        this.setupNavigation();
        this.setupThemeToggle();
        this.setupSmoothScrolling();
        this.setupContactForm();
        this.initBackToTop();
    }

    // Loading Screen
    hideLoadingScreen() {
        if (this.loadingScreen) {
            setTimeout(() => {
                this.loadingScreen.classList.add('hidden');
                setTimeout(() => {
                    this.loadingScreen.style.display = 'none';
                }, 500);
            }, 1000);
        }
    }

    // Navigation
    setupNavigation() {
        if (this.navToggle && this.navMenu) {
            this.navToggle.addEventListener('click', () => {
                this.toggleMobileMenu();
            });
        }

        // Active navigation link
        this.updateActiveNavLink();
    }

    toggleMobileMenu() {
        this.navToggle?.classList.toggle('active');
        this.navMenu?.classList.toggle('active');
        document.body.style.overflow = this.navMenu?.classList.contains('active') ? 'hidden' : '';
    }

    updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${id}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, { threshold: 0.3 });

        sections.forEach(section => observer.observe(section));
    }

    // Scroll Handling
    handleScroll() {
        const scrollY = window.scrollY;
        
        // Navbar scroll effect
        if (this.navbar) {
            if (scrollY > 100) {
                this.navbar.classList.add('scrolled');
            } else {
                this.navbar.classList.remove('scrolled');
            }
        }

        // Back to top button
        if (this.backToTopBtn) {
            if (scrollY > 300) {
                this.backToTopBtn.classList.add('visible');
            } else {
                this.backToTopBtn.classList.remove('visible');
            }
        }
    }

    handleResize() {
        if (window.innerWidth > 768) {
            this.navToggle?.classList.remove('active');
            this.navMenu?.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    // Theme Toggle
    setupThemeToggle() {
        if (this.themeToggle) {
            this.themeToggle.addEventListener('click', () => {
                this.toggleTheme();
            });
        }
    }

    toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        const icon = this.themeToggle?.querySelector('i');
        if (icon) {
            icon.className = newTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }
    }

    // Smooth Scrolling
    setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                
                if (target) {
                    const offsetTop = target.offsetTop - 70;
                    
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu
                    this.navToggle?.classList.remove('active');
                    this.navMenu?.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        });
    }

    // Typing Effect
    initTypingEffect() {
        const typingElement = document.querySelector('.typing-text');
        if (!typingElement) return;

        const texts = [
            'Data Engineer',
            'Cloud Architect', 
            'Big Data Engineer',
            'AWS Specialist',
            'ETL Developer'
        ];

        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        const type = () => {
            const currentText = texts[textIndex];
            
            if (isDeleting) {
                typingElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingElement.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
            }

            let typingSpeed = isDeleting ? 50 : 100;

            if (!isDeleting && charIndex === currentText.length) {
                typingSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                typingSpeed = 500;
            }

            setTimeout(type, typingSpeed);
        };

        // Start typing after a delay
        setTimeout(type, 1000);
    }

    // Skill Bars
    initSkillBars() {
        const skillBars = document.querySelectorAll('.skill-progress');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const skillBar = entry.target;
                    const width = skillBar.getAttribute('data-width');
                    
                    setTimeout(() => {
                        skillBar.style.width = width;
                    }, 200);
                    
                    observer.unobserve(skillBar);
                }
            });
        }, { threshold: 0.5 });

        skillBars.forEach(bar => observer.observe(bar));
    }

    // Counter Animation
    initCounters() {
        const counters = document.querySelectorAll('.stat-number');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = parseInt(counter.getAttribute('data-count'));
                    
                    this.animateCounter(counter, target);
                    observer.unobserve(counter);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => observer.observe(counter));
    }

    animateCounter(element, target) {
        let current = 0;
        const increment = target / 50;
        const duration = 2000;
        const stepTime = duration / 50;

        const timer = setInterval(() => {
            current += increment;
            
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            
            element.textContent = Math.floor(current);
        }, stepTime);
    }

    // Contact Form
    setupContactForm() {
        const form = document.getElementById('contact-form');
        if (!form) return;

        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            // Show loading state
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;

            try {
                // Simulate form submission
                await new Promise(resolve => setTimeout(resolve, 2000));
                
                this.showNotification('Message sent successfully!', 'success');
                form.reset();
            } catch (error) {
                this.showNotification('Failed to send message. Please try again.', 'error');
            } finally {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }
        });
    }

    // Notifications
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-triangle'}"></i>
            <span>${message}</span>
            <button class="notification-close"><i class="fas fa-times"></i></button>
        `;

        document.body.appendChild(notification);

        // Show notification
        setTimeout(() => notification.classList.add('show'), 100);

        // Auto remove
        setTimeout(() => this.removeNotification(notification), 5000);

        // Manual close
        notification.querySelector('.notification-close').addEventListener('click', () => {
            this.removeNotification(notification);
        });
    }

    removeNotification(notification) {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }

    // AOS Initialization
    initAOS() {
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 800,
                easing: 'ease-out-cubic',
                once: true,
                offset: 100
            });
        }
    }

    // Back to Top
    initBackToTop() {
        if (this.backToTopBtn) {
            this.backToTopBtn.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
    }

    // Utility Functions
    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
}

// Initialize Portfolio
const portfolio = new Portfolio();

// Add notification styles
const notificationStyles = `
    .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--card-bg);
        border: 1px solid var(--border-color);
        border-radius: var(--radius-md);
        padding: var(--space-md);
        display: flex;
        align-items: center;
        gap: var(--space-sm);
        box-shadow: var(--shadow-md);
        transform: translateX(400px);
        transition: transform 0.3s ease;
        z-index: 10000;
        max-width: 400px;
    }

    .notification.show {
        transform: translateX(0);
    }

    .notification-success {
        border-left: 4px solid var(--success-color);
    }

    .notification-error {
        border-left: 4px solid var(--error-color);
    }

    .notification i {
        color: var(--accent-color);
    }

    .notification-success i {
        color: var(--success-color);
    }

    .notification-error i {
        color: var(--error-color);
    }

    .notification-close {
        background: none;
        border: none;
        color: var(--text-secondary);
        cursor: pointer;
        padding: 4px;
        margin-left: auto;
    }

    .notification-close:hover {
        color: var(--text-primary);
    }

    @media (max-width: 480px) {
        .notification {
            right: 10px;
            left: 10px;
            max-width: none;
        }
    }
`;

// Inject styles
const styleSheet = document.createElement('style');
styleSheet.textContent = notificationStyles;
document.head.appendChild(styleSheet);

// Set initial theme
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
});

// Performance monitoring
if ('performance' in window) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = performance.getEntriesByType('navigation')[0];
            console.log('Page load time:', Math.round(perfData.loadEventEnd - perfData.loadEventStart), 'ms');
        }, 0);
    });
}