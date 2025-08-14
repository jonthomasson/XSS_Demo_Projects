# XSS Demo Projects

This repository contains three small projects demonstrating **Cross-Site Scripting (XSS)** vulnerabilities and how to prevent them, using:

- **jQuery** (plain HTML + JavaScript)
- **Angular**
- **Next.js (React)**

It is intended for live demos where you can show the **vulnerable** implementation first, then the **safe** version, and optionally how **Content Security Policy (CSP)** can serve as a defense-in-depth layer.

---

## 📌 What is Cross-Site Scripting (XSS)?

**XSS** is a web security vulnerability that allows attackers to inject malicious scripts into web pages viewed by other users.  
These scripts run in the victim’s browser as if they came from the trusted site.

### Common impacts:
- Stealing cookies, tokens, or sensitive data
- Performing actions on behalf of the user
- Defacing the site
- Redirecting to malicious sites
- Distributing malware

### Types of XSS:
1. **Stored XSS** – Malicious script is stored on the server (e.g., in a database) and served to other users.
2. **Reflected XSS** – Malicious script is included in a request and reflected in the response.
3. **DOM-based XSS** – JavaScript modifies the DOM in a way that executes attacker-controlled data.

---

## 📚 Resources to Learn More

- [OWASP XSS Prevention Cheat Sheet](https://owasp.org/www-community/xss-prevention)
- [MDN Web Docs – Cross-site scripting](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting)
- [Google Web Fundamentals – XSS](https://web.dev/articles/security-xss)
- [Content Security Policy (CSP) – MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)

---

## 🎯 Demo Instructions

Below are instructions for running and demonstrating each project.

---

### 1️⃣ jQuery Demo

**Purpose:** Show how `.html()` executes HTML/JS from user input, and how `.text()` or sanitization prevents it.

**Run in Visual Studio:**
1. Open the `xss-jquery` folder in Visual Studio.
2. Set `index.html` as the **Startup Item**.
3. Run with **IIS Express** (Ctrl+F5).

**Demo flow:**
1. Ensure the input contains:
   ```html
   <img src=x onerror=alert('xss')>
Click Render (Bad) → An alert box appears (vulnerable).

Click Render (Good) → Renders as plain text, no execution.

Click Render (Sanitized) → Renders allowed HTML but strips dangerous attributes.

Optional Defense-in-Depth:
Switch to the Strong CSP version to show how a CSP blocks inline event handlers even if .html() is used.

2️⃣ Angular Demo
Purpose: Show that Angular auto-sanitizes [innerHTML], how bypassing it is dangerous, and how [textContent] is safest.

Run in Visual Studio:

Open the xss-angular folder.

Ensure you have the Angular CLI installed globally:

bash
Copy
Edit
npm install -g @angular/cli
In the Terminal:

bash
Copy
Edit
npm install
ng serve
Open the provided local URL (usually http://localhost:4200).

Demo flow:

Start with [innerHTML] bound directly to user input → Angular strips the dangerous attribute (no alert).

Switch to using bypassSecurityTrustHtml(userInput) → Now the malicious code runs (alert fires if CSP allows).

Switch to [textContent] → All HTML is escaped.

3️⃣ Next.js Demo
Purpose: Show that dangerouslySetInnerHTML in React will render HTML unsanitized, and how DOMPurify fixes it.

Run in Visual Studio:

Open the xss-next folder.

Ensure Node.js is installed (v18+ recommended).

In the Terminal:

bash
Copy
Edit
npm install
npm run dev
Open http://localhost:3000.

Demo flow:

Navigate to:

php-template
Copy
Edit
http://localhost:3000/?q=<img src=x onerror=alert('xss')>
With the ❌ VULNERABLE code uncommented, the alert fires.

Switch to the ✅ SAFE version using:

js
Copy
Edit
DOMPurify.sanitize(userHtml)
Reload → The dangerous attribute is removed, no alert.

Discuss how CSP can be set in next.config.js to further reduce risk.

🛡️ Key Takeaways
Never inject untrusted HTML directly into the DOM.

Use framework-provided escaping and sanitization tools.

Use libraries like DOMPurify if you must render HTML from untrusted sources.

Apply Content Security Policy (CSP) as an extra safeguard, not as the primary fix.

Keep dependencies up-to-date to benefit from security patches.
