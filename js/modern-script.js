/**
 * Modern Portfolio JavaScript
 * Enhanced with ES6+ features, better performance, and accessibility
 */

class ModernPortfolio {
  constructor() {
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.initializeComponents();
    this.handlePageLoad();
  }

  setupEventListeners() {
    // DOM Content Loaded
    document.addEventListener('DOMContentLoaded', () => {
      this.initAOS();
      this.initTypingEffect();
      this.initSkillBars();
      this.initCounters();
      this.hideLoadingScreen();
    });

    // Window Load
    window.addEventListener('load', () => {
      this.hideLoadingScreen();
    });

    // Scroll Events
    window.addEventListener('scroll', this.throttle(this.handleScroll.bind(this), 16));

    // Resize Events
    window.addEventListener('resize', this.debounce(this.handleResize.bind(this), 250));

    // Navigation
    this.setupNavigation();

    // Theme Toggle
    this.setupThemeToggle();

    // Contact Form
    this.setupContactForm();

    // Smooth Scrolling
    this.setupSmoothScrolling();
  }

  initializeComponents() {
    // Initialize all components
    this.navbar = document.getElementById('navbar');
    this.navToggle = document.getElementById('nav-toggle');
    this.navMenu = document.getElementById('nav-menu');
    this.themeToggle = document.getElementById('theme-toggle');
    this.loadingScreen = document.getElementById('loading-screen');
    this.backToTopBtn = document.getElementById('back-to-top');
    
    // Set initial theme
    this.initTheme();
    
    // Initialize back to top button
    this.initBackToTop();
    
    // Initialize neural network canvas
    this.initNeuralNetwork();
  }

  handlePageLoad() {
    // Preload critical images
    this.preloadImages();
    
    // Set up intersection observer for animations
    this.setupIntersectionObserver();
    
    // Initialize newsletter form
    this.setupNewsletterForm();
    
    // Initialize project status colors
    this.initProjectStatusColors();
  }

  // Loading Screen Management
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

  // Navigation Management
  setupNavigation() {
    // Mobile menu toggle
    if (this.navToggle && this.navMenu) {
      this.navToggle.addEventListener('click', () => {
        this.toggleMobileMenu();
      });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!this.navMenu?.contains(e.target) && !this.navToggle?.contains(e.target)) {
        this.closeMobileMenu();
      }
    });

    // Active navigation link
    this.updateActiveNavLink();
  }

  toggleMobileMenu() {
    this.navToggle?.classList.toggle('active');
    this.navMenu?.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    document.body.style.overflow = this.navMenu?.classList.contains('active') ? 'hidden' : '';
  }

  closeMobileMenu() {
    this.navToggle?.classList.remove('active');
    this.navMenu?.classList.remove('active');
    document.body.style.overflow = '';
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
    }, {
      threshold: 0.3,
      rootMargin: '-100px 0px -100px 0px'
    });

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

    // Back to top button visibility
    if (this.backToTopBtn) {
      if (scrollY > 300) {
        this.backToTopBtn.classList.add('visible');
      } else {
        this.backToTopBtn.classList.remove('visible');
      }
    }

    // Parallax effects
    this.handleParallax(scrollY);
  }

  handleParallax(scrollY) {
    const heroParticles = document.querySelector('.hero-particles');
    if (heroParticles) {
      const speed = scrollY * 0.5;
      heroParticles.style.transform = `translateY(${speed}px)`;
    }
  }

  // Resize Handling
  handleResize() {
    // Close mobile menu on resize
    if (window.innerWidth > 768) {
      this.closeMobileMenu();
    }
  }

  // Theme Management
  initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    this.updateThemeIcon(savedTheme);
  }

  setupThemeToggle() {
    if (this.themeToggle) {
      this.themeToggle.addEventListener('click', () => {
        this.toggleTheme();
      });
    }
  }

  toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    this.updateThemeIcon(newTheme);
  }

  updateThemeIcon(theme) {
    const icon = this.themeToggle?.querySelector('i');
    if (icon) {
      icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
  }

  // Smooth Scrolling
  setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        
        if (target) {
          const offsetTop = target.offsetTop - 80;
          
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
          
          // Close mobile menu after navigation
          this.closeMobileMenu();
        }
      });
    });

    // Scroll indicator
    const scrollIndicator = document.querySelector('.scroll-arrow');
    if (scrollIndicator) {
      scrollIndicator.addEventListener('click', () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  }

  // Enhanced Typing Effect
  initTypingEffect() {
    const typingElement = document.querySelector('.typing-text');
    if (!typingElement) return;

    const texts = [
      'Data Engineer',
      'Cloud Architect', 
      'Big Data Engineer',
      'AWS Specialist',
      'ETL Developer',
      'Data Warehouse Architect'
    ];

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    let isVisible = false;

    // Only start typing when element is visible
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !isVisible) {
          isVisible = true;
          setTimeout(type, 1000); // Delay start
        }
      });
    }, { threshold: 0.5 });

    observer.observe(typingElement);

    const type = () => {
      if (!isVisible) return;
      
      const currentText = texts[textIndex];
      
      if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 30;
      } else {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 80 + Math.random() * 40; // Variable speed for realism
      }

      if (!isDeleting && charIndex === currentText.length) {
        typingSpeed = 2500;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typingSpeed = 800;
      }

      setTimeout(type, typingSpeed);
    };
  }

  // Skill Bars Animation
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

  // Enhanced Contact Form
  setupContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      // Validate all fields before submission
      const inputs = form.querySelectorAll('.form-input[required]');
      let isValid = true;
      
      inputs.forEach(input => {
        if (!this.validateField(input)) {
          isValid = false;
        }
      });
      
      if (isValid) {
        await this.handleFormSubmission(form);
      } else {
        this.showNotification('Please fill in all required fields correctly.', 'error');
      }
    });

    // Enhanced form validation
    const inputs = form.querySelectorAll('.form-input');
    inputs.forEach(input => {
      input.addEventListener('blur', () => this.validateField(input));
      input.addEventListener('input', () => {
        this.clearFieldError(input);
        // Real-time validation for better UX
        if (input.value.trim()) {
          this.validateField(input);
        }
      });
      
      // Add focus effects
      input.addEventListener('focus', () => {
        input.parentNode.classList.add('focused');
      });
      
      input.addEventListener('blur', () => {
        input.parentNode.classList.remove('focused');
      });
    });
  }

  async handleFormSubmission(form) {
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    // Show loading state safely
    submitBtn.innerHTML = '';
    const spinner = document.createElement('i');
    spinner.className = 'fas fa-spinner fa-spin';
    const text = document.createTextNode(' Sending...');
    submitBtn.appendChild(spinner);
    submitBtn.appendChild(text);
    submitBtn.disabled = true;

    try {
      // Simulate form submission (replace with actual endpoint)
      await this.simulateFormSubmission(new FormData(form));
      
      this.showNotification('Message sent successfully!', 'success');
      form.reset();
    } catch (error) {
      this.showNotification('Failed to send message. Please try again.', 'error');
    } finally {
      // Reset button state safely
      submitBtn.innerHTML = '';
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
    }
  }

  async simulateFormSubmission(formData) {
    // Simulate API call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate success/failure
        Math.random() > 0.1 ? resolve() : reject();
      }, 2000);
    });
  }

  validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = '';

    // Skip validation if field is not required and empty
    if (!field.required && !value) {
      this.clearFieldError(field);
      return true;
    }

    // Check for potential XSS attempts
    if (this.containsSuspiciousContent(value)) {
      isValid = false;
      errorMessage = 'Invalid characters detected. Please remove any HTML or script tags.';
    } else {
      switch (field.type) {
        case 'email':
          isValid = this.validateInput(value, 'email');
          errorMessage = 'Please enter a valid email address';
          break;
        case 'text':
          if (field.name === 'name') {
            isValid = this.validateInput(value, 'name');
            errorMessage = 'Name must be 2-50 characters and contain only letters, spaces, hyphens, and apostrophes';
          } else {
            isValid = this.validateInput(value, 'text');
            errorMessage = 'This field contains invalid characters';
          }
          break;
        case 'textarea':
          isValid = this.validateInput(value, 'message');
          errorMessage = 'Message must be 10-2000 characters and contain only valid characters';
          break;
        default:
          if (field.tagName.toLowerCase() === 'select') {
            isValid = value !== '' && this.validateInput(value, 'text');
            errorMessage = 'Please select a valid option';
          } else if (field.tagName.toLowerCase() === 'textarea') {
            isValid = this.validateInput(value, 'message');
            errorMessage = 'Message must be 10-2000 characters and contain only valid characters';
          } else {
            isValid = this.validateInput(value, 'text');
            errorMessage = 'This field contains invalid characters';
          }
      }
    }

    if (!isValid) {
      this.showFieldError(field, errorMessage);
    } else {
      this.clearFieldError(field);
    }

    return isValid;
  }

  containsSuspiciousContent(input) {
    const suspiciousPatterns = [
      /<script[^>]*>.*?<\/script>/gi,
      /<iframe[^>]*>.*?<\/iframe>/gi,
      /javascript:/gi,
      /on\w+\s*=/gi,
      /<\s*\/?\s*(script|iframe|object|embed|form|input|meta|link)/gi
    ];
    
    return suspiciousPatterns.some(pattern => pattern.test(input));
  }

  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  showFieldError(field, message) {
    field.classList.add('error');
    
    let errorElement = field.parentNode.querySelector('.field-error');
    if (!errorElement) {
      errorElement = document.createElement('span');
      errorElement.className = 'field-error';
      field.parentNode.appendChild(errorElement);
    }
    
    // Use textContent instead of innerHTML to prevent XSS
    errorElement.textContent = this.sanitizeText(message);
  }

  clearFieldError(field) {
    field.classList.remove('error');
    const errorElement = field.parentNode.querySelector('.field-error');
    if (errorElement) {
      errorElement.remove();
    }
  }

  // Enhanced Notifications
  showNotification(message, type = 'info') {
    // Remove existing notifications of the same type
    const existingNotifications = document.querySelectorAll(`.notification-${type}`);
    existingNotifications.forEach(notification => {
      this.removeNotification(notification);
    });

    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    
    const iconMap = {
      success: 'check-circle',
      error: 'exclamation-triangle',
      warning: 'exclamation-circle',
      info: 'info-circle'
    };
    
    // Create elements safely to prevent XSS
    const icon = document.createElement('i');
    icon.className = `fas fa-${iconMap[type] || 'info-circle'}`;
    
    const messageSpan = document.createElement('span');
    messageSpan.textContent = this.sanitizeText(message);
    
    const closeButton = document.createElement('button');
    closeButton.className = 'notification-close';
    closeButton.setAttribute('aria-label', 'Close notification');
    closeButton.innerHTML = '<i class="fas fa-times"></i>';
    
    notification.appendChild(icon);
    notification.appendChild(messageSpan);
    notification.appendChild(closeButton);

    document.body.appendChild(notification);

    // Auto remove after duration based on type
    const duration = type === 'error' ? 7000 : 5000;
    const autoRemoveTimer = setTimeout(() => {
      this.removeNotification(notification);
    }, duration);

    // Manual close
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
      clearTimeout(autoRemoveTimer);
      this.removeNotification(notification);
    });

    // Animate in
    requestAnimationFrame(() => {
      notification.classList.add('show');
    });

    // Add to notifications array for management
    if (!this.notifications) this.notifications = [];
    this.notifications.push(notification);
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
        offset: 100,
        delay: 0
      });
    }
  }

  // Intersection Observer for Performance
  setupIntersectionObserver() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });
  }

  // Image Preloading
  preloadImages() {
    const images = [
      'images/m_elkhou.jpg',
      'images/computer_vision.jpeg',
      'images/media.png',
      'images/facialexpression.png',
      'images/nlp.jpg',
      'images/asr.png',
      'images/iot.jpg'
    ];

    images.forEach(src => {
      const img = new Image();
      img.src = src;
      img.onerror = () => {
        console.warn(`Failed to preload image: ${src}`);
      };
    });
  }

  // Back to Top Button
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

  // Newsletter Form
  setupNewsletterForm() {
    const newsletterForm = document.getElementById('newsletter-form');
    if (!newsletterForm) return;

    newsletterForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = newsletterForm.querySelector('.newsletter-input').value;
      
      if (this.isValidEmail(email)) {
        try {
          // Simulate newsletter subscription
          await this.simulateNewsletterSubscription(email);
          this.showNotification('Successfully subscribed to newsletter!', 'success');
          newsletterForm.reset();
        } catch (error) {
          this.showNotification('Failed to subscribe. Please try again.', 'error');
        }
      } else {
        this.showNotification('Please enter a valid email address.', 'error');
      }
    });
  }

  async simulateNewsletterSubscription(email) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        Math.random() > 0.1 ? resolve() : reject();
      }, 1000);
    });
  }

  // Project Status Colors
  initProjectStatusColors() {
    const statusElements = document.querySelectorAll('.project-status');
    statusElements.forEach(status => {
      const text = status.textContent.toLowerCase();
      
      if (text.includes('production') || text.includes('live') || text.includes('active')) {
        status.style.background = 'rgba(0, 255, 136, 0.1)';
        status.style.color = 'var(--success)';
        status.style.border = '1px solid var(--success)';
      } else if (text.includes('research')) {
        status.style.background = 'rgba(255, 170, 0, 0.1)';
        status.style.color = 'var(--warning)';
        status.style.border = '1px solid var(--warning)';
      } else if (text.includes('beta')) {
        status.style.background = 'rgba(77, 166, 255, 0.1)';
        status.style.color = 'var(--info)';
        status.style.border = '1px solid var(--info)';
      }
    });
  }

  // Neural Network Canvas Animation
  initNeuralNetwork() {
    const canvas = document.getElementById('neural-network');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;
    
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Neural network nodes
    const nodes = [];
    const connections = [];
    const nodeCount = 50;
    
    // Create nodes
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1
      });
    }
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw nodes
      nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;
        
        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
        
        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 212, 255, 0.6)';
        ctx.fill();
      });
      
      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(0, 212, 255, ${0.3 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Pause animation when not visible
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animate();
        } else {
          cancelAnimationFrame(animationId);
        }
      });
    });
    
    observer.observe(canvas);
  }

  // Security Utility Functions
  sanitizeText(text) {
    if (typeof text !== 'string') return '';
    return text.replace(/[<>"'&]/g, (match) => {
      const escapeMap = {
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        '&': '&amp;'
      };
      return escapeMap[match];
    });
  }

  sanitizeHTML(html) {
    const div = document.createElement('div');
    div.textContent = html;
    return div.innerHTML;
  }

  validateInput(input, type = 'text') {
    if (!input || typeof input !== 'string') return false;
    
    const patterns = {
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      name: /^[a-zA-Z\s\-']{2,50}$/,
      text: /^[\w\s\-.,!?()]{1,500}$/,
      message: /^[\w\s\-.,!?()\n]{10,2000}$/
    };
    
    return patterns[type] ? patterns[type].test(input.trim()) : true;
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

  debounce(func, wait, immediate) {
    let timeout;
    return function() {
      const context = this;
      const args = arguments;
      const later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }
}

// Initialize the portfolio
const portfolio = new ModernPortfolio();

// Additional CSS for notifications and form validation
const additionalStyles = `
  .notification {
    position: fixed;
    top: 20px;
    right: 20px;
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    padding: var(--spacing-md);
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    box-shadow: var(--shadow-medium);
    transform: translateX(400px);
    transition: transform var(--transition-medium);
    z-index: 10000;
    max-width: 400px;
  }

  .notification.show {
    transform: translateX(0);
  }

  .notification-success {
    border-left: 4px solid var(--success);
  }

  .notification-error {
    border-left: 4px solid var(--error);
  }

  .notification i {
    color: var(--accent-primary);
  }

  .notification-success i {
    color: var(--success);
  }

  .notification-error i {
    color: var(--error);
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

  .form-input.error {
    border-color: var(--error);
    box-shadow: 0 0 0 3px rgba(255, 68, 68, 0.1);
  }

  .field-error {
    color: var(--error);
    font-size: 0.875rem;
    margin-top: var(--spacing-xs);
    display: block;
  }

  .in-view {
    opacity: 1;
    transform: translateY(0);
  }

  @media (max-width: 480px) {
    .notification {
      right: 10px;
      left: 10px;
      max-width: none;
      transform: translateY(-100px);
    }

    .notification.show {
      transform: translateY(0);
    }
  }
`;

// Inject additional styles
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);

// Service Worker Registration (for PWA capabilities)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('SW registered: ', registration);
      })
      .catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}

// Performance monitoring
if ('performance' in window) {
  window.addEventListener('load', () => {
    setTimeout(() => {
      const perfData = performance.getEntriesByType('navigation')[0];
      console.log('Page load time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
    }, 0);
  });
}

// Error handling
window.addEventListener('error', (e) => {
  console.error('Global error:', e.error);
});

window.addEventListener('unhandledrejection', (e) => {
  console.error('Unhandled promise rejection:', e.reason);
});

// Enhanced utility functions
ModernPortfolio.prototype.formatNumber = function(num) {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
};

ModernPortfolio.prototype.copyToClipboard = function(text) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      this.showNotification('Copied to clipboard!', 'success');
    }).catch(() => {
      this.fallbackCopyToClipboard(text);
    });
  } else {
    this.fallbackCopyToClipboard(text);
  }
};

ModernPortfolio.prototype.fallbackCopyToClipboard = function(text) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.left = '-999999px';
  textArea.style.top = '-999999px';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  
  try {
    document.execCommand('copy');
    this.showNotification('Copied to clipboard!', 'success');
  } catch (err) {
    this.showNotification('Failed to copy to clipboard', 'error');
  }
  
  document.body.removeChild(textArea);
};

// Add click-to-copy functionality for email
document.addEventListener('DOMContentLoaded', () => {
  const emailElements = document.querySelectorAll('[href^="mailto:"], .info-value');
  emailElements.forEach(element => {
    if (element.textContent.includes('@')) {
      element.style.cursor = 'pointer';
      element.title = 'Click to copy email';
      element.addEventListener('click', (e) => {
        if (!element.href) {
          e.preventDefault();
          portfolio.copyToClipboard(element.textContent);
        }
      });
    }
  });
});

export default ModernPortfolio;