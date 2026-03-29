<div align="center">

# Weber & Partner · Steuerberatung Frankfurt

**A premium, modern tax advisory website built with Next.js 16, TypeScript & Tailwind CSS**

[![Next.js](https://img.shields.io/badge/Next.js-16.2-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/)
[![License](https://img.shields.io/badge/License-Private-red?style=for-the-badge)](/)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Live Demo](#-live-demo)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Pages & Routes](#-pages--routes)
- [Integrations](#-integrations)
- [Responsive Design](#-responsive-design)
- [Deployment](#-deployment)
- [Built by](#-built-by)

---

## 🌟 Overview

A high-end, production-ready website for a German tax advisory firm — built to stand out from the typical "grey and stiff" accounting websites. Featuring a premium dark theme with a teal/cyan color palette extracted directly from the client's logo, smooth animations, and a fully responsive layout optimized for everything from smartphones to 45" ultrawide monitors.

This project demonstrates a complete full-stack Next.js delivery: from UI design and component architecture to backend API routes, third-party integrations, and GDPR-compliant data handling.

---

## 🚀 Live Demo

> 🔗 **[https://webysylon-tax-office-demo.netlify.app](https://netlify.com)**

---

## ✨ Features

### Design & UX

- 🎨 **Premium dark theme** with logo-extracted color palette (`#146574`, `#5ce1e6`, `#45e7ff`)
- ✨ **Animated particle canvas** in the Hero section
- 🖼️ **Real team portraits** with 3D flip card interactions
- 📸 **Professional hero image** with decorative cyan frame accent
- 🎭 **Smooth animations** — fade-ups, hover effects, accordion transitions
- 📱 **Fully responsive** — optimized for 320px to 4K / 45" ultrawide

### Pages & Sections

- 🏠 **One-Pager** with 9 sections: Hero, Services, Industries, Team, FAQ, Blog, Contact
- 📄 **6 Service sub-pages** with descriptions, benefits, process steps & testimonials
- 📝 **4 Blog articles** with full content pages
- ⚖️ **Legal pages** — Impressum, Datenschutz (GDPR), AGB
- 📅 **Booking page** `/termin` with embedded Calendly widget

### Functionality

- 📬 **Contact form** with email sending via Resend API
- 📰 **Newsletter signup** integrated with Brevo (Sendinblue)
- 📅 **Appointment booking** via Calendly embed
- 🍪 **GDPR Cookie Banner** with granular consent settings (necessary / analytics / marketing)
- 🔒 **DSGVO compliant** throughout

---

## 🛠 Tech Stack

| Category            | Technology                                          |
| ------------------- | --------------------------------------------------- |
| **Framework**       | Next.js 16.2 (App Router)                           |
| **Language**        | TypeScript 5                                        |
| **Styling**         | Tailwind CSS 4 + CSS Custom Properties              |
| **Fonts**           | Playfair Display · DM Sans · DM Mono (Google Fonts) |
| **Email**           | Resend API                                          |
| **Newsletter**      | Brevo (Sendinblue) API v3                           |
| **Booking**         | Calendly Inline Widget                              |
| **Images**          | Next.js Image Optimization                          |
| **Deployment**      | Vercel                                              |
| **Version Control** | GitHub                                              |

---

## 📁 Project Structure

```
steuerkanzlei/
├── public/
│   └── images/
│       ├── hero-image.jpg          # Hero section photo
│       ├── team-image.jpg          # Team group photo
│       ├── portrait-mw.jpg         # Dr. Michael Weber
│       ├── portrait-sh.jpg         # Sandra Hoffmann
│       ├── portrait-jb.jpg         # Jonas Becker
│       ├── portrait-tk.jpg         # Tanja König
│       └── portrait-lr.jpg         # Lena Richter
│
├── src/
│   ├── app/
│   │   ├── page.tsx                # Main one-pager
│   │   ├── layout.tsx              # Root layout + metadata
│   │   ├── globals.css             # Design tokens + base styles
│   │   ├── termin/                 # Appointment booking page
│   │   ├── impressum/              # Legal notice
│   │   ├── datenschutz/            # Privacy policy (GDPR)
│   │   ├── agb/                    # Terms & conditions
│   │   ├── blog/
│   │   │   ├── homeoffice-pauschale-2025/
│   │   │   ├── ust-voranmeldung-fehler/
│   │   │   ├── holdingstruktur-gmbh-co-kg/
│   │   │   └── fristen-steuererklaerung-2024/
│   │   ├── leistungen/
│   │   │   ├── einkommensteuer/
│   │   │   ├── unternehmen/
│   │   │   ├── buchhaltung/
│   │   │   ├── lohn/
│   │   │   ├── gestaltung/
│   │   │   ├── gruendung/
│   │   │   ├── erbschaft/
│   │   │   ├── international/
│   │   │   └── digital/
│   │   └── api/
│   │       ├── contact/route.ts    # Contact form API
│   │       └── newsletter/route.ts # Newsletter signup API
│   │
│   ├── components/
│   │   ├── Navbar.tsx              # Sticky navbar with mobile drawer
│   │   ├── Hero.tsx                # Particle canvas + hero image
│   │   ├── Leistungen.tsx          # 9 service cards grid
│   │   ├── Branchen.tsx            # Interactive industry selector
│   │   ├── Team.tsx                # 3D flip team cards
│   │   ├── FAQ.tsx                 # Smooth accordion
│   │   ├── Blog.tsx                # Article cards + newsletter
│   │   ├── Kontakt.tsx             # Contact form
│   │   ├── Footer.tsx              # 4-column footer
│   │   ├── CookieBanner.tsx        # GDPR cookie consent
│   │   ├── LeistungPage.tsx        # Service detail template
│   │   ├── BlogPost.tsx            # Blog article template
│   │   ├── LegalPage.tsx           # Legal pages template
│   │   └── NewsletterForm.tsx      # Newsletter signup form
│   │
│   └── lib/
│       └── leistungen-data.ts      # All service content data
│
├── .env.local                      # Environment variables (not committed)
├── tailwind.config.ts              # Custom colors + breakpoints
├── next.config.ts
└── tsconfig.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/steuerkanzlei.git

# Navigate to project directory
cd steuerkanzlei

# Install dependencies
npm install

# Set up environment variables
cp .env.local.example .env.local
# → Fill in your API keys (see Environment Variables section)

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

---

## 🔐 Environment Variables

Create a `.env.local` file in the project root:

```env
# Resend – Contact form email sending
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
CONTACT_EMAIL=info@steuerpartner-ffm.de

# Brevo – Newsletter subscription
BREVO_API_KEY=xkeysib-xxxxxxxxxxxxxxxxxxxx
```

> ⚠️ **Never commit `.env.local` to version control.** It is already listed in `.gitignore`.

---

## 📄 Pages & Routes

| Route                                 | Description                       |
| ------------------------------------- | --------------------------------- |
| `/`                                   | Main one-pager (all sections)     |
| `/termin`                             | Appointment booking with Calendly |
| `/impressum`                          | Legal notice (§ 5 TMG)            |
| `/datenschutz`                        | Privacy policy (GDPR / DSGVO)     |
| `/agb`                                | General terms & conditions        |
| `/leistungen/einkommensteuer`         | Income tax service page           |
| `/leistungen/unternehmen`             | Corporate tax service page        |
| `/leistungen/buchhaltung`             | Accounting service page           |
| `/leistungen/lohn`                    | Payroll service page              |
| `/leistungen/gestaltung`              | Tax planning service page         |
| `/leistungen/gruendung`               | Business formation service page   |
| `/leistungen/erbschaft`               | Inheritance tax service page      |
| `/leistungen/international`           | International tax service page    |
| `/leistungen/digital`                 | Digital accounting service page   |
| `/blog/homeoffice-pauschale-2025`     | Blog article                      |
| `/blog/ust-voranmeldung-fehler`       | Blog article                      |
| `/blog/holdingstruktur-gmbh-co-kg`    | Blog article                      |
| `/blog/fristen-steuererklaerung-2024` | Blog article                      |
| `/api/contact`                        | POST – Contact form handler       |
| `/api/newsletter`                     | POST – Newsletter signup handler  |

---

## 🔗 Integrations

### Resend (Email)

Contact form submissions send two emails:

1. **To the firm** — formatted HTML email with client details and a direct reply button
2. **To the client** — confirmation email with their message copy

### Brevo (Newsletter)

Newsletter signups are added directly to the Brevo contacts list via API v3. Duplicate contacts are handled gracefully.

### Calendly (Booking)

The `/termin` page embeds a Calendly inline widget styled to match the website's dark theme using Calendly's URL parameters (`background_color`, `text_color`, `primary_color`).

---

## 📱 Responsive Design

The website is fully optimized across all breakpoints:

| Breakpoint | Target                     |
| ---------- | -------------------------- |
| `320px`    | Small smartphones          |
| `640px`    | Large smartphones          |
| `768px`    | Tablets                    |
| `1024px`   | iPad Pro / small laptops   |
| `1280px`   | Standard desktops          |
| `1536px`   | Large desktops             |
| `1920px`   | Full HD monitors           |
| `2560px+`  | 32"–45" ultrawide monitors |

All font sizes and spacing use `clamp()` for fluid scaling across all screen sizes.

---

## 🚢 Deployment

This project is deployed on **Vercel** with automatic deployments on every push to `main`.

### Deploy your own

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables in Vercel Dashboard:
# RESEND_API_KEY
# CONTACT_EMAIL
# BREVO_API_KEY
```

Or connect your GitHub repository directly in the app.netlify.com for automatic CI/CD.

---

## 👨‍💻 Built by

<div align="center">

<img src="/public/images/websylon.png" alt="WEBSYLON" width="200" />

**WEBSYLON** — Professional Web Development & Digital Solutions

_Frankfurt am Main, Germany_

</div>

---

<div align="center">
  <sub>© 2026 WEBSYLON. All rights reserved.</sub>
</div>
