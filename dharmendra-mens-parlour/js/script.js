/* ============================================
   DHARMENDRA MENS PARLOUR — SCRIPT
   ============================================ */

// ---------- CONFIG ----------
const SHOP_WHATSAPP_NUMBER = "917746821965"; // country code + number, no +

// ---------- SERVICES DATA (Indore market pricing) ----------
const SERVICES = [
  {
    name: "Classic Haircut",
    desc: "Precision scissor & clipper cut, styled to finish.",
    price: 250,
    tag: "Popular",
    img: "https://images.pexels.com/photos/19664889/pexels-photo-19664889.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    name: "Premium Haircut & Styling",
    desc: "Consultation, wash, cut, blow-dry & styling finish.",
    price: 450,
    tag: "Signature",
    img: "https://images.pexels.com/photos/3037215/pexels-photo-3037215.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    name: "Kids Haircut (Below 10 yrs)",
    desc: "Gentle, quick styling for young gentlemen.",
    price: 200,
    tag: "Kids",
    img: "https://images.pexels.com/photos/3916361/pexels-photo-3916361.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    name: "Beard Trim & Shaping",
    desc: "Clean, sharp beard shape-up with clippers & razor.",
    price: 150,
    tag: "Beard",
    img: "https://images.pexels.com/photos/7518732/pexels-photo-7518732.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    name: "Beard Styling with Design",
    desc: "Custom beard design & detailing for a sharp look.",
    price: 250,
    tag: "Beard",
    img: "https://images.pexels.com/photos/13810876/pexels-photo-13810876.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    name: "Hot Towel Shave",
    desc: "Traditional razor shave with hot towel & massage.",
    price: 200,
    tag: "Classic",
    img: "https://images.pexels.com/photos/2849402/pexels-photo-2849402.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    name: "Hair Wash & Head Massage",
    desc: "Relaxing wash with a soothing head massage.",
    price: 200,
    tag: "Relax",
    img: "https://images.pexels.com/photos/7518730/pexels-photo-7518730.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    name: "Head Massage (Champi)",
    desc: "Traditional oil champi to relieve stress & tension.",
    price: 250,
    tag: "Relax",
    img: "https://images.pexels.com/photos/7518734/pexels-photo-7518734.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    name: "Hair Spa",
    desc: "Deep conditioning spa for healthy, strong hair.",
    price: 800,
    tag: "Care",
    img: "https://images.pexels.com/photos/7518729/pexels-photo-7518729.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    name: "Global Hair Colour",
    desc: "Full head ammonia-free colour application.",
    price: 700,
    tag: "Colour",
    img: "https://images.pexels.com/photos/6876708/pexels-photo-6876708.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    name: "Beard Colour",
    desc: "Natural-finish beard colouring, grey coverage.",
    price: 300,
    tag: "Colour",
    img: "https://images.pexels.com/photos/7518760/pexels-photo-7518760.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    name: "Fruit / D-Tan Facial",
    desc: "Deep cleansing facial to remove tan & refresh skin.",
    price: 600,
    tag: "Skin",
    img: "https://images.pexels.com/photos/7518743/pexels-photo-7518743.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    name: "Gold / Diamond Facial",
    desc: "Premium brightening facial for a radiant glow.",
    price: 1200,
    tag: "Skin",
    img: "https://images.pexels.com/photos/7518755/pexels-photo-7518755.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    name: "Party Grooming Package",
    desc: "Haircut + beard styling + facial, all-in-one.",
    price: 1500,
    tag: "Package",
    img: "https://images.pexels.com/photos/7518761/pexels-photo-7518761.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    name: "Bridal Groom Package",
    desc: "Complete pre-wedding grooming for the groom.",
    price: 5000,
    tag: "Package",
    img: "https://images.pexels.com/photos/19664860/pexels-photo-19664860.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
];

// ---------- GALLERY DATA ----------
const GALLERY = [
  "https://images.pexels.com/photos/32329615/pexels-photo-32329615.jpeg?auto=compress&cs=tinysrgb&w=1000",
  "https://images.pexels.com/photos/26832816/pexels-photo-26832816.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/7518732/pexels-photo-7518732.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/36873730/pexels-photo-36873730.jpeg?auto=compress&cs=tinysrgb&w=1000",
  "https://images.pexels.com/photos/7518730/pexels-photo-7518730.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/34839405/pexels-photo-34839405.jpeg?auto=compress&cs=tinysrgb&w=800"
];

// ---------- TESTIMONIALS ----------
const TESTIMONIALS = [
  { name: "Rohit Sharma", role: "Regular Client", text: "Best men's salon in Indore, hands down. The beard styling is always on point and the staff is super polite." },
  { name: "Aman Verma", role: "Groom, 2025", text: "Got my bridal grooming package done here. Felt like a king that day. Highly recommend Dharmendra Mens Parlour!" },
  { name: "Karan Patel", role: "Regular Client", text: "Clean, premium and honest pricing. Booking on WhatsApp is super convenient, no waiting in queue." },
  { name: "Devendra Rathore", role: "First-time Client", text: "The hot towel shave experience was next level. Very relaxing ambience and skilled barbers." },
  { name: "Yash Chouhan", role: "Regular Client", text: "My go-to place for haircuts. Consistent quality every single time, and the pricing is always fair." },
  { name: "Nikhil Joshi", role: "Regular Client", text: "Loved the head massage & facial combo. Left feeling completely refreshed. Will be back soon!" }
];

// ---------- SLOTS ----------
const TIME_SLOTS = [
  "10:00 AM","11:00 AM","12:00 PM","01:00 PM",
  "02:00 PM","03:00 PM","04:00 PM","05:00 PM",
  "06:00 PM","07:00 PM","08:00 PM"
];

// ============================================
// PRELOADER
// ============================================
window.addEventListener("load", () => {
  const pre = document.getElementById("preloader");
  setTimeout(() => pre.classList.add("done"), 400);
});

// ============================================
// NAVBAR
// ============================================
const navbar = document.getElementById("navbar");
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 30);
});

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

// ============================================
// SCROLL REVEAL
// ============================================
const revealEls = document.querySelectorAll(".reveal-up");
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => revealObserver.observe(el));

// ============================================
// RENDER SERVICES
// ============================================
const servicesGrid = document.getElementById("servicesGrid");
const custServiceSelect = document.getElementById("custService");

SERVICES.forEach((s, i) => {
  const card = document.createElement("div");
  card.className = "service-card reveal-up";
  card.innerHTML = `
    <div class="service-media">
      <img src="${s.img}" alt="${s.name}" loading="lazy" />
      <span class="service-tag">${s.tag}</span>
    </div>
    <div class="service-body">
      <div class="service-top">
        <h3 class="service-name">${s.name}</h3>
        <span class="service-price">₹${s.price.toLocaleString("en-IN")}</span>
      </div>
      <p class="service-desc">${s.desc}</p>
      <a href="#booking" class="service-book" data-service="${s.name}">
        Book This Service <i class="fa-solid fa-arrow-right"></i>
      </a>
    </div>
  `;
  servicesGrid.appendChild(card);
  revealObserver.observe(card);

  const opt = document.createElement("option");
  opt.value = s.name;
  opt.textContent = `${s.name} — ₹${s.price.toLocaleString("en-IN")}`;
  custServiceSelect.appendChild(opt);
});

// Clicking "Book This Service" pre-selects the service dropdown
servicesGrid.addEventListener("click", (e) => {
  const link = e.target.closest(".service-book");
  if (!link) return;
  const serviceName = link.dataset.service;
  setTimeout(() => {
    custServiceSelect.value = serviceName;
  }, 300);
});

// ============================================
// RENDER GALLERY
// ============================================
const galleryGrid = document.getElementById("galleryGrid");
GALLERY.forEach((src) => {
  const fig = document.createElement("figure");
  fig.className = "reveal-up";
  fig.innerHTML = `<img src="${src}" alt="Dharmendra Mens Parlour gallery" loading="lazy" />`;
  galleryGrid.appendChild(fig);
  revealObserver.observe(fig);
});

// ============================================
// TESTIMONIALS SLIDER
// ============================================
const testiTrack = document.getElementById("testiTrack");
const testiDotsWrap = document.getElementById("testiDots");
const testiPrevBtn = document.getElementById("testiPrev");
const testiNextBtn = document.getElementById("testiNext");

// group testimonials into slides of 3
function chunk(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}
const testiSlideGroups = chunk(TESTIMONIALS, 3);

const slidesWrap = document.createElement("div");
slidesWrap.className = "testi-slides";
testiSlideGroups.forEach(group => {
  const slide = document.createElement("div");
  slide.className = "testi-card";
  slide.innerHTML = group.map(t => `
    <div class="testi-item">
      <div class="testi-stars">★★★★★</div>
      <p class="testi-text">"${t.text}"</p>
      <div class="testi-person">
        <div class="testi-avatar">${t.name.charAt(0)}</div>
        <div>
          <div class="testi-name">${t.name}</div>
          <div class="testi-role">${t.role}</div>
        </div>
      </div>
    </div>
  `).join("");
  slidesWrap.appendChild(slide);
});
testiTrack.appendChild(slidesWrap);

let testiIndex = 0;
function renderDots() {
  testiDotsWrap.innerHTML = "";
  testiSlideGroups.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.className = "testi-dot" + (i === testiIndex ? " active" : "");
    dot.addEventListener("click", () => goToTesti(i));
    testiDotsWrap.appendChild(dot);
  });
}
function goToTesti(i) {
  testiIndex = (i + testiSlideGroups.length) % testiSlideGroups.length;
  slidesWrap.style.transform = `translateX(-${testiIndex * 100}%)`;
  renderDots();
}
testiPrevBtn.addEventListener("click", () => goToTesti(testiIndex - 1));
testiNextBtn.addEventListener("click", () => goToTesti(testiIndex + 1));
renderDots();

// auto-play
setInterval(() => goToTesti(testiIndex + 1), 6000);

// ============================================
// BOOKING FORM + SLOT SELECTION
// ============================================
const dateInput = document.getElementById("custDate");
const slotGrid = document.getElementById("slotGrid");
const bookingForm = document.getElementById("bookingForm");

// restrict date to today onward
const today = new Date();
dateInput.min = today.toISOString().split("T")[0];
dateInput.value = today.toISOString().split("T")[0];

let selectedSlot = null;

// NOTE ON AVAILABILITY:
// This is a static front-end site, so there is no live server tracking real
// bookings. To give a realistic "some slots already taken" experience, and to
// stop the same visitor double-booking a slot on their own device, we keep a
// simple record in the browser's memory for the current session/date.
// Real, shop-wide slot locking requires a small backend (see README.md).
const localBookedSlots = {}; // { "2026-08-14": ["10:00 AM", ...] }

function renderSlots() {
  const dateKey = dateInput.value;
  const bookedForDate = localBookedSlots[dateKey] || [];
  selectedSlot = null;
  slotGrid.innerHTML = "";

  TIME_SLOTS.forEach(slot => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "slot-btn";
    btn.textContent = slot;

    if (bookedForDate.includes(slot)) {
      btn.classList.add("unavailable");
      btn.title = "Already requested for this date on this device";
    } else {
      btn.addEventListener("click", () => {
        slotGrid.querySelectorAll(".slot-btn").forEach(b => b.classList.remove("selected"));
        btn.classList.add("selected");
        selectedSlot = slot;
      });
    }
    slotGrid.appendChild(btn);
  });
}
renderSlots();
dateInput.addEventListener("change", renderSlots);

// ---------- FORM SUBMIT -> WHATSAPP ----------
bookingForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("custName").value.trim();
  const phone = document.getElementById("custPhone").value.trim();
  const service = document.getElementById("custService").value;
  const date = dateInput.value;

  if (!selectedSlot) {
    alert("Please select a time slot before confirming your booking.");
    return;
  }
  if (!/^[0-9]{10}$/.test(phone)) {
    alert("Please enter a valid 10-digit phone number.");
    return;
  }

  const prettyDate = new Date(date).toLocaleDateString("en-IN", {
    weekday: "long", day: "numeric", month: "long", year: "numeric"
  });

  const message =
`Hi Dharmendra Mens Parlour! I'd like to book an appointment.

Name: ${name}
Phone: ${phone}
Service: ${service}
Preferred Date: ${prettyDate}
Preferred Time: ${selectedSlot}

Please confirm if this slot is available. Thank you!`;

  const encodedMessage = encodeURIComponent(message);
  const waLink = `https://wa.me/${SHOP_WHATSAPP_NUMBER}?text=${encodedMessage}`;

  // mark slot as taken locally so this device doesn't pick it twice for this date
  if (!localBookedSlots[date]) localBookedSlots[date] = [];
  localBookedSlots[date].push(selectedSlot);

  window.open(waLink, "_blank");

  renderSlots();
  bookingForm.reset();
  dateInput.value = date;
});

// ============================================
// FOOTER YEAR
// ============================================
document.getElementById("year").textContent = new Date().getFullYear();
