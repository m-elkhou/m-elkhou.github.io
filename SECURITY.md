# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 2.0.x   | :white_check_mark: |
| 1.x.x   | :x:                |

## Security Features

### Content Security Policy (CSP)
This portfolio implements a strict Content Security Policy to prevent XSS attacks:
- Scripts are only allowed from self and trusted CDNs
- Inline scripts require nonces
- No unsafe-eval or unsafe-inline for scripts
- Frames are completely blocked

### Input Validation
All user inputs are validated and sanitized:
- Form inputs are checked for malicious content
- XSS patterns are detected and blocked
- Input length limits are enforced
- Special characters are properly escaped

### Security Headers
The following security headers are implemented:
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy` for camera, microphone, etc.

## Reporting a Vulnerability

If you discover a security vulnerability, please report it by emailing m.elkhou@hotmail.com.

**Please do not report security vulnerabilities through public GitHub issues.**

### What to Include

Please include the following information in your report:
- Type of issue (e.g. buffer overflow, SQL injection, cross-site scripting, etc.)
- Full paths of source file(s) related to the manifestation of the issue
- The location of the affected source code (tag/branch/commit or direct URL)
- Any special configuration required to reproduce the issue
- Step-by-step instructions to reproduce the issue
- Proof-of-concept or exploit code (if possible)
- Impact of the issue, including how an attacker might exploit the issue

### Response Timeline

- **Initial Response**: Within 48 hours
- **Status Update**: Within 7 days
- **Resolution**: Within 30 days for critical issues

## Security Best Practices

### For Contributors
- Never commit sensitive information (API keys, passwords, etc.)
- Use parameterized queries for any database operations
- Validate and sanitize all user inputs
- Follow the principle of least privilege
- Keep dependencies up to date

### For Users
- Keep your browser updated
- Be cautious when entering personal information
- Report any suspicious behavior immediately

## Security Checklist

- [x] Content Security Policy implemented
- [x] Input validation and sanitization
- [x] XSS protection measures
- [x] Security headers configured
- [x] No hardcoded credentials
- [x] Dependencies regularly updated
- [x] Error handling doesn't expose sensitive information

## Contact

For security-related questions or concerns, contact:
- Email: m.elkhou@hotmail.com
- GitHub: [@m-elkhou](https://github.com/m-elkhou)

---

**Note**: This security policy is regularly reviewed and updated to address new threats and vulnerabilities.