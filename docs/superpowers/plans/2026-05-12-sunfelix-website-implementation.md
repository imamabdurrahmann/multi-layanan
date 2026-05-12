# PT SUNFELIX PRIMA SOLUSI Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Complete website redesign with Modern Corporate design (Dark Blue #1E3A5F + Gold #D4A017) for PT SUNFELIX PRIMA SOLUSI

**Architecture:** Next.js 15 with App Router, Tailwind CSS v4, single-page redesign focused on homepage with service pages

**Tech Stack:** Next.js 15, Tailwind CSS v4, TypeScript, Lucide React, Google Fonts (Poppins, Inter)

---

## File Structure

```
src/
├── app/
│   ├── globals.css          # MODIFY - New color theme
│   ├── layout.tsx          # MODIFY - Font imports
│   ├── page.tsx            # MODIFY - Homepage redesign
│   ├── about/page.tsx      # MODIFY - About page
│   ├── contact/page.tsx    # MODIFY - Contact page
│   ├── pengadaan/page.tsx   # MODIFY - Service page
│   ├── konstruksi/page.tsx  # MODIFY - Service page
│   ├── travel/page.tsx     # MODIFY - Service page
│   └── laundry/page.tsx    # MODIFY - Service page
├── components/
│   ├── Navbar.tsx          # MODIFY - Update styling
│   ├── Footer.tsx          # MODIFY - Full redesign
│   └── WhatsAppFloat.tsx   # MODIFY - Styling update
└── config/
    └── company.ts          # MODIFY - Update company info
```

---

## Task 1: Update Company Configuration

**Files:**
- Modify: `src/config/company.ts`

- [ ] **Step 1: Update company.ts with correct data**

```typescript
export const companyInfo = {
  name: "PT SUNFELIX PRIMA SOLUSI",
  shortName: "Sunfelix Prima Solusi",
  tagline: "Melayani Dengan Sepenuh Hati",
  address: "JL. BASUKI RAHMAT NO. 110 (FL. 3)",
  city: "KOTA BENGKULU 38222",
  phone: "(0736) 52010",
  mobile1: "082133100565",
  mobile2: "081381801565",
  whatsapp: "6282133100565",
  email: "sunfelixprimasolusi@gmail.com",
  website: "www.sunfelixprima.com",
  instagram: "@sunfelixprima",
  facebook: "sunfelix prima solusi",
  operatingHours: {
    weekdays: "Senin - Jumat: 08.00 - 17.00",
    saturday: "Sabtu: 08.00 - 16.00",
  },
  footerLinks: [
    { href: "/", label: "Beranda" },
    { href: "/about", label: "Tentang Kami" },
    { href: "/pengadaan", label: "Pengadaan Barang" },
    { href: "/konstruksi", label: "Konstruksi" },
    { href: "/travel", label: "Travel" },
    { href: "/laundry", label: "Laundry" },
    { href: "/contact", label: "Hubungi Kami" },
  ],
  socialLinks: {
    instagram: "https://instagram.com/sunfelixprima",
    facebook: "https://facebook.com/sunfelix prima solusi",
  },
  established: 2012,
};

export const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/about", label: "Tentang Kami" },
  { href: "/pengadaan", label: "Pengadaan Barang" },
  { href: "/konstruksi", label: "Konstruksi" },
  { href: "/travel", label: "Travel" },
  { href: "/laundry", label: "Laundry" },
  { href: "/contact", label: "Hubungi Kami" },
];
```

Run: `git add src/config/company.ts && git commit -m "config: update company info for PT SUNFELIX PRIMA SOLUSI"`

---

## Task 2: Redesign Global CSS Theme

**Files:**
- Modify: `src/app/globals.css`

**Color Variables to use:**
- Primary Blue: `#1E3A5F`
- Gold: `#D4A017`
- Background: `#FFFFFF`
- Alt BG: `#F5F7FA`

- [ ] **Step 1: Update CSS variables with new colors**

Replace all color variables from maroon theme to:
```css
:root {
  /* Primary Colors */
  --primary: #1E3A5F;
  --primary-dark: #152942;
  --primary-light: #2A4A73;

  /* Gold Accent */
  --gold: #D4A017;
  --gold-dark: #B8860B;
  --gold-light: #E8C872;

  /* Neutrals */
  --bg-white: #FFFFFF;
  --bg-light: #F5F7FA;
  --bg-gray: #E5E7EB;
  --text-dark: #1A1A2E;
  --text-secondary: #6B7280;
  --text-muted: #9CA3AF;
}
```

- [ ] **Step 2: Update @theme inline section**

Add corresponding theme colors in @theme block

- [ ] **Step 3: Update hero-section CSS**

```css
.hero-section {
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
}
```

- [ ] **Step 4: Update btn-primary styling**

```css
.btn-primary {
  background: var(--gold);
  color: var(--text-dark);
}

.btn-primary:hover {
  background: var(--gold-light);
}
```

- [ ] **Step 5: Update footer gradient**

```css
.footer {
  background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%);
}
```

Run: `git add src/app/globals.css && git commit -m "style: update theme to Dark Blue + Gold corporate colors"`

---

## Task 3: Redesign Homepage (page.tsx)

**Files:**
- Modify: `src/app/page.tsx`

**Structure:**
1. Hero Section (gradient bg, company name, tagline, CTA)
2. Services Section (4 cards grid)
3. Why Choose Us (5 horizontal icon cards)
4. Stats Section (3 numbers)
5. CTA Section (gradient bg, headline, button)
6. Partner/Client logos (optional)

- [ ] **Step 1: Write complete homepage redesign with all sections**

Complete code structure:
```tsx
// Hero Section
<section className="hero-section">
  <div className="hero-bg-overlay" />
  <div className="max-w-6xl mx-auto px-4">
    <h1>PT SUNFELIX PRIMA SOLUSI</h1>
    <p>Melayani Dengan Sepenuh Hati</p>
    <Link href="/contact">Hubungi Kami</Link>
  </div>
</section>

// Services Section
// 4 cards: Pengadaan, Konstruksi, Travel, Laundry

// Why Choose Us Section
// 5 cards horizontal: Profesional, Tepat Waktu, Hemat & Berkualitas, Layanan Prima, Garansi Services

// Stats Section
// 3 stats: 12+ Tahun, 50+ Klien, 100+ Proyek

// CTA Section
// Headline + 2 buttons
```

Run: `git add src/app/page.tsx && git commit -m "feat: complete homepage redesign with new sections"`

---

## Task 4: Redesign Footer Component

**Files:**
- Modify: `src/components/Footer.tsx`

- [ ] **Step 1: Full footer redesign with new styling and company info**

Include:
- Company logo/name
- Contact info (phone, mobile, email, address)
- Quick links
- Social media (Instagram, Facebook)
- Copyright

Run: `git add src/components/Footer.tsx && git commit -m "feat: redesign footer with corporate styling"`

---

## Task 5: Update Navbar Component

**Files:**
- Modify: `src/components/Navbar.tsx`

- [ ] **Step 1: Update navbar styling to match new theme**

Keep existing mobile menu functionality, update colors

Run: `git add src/components/Navbar.tsx && git commit -m "style: update navbar to match new theme"`

---

## Task 6: Update WhatsApp Float Component

**Files:**
- Modify: `src/components/WhatsAppFloat.tsx`

- [ ] **Step 1: Update WhatsApp number to 6282133100565**

Run: `git add src/components/WhatsAppFloat.tsx && git commit -m "fix: update WhatsApp number"`

---

## Task 7: Update All Service Pages

**Files:**
- Modify: `src/app/pengadaan/page.tsx`
- Modify: `src/app/konstruksi/page.tsx`
- Modify: `src/app/travel/page.tsx`
- Modify: `src/app/laundry/page.tsx`

**Each page needs:**
- Hero section update
- Consistent styling with homepage
- Service-specific CTA text:
  - Pengadaan: "Minta Penawaran"
  - Konstruksi: "Diskusikan Proyek"
  - Travel: "Rencana Perjalanan"
  - Laundry: "Lihat Paket Harga"

- [ ] **Step 1: Update each service page with consistent styling**

Run per page, then: `git add src/app/pengadaan/page.tsx src/app/konstruksi/page.tsx src/app/travel/page.tsx src/app/laundry/page.tsx && git commit -m "feat: update all service pages with consistent styling"`

---

## Task 8: Update About Page

**Files:**
- Modify: `src/app/about/page.tsx`

- [ ] **Step 1: Update About page with company info (Founded 2012, Bengkulu, etc)**

Run: `git add src/app/about/page.tsx && git commit -m "feat: update about page with company history"`

---

## Task 9: Update Contact Page

**Files:**
- Modify: `src/app/contact/page.tsx`

- [ ] **Step 1: Update contact info with correct phone numbers and email**

Run: `git add src/app/contact/page.tsx && git commit -m "feat: update contact page with correct company info"`

---

## Task 10: Deploy and Test

- [ ] **Step 1: Push all changes to GitHub**

Run: `git push origin main`

- [ ] **Step 2: Deploy to Vercel**

Run: `vercel --prod`

- [ ] **Step 3: Test on mobile browser (dev tools)**

Verify:
- Mobile responsive layout
- All buttons working
- WhatsApp link correct
- Contact form functional

---

## Task 11: Generate Updated PDF Proposal

**Files:**
- Modify: `create_proposal.py`

- [ ] **Step 1: Update proposal PDF with new company name and pricing Rp 3.000.000**

Run: `python create_proposal.py`

---

## Summary Checklist

- [ ] Task 1: Company config
- [ ] Task 2: Global CSS
- [ ] Task 3: Homepage
- [ ] Task 4: Footer
- [ ] Task 5: Navbar
- [ ] Task 6: WhatsApp Float
- [ ] Task 7: Service pages (4)
- [ ] Task 8: About page
- [ ] Task 9: Contact page
- [ ] Task 10: Deploy & Test
- [ ] Task 11: PDF Proposal

---

**Plan saved to:** `docs/superpowers/plans/2026-05-12-sunfelix-website-implementation.md`
