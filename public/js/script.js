/**
 * ONLINE UNDERGARMENTS STORE - JS Core Engine
 * Client Presentation Website for LearnWithJulfy Digital Studio
 */

// Global App State
const state = {
  cart: [],
  wishlist: [],
  currentProduct: null,
  coupons: {
    'COMFORT20': 0.20,
    'JULFYFREE': 'free'
  },
  activeCoupon: null,
  currentShipment: {
    id: 'LWJ2026001',
    status: 'shipped',
    steps: [
      { name: 'Order Placed', time: 'June 21, 2026 - 10:00 AM', status: 'complete' },
      { name: 'Confirmed', time: 'June 21, 2026 - 02:30 PM', status: 'complete' },
      { name: 'Packed', time: 'June 22, 2026 - 09:15 AM', status: 'complete' },
      { name: 'Shipped', time: 'June 22, 2026 - 04:00 PM', status: 'complete' },
      { name: 'Out For Delivery', time: 'In Transit', status: 'active' },
      { name: 'Delivered', time: 'Pending', status: 'pending' }
    ]
  },
  demoBusinesses: {
    pharmacy: {
      title: 'HealQuick Multi-Vendor Pharmacy Portal',
      tagline: 'Hyper-local medicine delivery portal, prescription scanning, and patient dashboards.',
      mockContent: `
        <div style="background-color: #f0fdf4; padding: 24px; border-radius: 12px; border: 1px solid #bbf7d0; color: #166534;" class="mb-4">
          <h4 style="font-size: 16px; margin-bottom: 8px; font-weight:700;">💊 Live Client Feature: Quick Medicine Search</h4>
          <p style="font-size: 13px; margin-bottom:12px;">Type any generic medicine name to check real-time stock levels across city outlets.</p>
          <div style="display:flex; gap:10px;">
            <input type="text" placeholder="e.g. Paracetamol, Insulin" class="form-control" style="background:#fff; border-color:#86efac; max-width:300px; padding:8px 12px; font-size:13px; border-radius:6px;">
            <button class="btn-primary" style="padding:4px 16px; font-size:12px; box-shadow:none;" onclick="alert('Demo: 12 pharmacies near Sector 5 have 100+ items in stock!')">Search Stock</button>
          </div>
        </div>
        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:16px;">
          <div class="wc-card" style="padding:16px; text-align:center;">
            <div class="fc-icon" style="background-color:rgba(34,197,94,0.15); color:#22c55e; margin:0 auto 10px;">📝</div>
            <h5 style="font-size:14px; margin-bottom:4px;">Upload Rx</h5>
            <p style="font-size:11px; color:#666;">AI prescription digitizer scans hand-written medical orders.</p>
          </div>
          <div class="wc-card" style="padding:16px; text-align:center;">
            <div class="fc-icon" style="background-color:rgba(34,197,94,0.15); color:#22c55e; margin:0 auto 10px;">📅</div>
            <h5 style="font-size:14px; margin-bottom:4px;">Refill Reminders</h5>
            <p style="font-size:11px; color:#666;">Automatic WhatsApp integration calls patients for monthly stockups.</p>
          </div>
          <div class="wc-card" style="padding:16px; text-align:center;">
            <div class="fc-icon" style="background-color:rgba(34,197,94,0.15); color:#22c55e; margin:0 auto 10px;">🛵</div>
            <h5 style="font-size:14px; margin-bottom:4px;">60-Min Ingress</h5>
            <p style="font-size:11px; color:#666;">Live GPS tracking and pilot dispatch mapping services.</p>
          </div>
        </div>
      `
    },
    restaurant: {
      title: 'BiteFine Taste Bistro & Live Menu',
      tagline: 'QR menu order engine, table bookings, customer retention coupons, and billing dashboards.',
      mockContent: `
        <div style="background-color: #fffbeb; padding: 24px; border-radius: 12px; border: 1px solid #fef3c7; color: #92400e;" class="mb-4">
          <h4 style="font-size: 16px; margin-bottom: 8px; font-weight:700;">🍕 QR-Menu Ordering Simulator</h4>
          <p style="font-size: 13px; margin-bottom:12px;">Guests choose items right from their dining table, routing orders straight to kitchen displays.</p>
          <div style="display:grid; grid-template-columns: repeat(2, 1fr); gap:10px;">
            <button class="btn-secondary" style="font-size:13px; padding:10px; border-color:#f59e0b; color:#92400e;" onclick="alert('Order Added: 1x Truffle Mushroom Pizza routed to Kitchen Display Screen #2!')">🍕 Add Truffle Pizza - ₹550</button>
            <button class="btn-secondary" style="font-size:13px; padding:10px; border-color:#f59e0b; color:#92400e;" onclick="alert('Order Added: 1x Signature Mojito routed to Bar Display!')">🍸 Add Mojito - ₹220</button>
          </div>
        </div>
        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:16px;">
          <div class="wc-card" style="padding:16px; text-align:center;">
            <div class="fc-icon" style="background-color:rgba(217,119,6,0.15); color:#d97706; margin:0 auto 10px;">🍷</div>
            <h5 style="font-size:14px; margin-bottom:4px;">Table Planner</h5>
            <p style="font-size:11px; color:#666;">Live grid map lets users pick patio, indoor, or bar seating.</p>
          </div>
          <div class="wc-card" style="padding:16px; text-align:center;">
            <div class="fc-icon" style="background-color:rgba(217,119,6,0.15); color:#d97706; margin:0 auto 10px;">📊</div>
            <h5 style="font-size:14px; margin-bottom:4px;">Kitchen CRM</h5>
            <p style="font-size:11px; color:#666;">Analytical dashboards for chefs tracking recipe prep latency times.</p>
          </div>
          <div class="wc-card" style="padding:16px; text-align:center;">
            <div class="fc-icon" style="background-color:rgba(217,119,6,0.15); color:#d97706; margin:0 auto 10px;">🎁</div>
            <h5 style="font-size:14px; margin-bottom:4px;">Loyalty Loops</h5>
            <p style="font-size:11px; color:#666;">Accumulate dynamic cashbacks on repeating orders based on visitor visits.</p>
          </div>
        </div>
      `
    },
    gym: {
      title: 'PowerApex Fitness & Tracker Studio',
      tagline: 'Trainer booking grids, membership payments, workout log metrics, and locker checkins.',
      mockContent: `
        <div style="background-color: #f0f9ff; padding: 24px; border-radius: 12px; border: 1px solid #bae6fd; color: #075985;" class="mb-4">
          <h4 style="font-size: 16px; margin-bottom: 8px; font-weight:700;">🏋️ Session Attendance Booking</h4>
          <p style="font-size: 13px; margin-bottom:12px;">Let coaches schedule classes and let members tap inside their personalized Android application to check in.</p>
          <div style="display:flex; justify-content:space-between; align-items:center; background:#fff; padding:12px; border-radius:8px; border:1px solid #e0f2fe; margin-bottom:8px;">
            <span style="font-size:13px; font-weight:600;">HIIT Fusion with Coach Ryan (07:00 AM)</span>
            <button class="btn-primary" style="padding:6px 14px; font-size:11px; box-shadow:none;" onclick="alert('Class Secured! We have sent a confirmation with pass barcode to your registered device.')">Book Spot</button>
          </div>
          <div style="display:flex; justify-content:space-between; align-items:center; background:#fff; padding:12px; border-radius:8px; border:1px solid #e0f2fe;">
            <span style="font-size:13px; font-weight:600;">Powerlifting Club with Coach Maya (06:00 PM)</span>
            <button class="btn-primary" style="padding:6px 14px; font-size:11px; box-shadow:none;" onclick="alert('Class Secured! Core lifting slots have occupied 14 out of 15 lifters.')">Book Spot</button>
          </div>
        </div>
      `
    },
    school: {
      title: 'EduSphere Academic Administration System',
      tagline: 'Fee payment portals, real-time grading reports, parent communication logs, and bus routing.',
      mockContent: `
        <div style="background-color: #f5f3ff; padding: 24px; border-radius: 12px; border: 1px solid #ddd6fe; color: #5b21b6;" class="mb-4">
          <h4 style="font-size: 16px; margin-bottom: 8px; font-weight:700;">🏫 Academic Transcript Sandbox</h4>
          <p style="font-size: 13px; margin-bottom:12px;">Parents log in to witness child homework scores, fee dues, library histories, and school bus locations.</p>
          <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap:12px;">
            <div style="background:#fff; padding:10px; border-radius:6px; border: 1px solid #e9d5ff; text-align:center;">
              <span style="font-size:11px; text-transform:uppercase; color:#9575cd; font-weight:700;">Monthly Grade</span>
              <h5 style="font-size:20px; font-weight:800; color:#5b21b6; margin:4px 0;">A+ (96%)</h5>
            </div>
            <div style="background:#fff; padding:10px; border-radius:6px; border: 1px solid #e9d5ff; text-align:center;">
              <span style="font-size:11px; text-transform:uppercase; color:#9575cd; font-weight:700;">Bus Tracking</span>
              <h5 style="font-size:13px; font-weight:800; color:#5b21b6; margin:8px 0;">Sector 9, Gate A</h5>
            </div>
            <div style="background:#fff; padding:10px; border-radius:6px; border: 1px solid #e9d5ff; text-align:center;">
              <span style="font-size:11px; text-transform:uppercase; color:#9575cd; font-weight:700;">Next Fee Due</span>
              <h5 style="font-size:14px; font-weight:800; color:#e040fb; margin:6px 0;">₹12,400</h5>
            </div>
          </div>
        </div>
      `
    },
    retail: {
      title: 'Universal Multi-Warehousing Retail Engine',
      tagline: 'Barcode inventory mapping, digital purchase receipts, direct wholesale interfaces, and vendor management.',
      mockContent: `
        <div style="background-color: #fff1f2; padding: 24px; border-radius: 12px; border: 1px solid #fecdd3; color: #9f1239;" class="mb-4">
          <h4 style="font-size: 16px; margin-bottom: 8px; font-weight:700;">📦 Multi-Store Inventory Reorder Simulator</h4>
          <p style="font-size: 13px; margin-bottom:12px;">Low stock triggers push alerts directly to manufacturers ensuring continuous fulfillment cycles without delays.</p>
          <div style="display:flex; justify-content:space-between; align-items:center; background:#fff; padding:12px; border-radius:8px; border:1px solid #ffe4e6;">
            <div>
              <h5 style="font-size:13px; font-weight:700; color:#111; margin:0;">Standard Crew Neck Apparel</h5>
              <p style="font-size:11px; color:#888;">Barcode ID: 90021-X. Warehouse stock levels: 12 units (Critical Level)</p>
            </div>
            <button class="btn-primary" style="padding:6px 14px; font-size:11px; background-color:#e11d48; box-shadow:none;" onclick="alert('Supply Request Sent: Reordered 500 units directly from Vendor ApparelCorp Co.!')">Auto-Reorder</button>
          </div>
        </div>
      `
    },
    undergarments: {
      title: 'Online Undergarments Studio Showcase',
      tagline: 'Our live demo showcasing high fidelity sliders, animated tracking searchers, live coupons, bags, and checkout mods.',
      mockContent: `
        <div style="background-color: #fff7ed; padding: 24px; border-radius: 12px; border: 1px solid #ffedd5; color: #c2410c;" class="mb-4">
          <h4 style="font-size: 16px; margin-bottom: 8px; font-weight:700;">✨ Absolute Crafts Showcase</h4>
          <p style="font-size: 13px;">This entire undergarments website represents how fully cohesive client-proofing architectures are constructed. From custom persistent dark-mode preferences to dynamic transactional states, we build digital storefronts that engage and convert visitors into long-term loyal customers!</p>
        </div>
      `
    }
  }
};

// Demo Product Definitions
const demoProducts = {
  'prod-1': {
    id: 'prod-1',
    name: 'Premium Cotton Brief',
    price: 299,
    oldPrice: 399,
    rating: 4.8,
    reviews: 142,
    category: "Men's Innerwear",
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=600&q=80',
    desc: 'Crafted from 100% fine combed organic cotton, this luxury brief boasts an ultra-soft waistband that provides zero friction, long-lasting durability, skin-friendly moisture-wicking and all-day maximum breathability.'
  },
  'prod-2': {
    id: 'prod-2',
    name: 'Comfort Everyday Bra',
    price: 499,
    oldPrice: 649,
    rating: 4.9,
    reviews: 189,
    category: "Women's Innerwear",
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=600&q=80',
    desc: 'Revolutionary wire-free everyday bra offering premium soft contour cups, seamless aesthetic fit under t-shirts, adjustable straps for tailored lifting, and fully hypoallergenic luxury modal fibers.'
  },
  'prod-3': {
    id: 'prod-3',
    name: 'Sports Performance Innerwear',
    price: 599,
    oldPrice: 799,
    rating: 4.7,
    reviews: 94,
    category: "Sports Performance",
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80',
    desc: 'High tension athletic knit fabric engineered to withstand extreme athletic rigor. Featuring strategic grid ventilation, 4-way elastic stretch alignment, antimicrobial fabric treatment and heavy friction prevention.'
  }
};

// Initialize Application once Document is Loaded
document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initMobileMenu();
  initWishlist();
  initCartListeners();
  initReviewSlider();
  initTrackingSystem();
  initModals();
  verifyGlobalDOMEvents();
});

// 2. Header Scroll Behaviors
function initHeaderScroll() {
  const header = document.querySelector('header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// 3. Mobile Navigation Menu
function initMobileMenu() {
  const trigger = document.getElementById('mobile-menu-trigger');
  const menu = document.getElementById('mobile-nav-panel');
  if (!trigger || !menu) return;

  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    menu.classList.toggle('open');
  });

  // Close when outer is clicked
  document.addEventListener('click', (e) => {
    if (!menu.contains(e.target)) {
      menu.classList.remove('open');
    }
  });
}

// 4. Wishlist Toggle Event Binder
function initWishlist() {
  document.body.addEventListener('click', (e) => {
    const wishlistBtn = e.target.closest('.prod-wishlist');
    if (!wishlistBtn) return;

    e.preventDefault();
    const pid = wishlistBtn.dataset.pid;
    if (!pid) return;

    const index = state.wishlist.indexOf(pid);
    if (index > -1) {
      state.wishlist.splice(index, 1);
      wishlistBtn.classList.remove('active');
    } else {
      state.wishlist.push(pid);
      wishlistBtn.classList.add('active');
    }

    // Update floating badge counts in Header
    const wlBadges = document.querySelectorAll('.wishlist-badge');
    wlBadges.forEach(badge => {
      badge.textContent = state.wishlist.length;
      badge.style.display = state.wishlist.length > 0 ? 'flex' : 'none';
    });
  });
}

// 5. Live E-Commerce Cart Drawer and Math Lifecycle
function initCartListeners() {
  // Drawer visibility selectors
  const cartToggle = document.getElementById('cart-toggle');
  const cartDrawer = document.getElementById('cart-drawer');
  const cartOverlay = document.getElementById('cart-drawer-overlay');
  const closeCartBtn = document.getElementById('close-cart');

  if (cartToggle && cartDrawer && cartOverlay) {
    cartToggle.addEventListener('click', (e) => {
      e.preventDefault();
      cartDrawer.classList.add('open');
      cartOverlay.classList.add('open');
    });

    const closeCartFn = () => {
      cartDrawer.classList.remove('open');
      cartOverlay.classList.remove('open');
    };

    if (closeCartBtn) closeCartBtn.addEventListener('click', closeCartFn);
    cartOverlay.addEventListener('click', closeCartFn);
  }

  // Intercepting Cart Add buttons
  document.body.addEventListener('click', (e) => {
    // Standard Add-To-Cart
    const addBtn = e.target.closest('.btn-add-cart');
    if (addBtn) {
      const pid = addBtn.dataset.pid;
      if (pid) {
        addToCart(pid, 1);
        openFloatingCartNotif();
      }
    }

    // Buy-Now trigger button (routes directly to Checkout modal!)
    const buyBtn = e.target.closest('.btn-buy-now');
    if (buyBtn) {
      const pid = buyBtn.dataset.pid;
      if (pid) {
        addToCart(pid, 1);
        openCheckoutModal();
      }
    }
  });

  // Checkout Modal triggers
  const initiateCheck = document.getElementById('checkout-trigger-btn');
  if (initiateCheck) {
    initiateCheck.addEventListener('click', () => {
      // Close cart drawer
      if (cartDrawer) {
        cartDrawer.classList.remove('open');
        cartOverlay.classList.remove('open');
      }
      openCheckoutModal();
    });
  }
}

// Global Core Cart Modifiers
function addToCart(pid, qty = 1, size = 'M') {
  const prod = demoProducts[pid];
  if (!prod) return;

  const existingItem = state.cart.find(item => item.id === pid && item.size === size);
  if (existingItem) {
    existingItem.qty += qty;
  } else {
    state.cart.push({
      id: pid,
      name: prod.name,
      price: prod.price,
      image: prod.image,
      size: size,
      qty: qty
    });
  }

  updateCartDOM();
}

function updateCartDOM() {
  const container = document.getElementById('cart-items-container');
  const totalCountBadges = document.querySelectorAll('.cart-badge');
  const subtotalWrapper = document.getElementById('cart-subtotal-val');
  
  if (!container) return;

  if (state.cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty-state">
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-bag"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
        <p style="text-align:center; font-size:14px;">Your cart is currently empty. Explore our luxury collection!</p>
      </div>
    `;
    
    totalCountBadges.forEach(badge => {
      badge.textContent = 0;
      badge.style.display = 'none';
    });
    
    if (subtotalWrapper) subtotalWrapper.textContent = '₹0.00';
    return;
  }

  // Draw list of items
  let html = '';
  let subtotal = 0;
  let totalItemsCount = 0;

  state.cart.forEach((item, index) => {
    const itemCost = item.price * item.qty;
    subtotal += itemCost;
    totalItemsCount += item.qty;

    html += `
      <div class="cart-item">
        <div class="cart-item-img">
          <img src="${item.image}" alt="${item.name}">
        </div>
        <div class="cart-item-info">
          <h4>${item.name}</h4>
          <p class="cart-item-meta">Size: ${item.size} | Price: ₹${item.price}</p>
          <div class="cart-item-qty">
            <button class="cart-qty-adjust-btn" onclick="adjustCartQty(${index}, -1)" style="border: 1px solid var(--gray-light); width:24px; height:24px; border-radius:4px; font-weight:700;">-</button>
            <span style="font-family: var(--font-mono); font-size:13px; font-weight:600;">${item.qty}</span>
            <button class="cart-qty-adjust-btn" onclick="adjustCartQty(${index}, 1)" style="border: 1px solid var(--gray-light); width:24px; height:24px; border-radius:4px; font-weight:700;">+</button>
          </div>
        </div>
        <div style="display:flex; flex-direction:column; align-items:flex-end; justify-content:space-between;">
          <span class="cart-item-price">₹${itemCost}</span>
          <button class="cart-item-remove" onclick="removeCartItem(${index})">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
          </button>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;

  // Calculate Subtotal and update indicators
  if (subtotalWrapper) {
    subtotalWrapper.textContent = `₹${subtotal}`;
  }

  // Update navbar visual badges
  totalCountBadges.forEach(badge => {
    badge.textContent = totalItemsCount;
    badge.style.display = totalItemsCount > 0 ? 'flex' : 'none';
  });
}

// Window-globally exposed helper functions for inline bindings
window.adjustCartQty = function(index, delta) {
  const item = state.cart[index];
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    state.cart.splice(index, 1);
  }
  updateCartDOM();
};

window.removeCartItem = function(index) {
  state.cart.splice(index, 1);
  updateCartDOM();
};

function openFloatingCartNotif() {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-drawer-overlay');
  if (drawer && overlay) {
    drawer.classList.add('open');
    overlay.classList.add('open');
  }
}

// 6. Testimonial Slideshow Rotator Script (Minimalist Auto Swiper)
function initReviewSlider() {
  const carousel = document.getElementById('review-carousel');
  if (!carousel) return;

  const slides = carousel.querySelectorAll('.rev-card');
  if (slides.length === 0) return;

  let currentXOffset = 0;
  let directionForward = true;

  setInterval(() => {
    const cardElement = slides[0];
    const slideGap = 30;
    const slideWidth = cardElement.getBoundingClientRect().width + slideGap;
    const totalWidth = slideWidth * slides.length;
    const parentContainerWidth = carousel.parentElement.clientWidth;
    const maxScroll = totalWidth - parentContainerWidth;

    if (maxScroll <= 0) {
      currentXOffset = 0;
      carousel.style.transform = `translateX(0px)`;
      return;
    }

    if (directionForward) {
      currentXOffset += slideWidth;
      if (currentXOffset >= maxScroll) {
        currentXOffset = maxScroll;
        directionForward = false;
      }
    } else {
      currentXOffset -= slideWidth;
      if (currentXOffset <= 0) {
        currentXOffset = 0;
        directionForward = true;
      }
    }

    carousel.style.transform = `translateX(-${currentXOffset}px)`;
  }, 4500);
}

// 7. Order Tracker Logic with shipment milestones
function initTrackingSystem() {
  const searchBarBtn = document.getElementById('track-search-btn');
  const searchInput = document.getElementById('track-input');
  
  if (searchBarBtn && searchInput) {
    searchBarBtn.addEventListener('click', () => {
      findShipmentRecord(searchInput.value.trim());
    });

    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
         findShipmentRecord(searchInput.value.trim());
      }
    });
  }
}

function findShipmentRecord(query) {
  const resultDiv = document.getElementById('tracking-result-panel');
  if (!resultDiv) return;

  if (!query) {
    alert('Please enter a valid tracking reference!');
    return;
  }

  // Draw loading mock state
  resultDiv.innerHTML = `
    <div style="text-align:center; padding: 40px; color: var(--gray-text);">
      <div style="width: 40px; height: 40px; border: 4px solid var(--primary); border-top-color: transparent; border-radius:50%; animation: spin .8s linear infinite; margin: 0 auto 20px;"></div>
      <p style="font-family: var(--font-mono); font-size:13px;">Retrieving manifest database coordinates from LearnWithJulfy secure servers...</p>
    </div>
  `;

  setTimeout(() => {
    let shipmentData = null;

    if (query.toUpperCase() === 'LWJ2026001') {
      shipmentData = state.currentShipment;
    } else {
      // Create a dynamic realistic dummy parcel tracking result!
      const statusOptions = ['confirmed', 'packed', 'shipped', 'delivered'];
      const statusSelected = statusOptions[Math.floor(Math.random() * statusOptions.length)];
      
      shipmentData = {
        id: query.toUpperCase(),
        status: statusSelected,
        steps: [
          { name: 'Order Placed', time: 'June 22, 2026 - 11:20 AM', status: 'complete' },
          { name: 'Confirmed', time: 'June 22, 2026 - 03:00 PM', status: statusSelected === 'confirmed' ? 'active' : 'complete' },
          { name: 'Packed', time: 'June 23, 2026 - 08:30 AM', status: statusSelected === 'packed' ? 'active' : (['shipped', 'delivered'].includes(statusSelected) ? 'complete' : 'pending') },
          { name: 'Shipped', time: 'June 23, 2026 - 11:00 AM', status: statusSelected === 'shipped' ? 'active' : (statusSelected === 'delivered' ? 'complete' : 'pending') },
          { name: 'Out For Delivery', time: 'Pending Delivery', status: 'pending' },
          { name: 'Delivered', time: 'Signature Verification Reqd', status: statusSelected === 'delivered' ? 'active' : 'pending' }
        ]
      };
    }

    // Render timeline nodes
    let percentageComplete = 0;
    const completedNodes = shipmentData.steps.filter(s => s.status === 'complete').length;
    const activeNodeIndex = shipmentData.steps.findIndex(s => s.status === 'active');
    
    if (completedNodes === shipmentData.steps.length) {
      percentageComplete = 100;
    } else {
      // Linear calculation of progress line width
      percentageComplete = Math.max(0, Math.min(100, (completedNodes / (shipmentData.steps.length - 1)) * 100));
    }

    let nodesHtml = '';
    shipmentData.steps.forEach(st => {
      const isComplete = st.status === 'complete' ? 'complete' : '';
      const isActive = st.status === 'active' ? 'active' : '';
      let markerIcon = '○';

      if (st.status === 'complete') {
        markerIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>`;
      } else if (st.status === 'active') {
        markerIcon = `<span style="width:10px; height:10px; background-color: var(--primary); border-radius:50%;"></span>`;
      }

      nodesHtml += `
        <div class="timeline-node ${isComplete} ${isActive}">
          <div class="node-icon">${markerIcon}</div>
          <div>
            <h4 class="node-title">${st.name}</h4>
            <p class="node-time">${st.time}</p>
          </div>
        </div>
      `;
    });

    resultDiv.innerHTML = `
      <div style="background-color: var(--gray-bg); padding:32px; border-radius: 16px; border: 1px solid var(--gray-light); margin-bottom: 30px;">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:16px; margin-bottom: 24px;">
          <div>
            <span style="font-family: var(--font-mono); font-size:12px; color: var(--gray-text);">MANIFEST REFERENCE ID</span>
            <h3 style="font-size:24px; color: var(--primary); font-family: var(--font-mono);">${shipmentData.id}</h3>
          </div>
          <div style="text-align: right;">
            <span style="font-family: var(--font-mono); font-size:12px; color: var(--gray-text);">DELIVERY SLA STATUS</span>
            <span style="display:block; background-color:${shipmentData.status === 'delivered' ? 'var(--success)' : 'var(--gold)'}; color:#fff; padding:6px 14px; border-radius:4px; font-weight:700; font-size:12px; text-transform:uppercase;">${shipmentData.status}</span>
          </div>
        </div>
        
        <div class="timeline">
          <div class="timeline-line">
            <div class="timeline-progress" style="width: ${percentageComplete}%;"></div>
          </div>
          ${nodesHtml}
        </div>
      </div>
    `;

  }, 1000);
}

// 8. Custom Presentation Modals Manager
function initModals() {
  const overlay = document.getElementById('modal-overlay');
  if (!overlay) return;

  const closeBtn = overlay.querySelector('.modal-close');
  const container = document.getElementById('modal-payload');

  // Close bindings
  const closeModalFn = () => {
    overlay.classList.remove('open');
    container.innerHTML = '';
  };
  
  if (closeBtn) closeBtn.addEventListener('click', closeModalFn);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModalFn();
  });

  // Action Click Interceptors inside document
  document.body.addEventListener('click', (e) => {
    
    // Quick View Triggers
    const qvTrigger = e.target.closest('.btn-qv');
    if (qvTrigger) {
      const pid = qvTrigger.dataset.pid;
      if (pid) {
        state.currentProduct = demoProducts[pid];
        renderQuickViewModal(state.currentProduct, container);
        overlay.classList.add('open');
      }
    }

    // Business Showcase Previews
    const bdTrigger = e.target.closest('.bd-btn');
    if (bdTrigger) {
      const bizId = bdTrigger.dataset.biz;
      if (bizId) {
        const obj = state.demoBusinesses[bizId];
        renderBusinessShowcaseModal(obj, bizId, container);
        overlay.classList.add('open');
      }
    }
  });
}

// Draw dynamic Quick View layout
function renderQuickViewModal(prod, wrapper) {
  wrapper.innerHTML = `
    <div class="qv-grid">
      <div class="qv-image">
        <img src="${prod.image}" alt="${prod.name}">
      </div>
      <div class="qv-info">
        <span class="prod-category" style="margin-bottom:8px;">${prod.category}</span>
        <h2 class="qv-title">${prod.name}</h2>
        
        <div class="prod-rating" style="margin-bottom:12px;">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          <span>(${prod.reviews} reviews)</span>
        </div>

        <div class="qv-price">₹${prod.price} <span style="text-decoration:line-through; font-size:15px; color:var(--gray-text); margin-left:10px;">₹${prod.oldPrice}</span></div>
        <p class="qv-desc">${prod.desc}</p>
        
        <div class="qv-options">
          <h4>Select Underwear Size:</h4>
          <div class="qv-sizes" id="modal-size-selector">
            <button class="qv-size-btn selected" onclick="onModalSizeSelect(this, 'S')">S</button>
            <button class="qv-size-btn" onclick="onModalSizeSelect(this, 'M')">M</button>
            <button class="qv-size-btn" onclick="onModalSizeSelect(this, 'L')">L</button>
            <button class="qv-size-btn" onclick="onModalSizeSelect(this, 'XL')">XL</button>
          </div>
        </div>

        <div class="qv-qty-wrap">
          <h4>Quantity:</h4>
          <div class="qv-qty-controls">
            <button class="qv-qty-btn" onclick="adjustModalQty(-1)">-</button>
            <span class="qv-qty-val" id="modal-qty-num">1</span>
            <button class="qv-qty-btn" onclick="adjustModalQty(1)">+</button>
          </div>
        </div>

        <div class="qv-actions">
          <button class="btn-primary" style="flex:1;" onclick="addCurrentProductToBag()">👜 Add to Bag</button>
        </div>
      </div>
    </div>
  `;

  // Track state
  state.selectedModalSize = 'S';
  state.selectedModalQty = 1;
}

// In-modal size adjustments helper scripts
window.onModalSizeSelect = function(element, size) {
  const container = document.getElementById('modal-size-selector');
  if (container) {
    const buttons = container.querySelectorAll('.qv-size-btn');
    buttons.forEach(btn => btn.classList.remove('selected'));
  }
  element.classList.add('selected');
  state.selectedModalSize = size;
};

window.adjustModalQty = function(delta) {
  const qtyLbl = document.getElementById('modal-qty-num');
  if (!qtyLbl) return;

  state.selectedModalQty = Math.max(1, state.selectedModalQty + delta);
  qtyLbl.textContent = state.selectedModalQty;
};

window.addCurrentProductToBag = function() {
  if (state.currentProduct) {
    addToCart(state.currentProduct.id, state.selectedModalQty, state.selectedModalSize);
    
    // Close overlay Modal
    const overlay = document.getElementById('modal-overlay');
    if (overlay) overlay.classList.remove('open');
    
    openFloatingCartNotif();
  }
};

// 9. Digital Production Showcase Cards
function renderBusinessShowcaseModal(item, key, wrapper) {
  wrapper.innerHTML = `
    <div style="padding: 40px;">
      <span style="font-family: var(--font-mono); color: var(--primary); font-size:11px; font-weight:700; letter-spacing:2px; text-transform:uppercase;">DIGITAL STUDIO PRESENTATION BLOCK</span>
      <h2 style="font-size: clamp(22px, 3.5vw, 32px); margin:8px 0 12px; color: var(--black); font-weight:700;">${item.title}</h2>
      <p style="color: var(--gray-text); font-size:14px; margin-bottom: 24px;">${item.tagline}</p>
      
      <!-- Inside Simulated App Content Node -->
      <div style="border: 2px dashed var(--gray-light); border-radius:16px; padding:24px; min-height: 250px; background-color: var(--gray-bg); position:relative; overflow:hidden;" class="mb-4">
        <span style="position:absolute; top:8px; right:12px; font-family: var(--font-mono); font-size:9px; color: var(--gray-text); opacity:0.6;">SANDBOX SIMULATOR GRAPHICS</span>
        ${item.mockContent}
      </div>

      <div style="background-color: var(--black); color: #fff; padding: 24px; border-radius: 12px; margin-top:30px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:16px;">
        <div>
          <h4 style="font-size:15px; margin-bottom:4px; font-family:var(--font-display); color:#fff; font-weight:700;">💼 Want a complete dynamic setup like this?</h4>
          <p style="font-size:12px; color:#aaa; margin:0;">Receive dynamic customer tracking dashboards, automated emails, QR, and offline-POS syncing.</p>
        </div>
        <div style="display:flex; gap:12px;">
          <a href="https://wa.me/91XXXXXXXXXX?text=Hi Julfy, I saw your premium showcase for ${encodeURIComponent(item.title)}. Let's build our digital store!" target="_blank" class="btn-primary" style="font-size:13px; padding:10px 20px; text-shadow:none; box-shadow:none; background-color:#22C55E;">💚 Connect on WhatsApp</a>
        </div>
      </div>
    </div>
  `;
}

// 10. Direct Checkout Integration
function openCheckoutModal() {
  const overlay = document.getElementById('modal-overlay');
  const container = document.getElementById('modal-payload');
  if (!overlay || !container) return;

  if (state.cart.length === 0) {
    alert('Please add at least one item to bag before checking out!');
    return;
  }

  // Draw Checkout grid inside modal wrapper
  let receiptRows = '';
  let subtotal = 0;

  state.cart.forEach(item => {
    const cost = item.price * item.qty;
    subtotal += cost;
    receiptRows += `
      <div class="receipt-item">
        <span>${item.name} (x${item.qty}) <span style="font-mono; font-size:11px; color:#999;">${item.size}</span></span>
        <span>₹${cost}</span>
      </div>
    `;
  });

  const cartTotal = subtotal;

  container.innerHTML = `
    <div class="checkout-heading">
      <span style="font-family: var(--font-mono); font-size:11px; color:var(--primary); font-weight:700; letter-spacing:1px; text-transform:uppercase;">AUTHENTIC STRIPLESS SECURE CHECKOUT</span>
      <h2 style="font-size:24px; font-weight:700; margin-top:4px;">Complete Demonstration Checkout</h2>
    </div>
    
    <div class="qv-grid checkout-grid" style="padding-top:12px;">
      <!-- Form Input Column -->
      <div class="checkout-form-area">
        <form id="chk-form" onsubmit="onDemoPurchaseSubmit(event)">
          <div class="form-group">
            <label>Customer Full Name *</label>
            <input type="text" id="chk-name" required placeholder="Julfikar Ali" class="form-control">
          </div>
          <div class="form-row">
            <div class="form-group">
              <label>Phone Number *</label>
              <input type="tel" id="chk-phone" required placeholder="e.g. +91 98765 43210" class="form-control">
            </div>
            <div class="form-group">
              <label>Email Address *</label>
              <input type="email" id="chk-email" required placeholder="julfy@learnwithjulfy.com" class="form-control">
            </div>
          </div>
          <div class="form-group">
            <label>Delivery Shipping Address *</label>
             <input type="text" id="chk-address" required placeholder="Apt 4B, Digital Studio Arcade" class="form-control">
          </div>
          <div class="form-row">
            <div class="form-group">
              <label>City *</label>
              <input type="text" id="chk-city" required placeholder="Kolkata" class="form-control">
            </div>
            <div class="form-group">
              <label>PIN Code *</label>
              <input type="text" id="chk-pin" required placeholder="700091" class="form-control">
            </div>
          </div>
          
          <div class="form-group">
             <label>Select Preferred Payment Mode</label>
             <div class="payment-methods">
               <div class="payment-pill selected" onclick="togglePaymentMode(this, 'COD')">
                 <input type="radio" name="paym" checked>
                 <span>Cash on Delivery</span>
               </div>
               <div class="payment-pill" onclick="togglePaymentMode(this, 'UPI')">
                 <input type="radio" name="paym">
                 <span>Instant UPI pay</span>
               </div>
             </div>
          </div>

          <button type="submit" class="btn-primary" style="width:100%; margin-top:15px; font-size:15px; padding:15px;">🔒 Confirm Free Sandbox Order</button>
        </form>
      </div>

      <!-- Receipt column -->
      <div class="checkout-summary-area">
        <h4 style="font-size:16px; margin-bottom:16px; font-weight:700; border-bottom:1px solid rgba(0,0,0,0.06); padding-bottom:8px;">Order Inventory Summary</h4>
        <div style="max-height: 200px; overflow-y:auto; margin-bottom:16px;">
          ${receiptRows}
        </div>
        
        <!-- Promo Coupon Field -->
        <div style="display:flex; gap:8px; margin-bottom:20px;">
          <input type="text" id="chk-coupon-input" placeholder="Enter COMFORT20" class="form-control" style="font-size:12px; padding:8px 12px;">
          <button type="button" class="btn-secondary" style="font-size:12px; padding:8px 16px;" onclick="applyPromoCoupon()">Apply</button>
        </div>
        <div id="coupon-alert-msg" style="font-size:12px; margin-top:-14px; margin-bottom:14px; display:none;"></div>

        <div class="receipt-item">
          <span>Courier Shipping</span>
          <span style="color:var(--success); font-weight:600;">FREE SHIPPING</span>
        </div>
        
        <div class="receipt-item" id="discount-row-display" style="display:none; color: var(--success);">
          <span>Promo Discount Applied</span>
          <span id="discount-subtr-display">-₹0</span>
        </div>

        <div class="receipt-item total">
          <span>Grand Checkout Total</span>
          <span id="checkout-grand-total">₹${cartTotal}</span>
        </div>

        <div style="font-size:11px; color: var(--gray-text); text-align:center; padding:12px 16px; border-radius:8px; background:rgba(0,0,0,0.02); margin-top:20px;">
          ☝️ <strong>Presentation Note:</strong> No payment details are captured. Click Confirm to process complete parcel transit manifests.
        </div>
      </div>
    </div>
  `;

  state.currentCheckoutTotal = cartTotal;
  state.checkoutSubtotal = subtotal;
  state.activeCoupon = null;

  overlay.classList.add('open');
}

window.togglePaymentMode = function(element, mode) {
  const pills = document.querySelectorAll('.payment-pill');
  pills.forEach(p => p.classList.remove('selected'));
  
  element.classList.add('selected');
  const radio = element.querySelector('input[type="radio"]');
  if (radio) radio.checked = true;
};

window.applyPromoCoupon = function() {
  const val = document.getElementById('chk-coupon-input').value.trim().toUpperCase();
  const msgPanel = document.getElementById('coupon-alert-msg');
  const discRow = document.getElementById('discount-row-display');
  const discLbl = document.getElementById('discount-subtr-display');
  const totalLbl = document.getElementById('checkout-grand-total');

  if (!val) return;

  if (state.coupons[val]) {
    const rate = state.coupons[val];
    state.activeCoupon = val;
    msgPanel.style.display = 'block';
    msgPanel.style.color = 'var(--success)';
    msgPanel.textContent = '🥳 Coupon code COMFORT20 verified! Saved 20% off';
    
    // Calculate off
    const discount = Math.round(state.checkoutSubtotal * rate);
    state.currentCheckoutTotal = state.checkoutSubtotal - discount;

    discLbl.textContent = `-₹${discount}`;
    discRow.style.display = 'flex';
    totalLbl.textContent = `₹${state.currentCheckoutTotal}`;
  } else {
    msgPanel.style.display = 'block';
    msgPanel.style.color = '#ef4444';
    msgPanel.textContent = '❌ Invalid Coupon code! Try typing: COMFORT20';
    discRow.style.display = 'none';
    state.currentCheckoutTotal = state.checkoutSubtotal;
    totalLbl.textContent = `₹${state.currentCheckoutTotal}`;
  }
};

window.onDemoPurchaseSubmit = function(e) {
  e.preventDefault();
  const formArea = document.querySelector('.modal-wrapper');
  if (!formArea) return;

  const nameVal = document.getElementById('chk-name').value;
  const pinVal = document.getElementById('chk-pin').value;

  // Insert loading state
  formArea.innerHTML = `
    <div style="text-align:center; padding: 80px 40px;">
       <div style="width: 60px; height: 60px; border: 4px solid var(--primary); border-top-color: transparent; border-radius:50%; animation: spin .8s linear infinite; margin: 0 auto 30px;"></div>
       <h3 style="font-size:20px; font-weight:700; margin-bottom:12px;">Validating Sandbox Gateway Manifest</h3>
       <p style="color: var(--gray-text); font-size:14px;">Compiling shipping routes and printing parcel bar labels...</p>
    </div>
  `;

  setTimeout(() => {
    // Generate virtual invoice tracking ID
    const randomSuffix = Math.floor(100000 + Math.random() * 900000);
    const trackingNo = `LWJ2026${randomSuffix}`;

    formArea.innerHTML = `
      <div class="success-card">
         <div class="success-icon">✓</div>
         <h2 style="font-size: 28px; font-weight:700; margin-bottom:12px; color:var(--black);">Order Placed Successfully!</h2>
         <p style="color: var(--gray-text); font-size:14px; max-width:480px; margin: 0 auto 24px;">Thank you for testing the presentation, <strong>${nameVal}</strong>! Your demo undergarments shipping dispatch has been scheduled for delivery at PIN <strong>${pinVal}</strong>.</p>
         
         <div style="background-color:var(--gray-bg); padding:24px; border-radius:12px; border:1px solid var(--gray-light); margin:0 auto 30px; max-width:480px; text-align:left;">
           <span style="font-size:11px; text-transform:uppercase; color:var(--gray-text); font-family:var(--font-mono); font-weight:600;">PRESENTATION REGISTERED MANIFEST ID</span>
           <div style="font-size:24px; font-weight:800; color:var(--primary); font-family:var(--font-mono); margin:4px 0 12px; letter-spacing:1px;">${trackingNo}</div>
           
           <p style="font-size:13px; color:var(--black); margin-bottom:12px;">Copy this tracker ID to test the <strong>Live Timeline Monitor</strong> on the Homepage!</p>
           <button class="btn-secondary" style="font-size:12px; padding:8px 16px; width:100%; border-color:var(--primary); color:var(--primary);" onclick="copyTrackerText('${trackingNo}')">📋 Copy Tracker ID</button>
         </div>

         <div style="display:flex; justify-content:center; gap:16px;">
            <button class="btn-primary" onclick="closePresentationalModalsAndClearBag()">Return & Shop More</button>
         </div>
      </div>
    `;

    // Clear cart memory
    state.cart = [];
    updateCartDOM();

  }, 1800);
};

window.copyTrackerText = function(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert('Manifest ID copied to clipboard! Paste it inside the homepage Order Tracker tracking bar.');
  }).catch(() => {
    // Fallback alert
    alert(`Manifest ID is: ${text}. Copy it to explore search milestones!`);
  });
};

window.closePresentationalModalsAndClearBag = function() {
  const overlay = document.getElementById('modal-overlay');
  if (overlay) overlay.classList.remove('open');
};

// 11. Custom Safeguards verification validation
function verifyGlobalDOMEvents() {
  // Safe listener for direct links
  const smoothLinks = document.querySelectorAll('a[href^="#"]');
  smoothLinks.forEach(lnk => {
    lnk.addEventListener('click', function(e) {
      const loc = this.getAttribute('href');
      if (loc && loc !== '#') {
        const trg = document.querySelector(loc);
        if (trg) {
          e.preventDefault();
          trg.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
}
