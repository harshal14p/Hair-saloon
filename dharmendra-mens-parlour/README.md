# Dharmendra Mens Parlour — Website

Premium, royal-themed one-page website for a men's salon. Black & gold theme,
Cinzel + Playfair Display fonts, shine/shimmer effects, fully responsive.

## 📂 How to run (VS Code)

1. Unzip the folder and open it in VS Code.
2. Install the **"Live Server"** extension (by Ritwick Dey) if you don't have it.
3. Right-click `index.html` → **"Open with Live Server"**.
4. That's it — the site opens in your browser at `http://127.0.0.1:5500`.

No build tools, no npm install needed — it's plain HTML/CSS/JS.
(Internet connection is needed once, to load Google Fonts, Font Awesome icons,
and the Pexels photos.)

## 📁 File structure

```
dharmendra-mens-parlour/
├── index.html          → all page content/sections
├── css/style.css        → theme, layout, animations
├── js/script.js         → services data, gallery, testimonials, booking logic
└── README.md
```

## ✏️ Easy things to edit

- **Services & prices** — open `js/script.js`, edit the `SERVICES` array at the top.
- **Gallery photos** — edit the `GALLERY` array in `js/script.js`.
- **Phone number** — search for `7746821965` in `index.html` and `js/script.js`
  and replace everywhere.
- **Testimonials** — edit the `TESTIMONIALS` array in `js/script.js`.
- **Address / map** — the Google Map currently points to "Indore, Madhya Pradesh"
  generally. Search Google Maps for your exact shop location, copy its share
  link, and swap the `src` in the `<iframe>` inside the Contact section of
  `index.html` for a pinpoint location.

## 📞 Call & WhatsApp buttons

- The phone number in the top bar / footer / floating button opens the phone
  dialer directly (`tel:` link) — one tap to call.
- The WhatsApp buttons use `https://wa.me/917746821965` — one tap opens a
  WhatsApp chat directly with your number, no email anywhere on the site (as
  requested).

## 🗓️ Important — how the "Book Appointment" flow actually works

You asked for a fully automatic flow: customer picks a slot → you get a
WhatsApp message → you tap "available" or "not available" inside some panel →
the customer automatically gets a WhatsApp reply (confirmed, or "pick another
slot" with a link).

Being fully honest with you about what's possible here:

**What this website DOES do (working right now, no extra setup):**
- Customer fills the booking form and picks a free time slot.
- On submit, it opens WhatsApp with a ready-made message to your number
  (`7746821965`) containing their name, phone, service, date & time — they
  just tap **Send**.
- You reply to them manually from your own WhatsApp — "Booking confirmed ✅"
  or "That slot is taken, please choose another time — [link to your
  website's booking section]".
- The site also greys out/strikes through a slot on that visitor's own
  browser once they've requested it, so they can't request the exact same
  slot twice from the same device.

**What this website CANNOT do on its own (needs a real backend):**
Automatically sending WhatsApp messages *from your business* to a customer
without you manually pressing send — and having buttons like "Available /
Not Available" that trigger that message — requires the **WhatsApp Business
Cloud API**. That's a completely different system from personal WhatsApp:

1. You'd need a **Meta Business account**, verified business, and a phone
   number registered specifically for the WhatsApp Business API (it can't be
   your regular personal WhatsApp number at the same time).
2. You'd need a small **backend server** (e.g. Node.js) hosted somewhere
   (Render, Railway, a VPS, etc.) that stores real bookings in a database,
   exposes an admin page with Available/Not Available buttons, and calls
   Meta's API to send the confirmation or "slot taken" message automatically.
3. Meta has to **approve your WhatsApp Business account** and message
   templates before you can send template messages this way — this can take
   a few days and sometimes needs a small monthly/per-message cost.

This isn't something a static front-end (HTML/CSS/JS) can do by itself —
it needs real server infrastructure and your own Meta Business approval, so
I couldn't just "fake" it into this zip without it actually breaking once you
try to use it for real bookings.

**If you want that fully-automated version**, I'm happy to build the backend
(Node.js + Express + a simple admin dashboard + WhatsApp Cloud API
integration) as a next step — you'd just need to create a free Meta
Developer account and a WhatsApp Business number first, and share the API
credentials with the project (never shared with me/Anthropic).

## ✅ What's already premium & production-ready

- Royal black & gold theme with shine/shimmer effects on text, buttons,
  cards and the about photo frame.
- Fully responsive — mobile, tablet, desktop.
- Smooth scroll-reveal animations, animated hero, sticky navbar.
- Real Indian barbershop photography (free-license, from Pexels).
- 15 real men's salon services with Indore-market pricing.
- Testimonials carousel, gallery, "Why choose us" section.
- Direct call button + WhatsApp click-to-chat everywhere (no email shown).
- Booking form with date + slot picker that opens a pre-filled WhatsApp
  message to your number.
