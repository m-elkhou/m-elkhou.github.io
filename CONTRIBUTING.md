# Contributing to Modern Portfolio

Thank you for your interest in contributing to this modern portfolio project! This document provides guidelines and information for contributors.

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm 8+
- Git
- Modern web browser
- Code editor (VS Code recommended)

### Development Setup
1. **Fork and Clone**
   ```bash
   git clone https://github.com/your-username/m-elkhou.github.io.git
   cd m-elkhou.github.io
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm start
   ```

4. **Open in Browser**
   Navigate to `http://localhost:3000/index.html`

## 📁 Project Structure

```
├── index.html                 # Modern HTML structure
├── css/
│   └── modern-style.css       # Modern CSS with dark theme
├── js/
│   └── modern-script.js       # Modern JavaScript
├── images/                    # Image assets
├── .github/
│   └── workflows/             # CI/CD pipelines
├── .vscode/                   # VS Code settings
└── docs/                      # Documentation
```

## 🎯 Contribution Areas

### 🎨 Design & UI/UX
- Visual improvements and animations
- Accessibility enhancements
- Mobile responsiveness
- Theme customizations

### 🔧 Technical Improvements
- Performance optimizations
- Code quality improvements
- Security enhancements
- Browser compatibility

### 📝 Content Updates
- Project information updates
- Skill additions
- Experience updates
- Documentation improvements

### 🐛 Bug Fixes
- Cross-browser issues
- Responsive design problems
- JavaScript errors
- CSS inconsistencies

## 📋 Development Guidelines

### Code Style
- **HTML**: Semantic, accessible markup
- **CSS**: BEM methodology, mobile-first approach
- **JavaScript**: ES6+, functional programming preferred
- **Comments**: Clear, concise documentation

### Naming Conventions
- **CSS Classes**: kebab-case (e.g., `hero-section`)
- **JavaScript**: camelCase (e.g., `initializeComponents`)
- **Files**: kebab-case (e.g., `modern-style.css`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `CACHE_NAME`)

### Performance Standards
- **Lighthouse Score**: 90+ for all categories
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

### Accessibility Requirements
- **WCAG 2.1 AA** compliance minimum
- Keyboard navigation support
- Screen reader compatibility
- Color contrast ratio 4.5:1 minimum

## 🔄 Development Workflow

### 1. Create Feature Branch
```bash
git checkout -b feature/your-feature-name
```

### 2. Make Changes
- Follow coding standards
- Write clear commit messages
- Test across browsers and devices

### 3. Run Tests
```bash
npm test
npm run lighthouse
```

### 4. Commit Changes
```bash
git add .
git commit -m "feat: add new feature description"
```

### 5. Push and Create PR
```bash
git push origin feature/your-feature-name
```

## 📝 Commit Message Format

Use conventional commits format:

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

### Types
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Examples
```bash
feat(hero): add typing animation effect
fix(nav): resolve mobile menu toggle issue
docs(readme): update installation instructions
style(css): improve dark theme colors
```

## 🧪 Testing Guidelines

### Manual Testing
- Test on multiple browsers (Chrome, Firefox, Safari, Edge)
- Test on different devices (mobile, tablet, desktop)
- Test with different screen sizes and orientations
- Test keyboard navigation
- Test with screen readers

### Automated Testing
```bash
# Run all tests
npm test

# Individual test commands
npm run validate:html    # HTML validation
npm run validate:css     # CSS linting
npm run validate:js      # JavaScript linting
npm run lighthouse       # Performance audit
```

### Performance Testing
- Use Chrome DevTools for performance profiling
- Test with slow 3G network simulation
- Monitor memory usage and CPU performance
- Validate Core Web Vitals metrics

## 🎨 Design Guidelines

### Color Palette
```css
/* Primary Colors */
--accent-primary: #00d4ff;    /* Cyan */
--accent-secondary: #0099cc;  /* Dark Cyan */

/* Background Colors */
--bg-primary: #0a0a0a;        /* Deep Black */
--bg-secondary: #111111;      /* Dark Gray */
--bg-card: #1e1e1e;          /* Card Background */

/* Text Colors */
--text-primary: #ffffff;      /* White */
--text-secondary: #b3b3b3;    /* Light Gray */
--text-muted: #888888;        /* Muted Gray */
```

### Typography Scale
```css
/* Font Sizes */
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
```

### Spacing System
```css
/* Spacing Scale */
--spacing-xs: 0.5rem;   /* 8px */
--spacing-sm: 1rem;     /* 16px */
--spacing-md: 1.5rem;   /* 24px */
--spacing-lg: 2rem;     /* 32px */
--spacing-xl: 3rem;     /* 48px */
--spacing-xxl: 4rem;    /* 64px */
```

## 🔍 Code Review Process

### Before Submitting PR
- [ ] Code follows style guidelines
- [ ] All tests pass
- [ ] Performance benchmarks met
- [ ] Accessibility requirements satisfied
- [ ] Cross-browser compatibility verified
- [ ] Documentation updated

### PR Review Criteria
- **Functionality**: Does it work as expected?
- **Performance**: Does it maintain or improve performance?
- **Security**: Are there any security implications?
- **Accessibility**: Is it accessible to all users?
- **Code Quality**: Is the code clean and maintainable?
- **Documentation**: Is it properly documented?

## 🐛 Bug Reports

### Before Reporting
1. Check existing issues
2. Test on multiple browsers
3. Clear cache and cookies
4. Disable browser extensions

### Bug Report Template
```markdown
**Bug Description**
A clear description of the bug.

**Steps to Reproduce**
1. Go to '...'
2. Click on '...'
3. Scroll down to '...'
4. See error

**Expected Behavior**
What you expected to happen.

**Screenshots**
Add screenshots if applicable.

**Environment**
- OS: [e.g., Windows 10, macOS 12]
- Browser: [e.g., Chrome 120, Firefox 115]
- Device: [e.g., iPhone 12, Desktop]
- Screen Size: [e.g., 1920x1080, 375x667]
```

## 💡 Feature Requests

### Feature Request Template
```markdown
**Feature Description**
A clear description of the feature you'd like to see.

**Problem Statement**
What problem does this feature solve?

**Proposed Solution**
How would you like this feature to work?

**Alternatives Considered**
Any alternative solutions you've considered.

**Additional Context**
Any other context, mockups, or examples.
```

## 📚 Resources

### Documentation
- [MDN Web Docs](https://developer.mozilla.org/)
- [Web.dev](https://web.dev/)
- [A11y Project](https://www.a11yproject.com/)

### Tools
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [WAVE Web Accessibility Evaluator](https://wave.webaim.org/)

### Learning
- [Modern CSS](https://moderncss.dev/)
- [JavaScript.info](https://javascript.info/)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

## 🤝 Community

### Communication
- **Issues**: For bug reports and feature requests
- **Discussions**: For questions and general discussion
- **Email**: m.elkhou@hotmail.com for direct contact

### Code of Conduct
- Be respectful and inclusive
- Provide constructive feedback
- Help others learn and grow
- Follow project guidelines

## 🏆 Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes
- Project documentation

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to making this portfolio better! 🚀