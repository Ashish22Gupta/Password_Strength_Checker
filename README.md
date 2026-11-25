# 🔐 Password Strength Checker
### Real-Time Password Validation & Strength Meter

> ⚠️ **DISCLAIMER:** This is a **personal learning and portfolio project**. It is a client-side demonstration of password validation logic and UI feedback patterns. No passwords are transmitted, stored, or logged anywhere — everything runs entirely in the browser.

A lightweight, fully responsive web tool that validates password strength in real time. Built with zero dependencies, it visually tracks each requirement, animates a strength meter, and gives instant success/error feedback — demonstrating DOM manipulation, regex validation, and responsive UI design.

![Version](https://img.shields.io/badge/Version-1.0.0-4361ee)
![Status](https://img.shields.io/badge/Status-Portfolio%20Project-F4B400)
![Responsive](https://img.shields.io/badge/Responsive-Desktop%20%26%20Mobile-2D6A4F)

---

## 🔗 Live Links

- **Live Demo:** [password-strength-validation.netlify.app](https://password-strength-validation.netlify.app)
- **Source Code:** [github.com/Ashish22Gupta/Password_Strength_Checker](https://github.com/Ashish22Gupta/Password_Strength_Checker)

---

## ✨ Implemented Features

### 🔍 Real-Time Validation
- **Live Password Checking** - Strength recalculates on every keystroke via `oninput`, with no page reloads.
- **5 Requirement Checks** - Validates minimum length (8), lowercase, uppercase, number, and special character (`@ _ . !`).
- **Dynamic Requirement Icons** - Each rule toggles between a red ✗ and a green ✓ with strikethrough text when satisfied.

### 📊 Strength Meter
- **Progressive Fill Bar** - Width grows from 0% → 100% in 20% increments per satisfied rule.
- **Color-Coded Feedback** - Red (<40%, weak), Orange (<80%, medium), Blue (100%, strong).
- **Animated Transitions** - Smooth CSS transitions on width and color changes.

### ✅ Submit Feedback
- **Success / Error States** - Dedicated button triggers a colored feedback banner confirming whether all requirements are met.
- **Non-Blocking UX** - Feedback resets cleanly on new input.

### 📱 Fully Responsive Design
- **Desktop:** Centered card layout with comfortable padding and max-width of 500px.
- **Mobile:** Padding and heading scale down below 576px for small screens.
- **Fluid Height:** Uses `100dvh` so the card stays vertically centered on mobile browsers.

### ♿ Accessibility & UX
- **Focus States** - Visible border highlight and ring shadow on input focus.
- **Semantic Structure** - Clear headings, labeled requirements, and placeholder guidance.
- **No Data Leakage** - Pure client-side; nothing leaves the browser.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **HTML5** | Semantic, accessible markup structure |
| **CSS3** | Custom properties (variables), gradients, transitions, media queries |
| **Vanilla JavaScript** | Real-time validation logic with regex, DOM updates |
| **Poppins Font** | Clean, modern Google Font typography |
| **Netlify** | Static hosting and deployment |

---

## 📁 Project Structure

```text
Password_Strength_Checker/
├── index.html          # UI markup: input, strength meter, requirements list
├── style.css           # Variables, layout, responsive rules, transitions
└── script.js           # Validation logic, meter updates, feedback states
