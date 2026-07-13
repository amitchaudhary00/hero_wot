/* =========================================================
     CONFIG
  ========================================================= */
const CONFIG = {
  heroImages: ["/assets/Default.png", "/assets/Variant2.png", "/assets/Variant3.png"],
  stats: [
    {
      icon: `<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.01783 0.862611C7.04704 0.803585 7.09217 0.7539 7.14813 0.719162C7.20408 0.684423 7.26863 0.666016 7.33449 0.666016C7.40035 0.666016 7.4649 0.684423 7.52086 0.719162C7.57681 0.7539 7.62194 0.803585 7.65116 0.862611L9.19116 3.98194C9.29261 4.18726 9.44237 4.36488 9.62758 4.49958C9.81278 4.63428 10.0279 4.72202 10.2545 4.75528L13.6985 5.25928C13.7637 5.26873 13.8251 5.29626 13.8755 5.33874C13.9259 5.38123 13.9634 5.43698 13.9838 5.49968C14.0042 5.56239 14.0067 5.62955 13.9909 5.69357C13.9751 5.75759 13.9417 5.81591 13.8945 5.86194L11.4038 8.28728C11.2396 8.44735 11.1167 8.64493 11.0457 8.86303C10.9748 9.08113 10.9579 9.3132 10.9965 9.53928L11.5845 12.9659C11.596 13.0312 11.589 13.0983 11.5642 13.1597C11.5394 13.2211 11.4978 13.2744 11.4442 13.3133C11.3906 13.3522 11.3271 13.3753 11.2611 13.3799C11.195 13.3845 11.129 13.3704 11.0705 13.3393L7.99183 11.7206C7.78897 11.6141 7.56328 11.5584 7.33416 11.5584C7.10504 11.5584 6.87935 11.6141 6.67649 11.7206L3.59849 13.3393C3.54005 13.3702 3.47409 13.3841 3.40813 13.3794C3.34216 13.3748 3.27884 13.3517 3.22536 13.3128C3.17187 13.2739 3.13038 13.2207 3.1056 13.1594C3.08081 13.0981 3.07373 13.0311 3.08516 12.9659L3.67249 9.53995C3.71129 9.31377 3.69448 9.08154 3.62352 8.86331C3.55255 8.64508 3.42956 8.44738 3.26516 8.28728L0.774492 5.86261C0.726888 5.81663 0.693155 5.75821 0.677134 5.69399C0.661114 5.62978 0.66345 5.56236 0.683878 5.49941C0.704306 5.43645 0.742004 5.38051 0.792677 5.33793C0.84335 5.29536 0.904961 5.26788 0.970492 5.25861L4.41383 4.75528C4.64066 4.72228 4.85609 4.63465 5.04155 4.49994C5.22701 4.36522 5.37696 4.18746 5.47849 3.98194L7.01783 0.862611Z" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            `,
      value: "4.8&#9733;",
      label: "App Rating",
      sub: "12K+ reviews",
    },
    {
      icon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1653_4542)">
            <path d="M10.6663 14V12.6667C10.6663 11.9594 10.3854 11.2811 9.88529 10.781C9.3852 10.281 8.70692 10 7.99967 10H3.99967C3.29243 10 2.61415 10.281 2.11406 10.781C1.61396 11.2811 1.33301 11.9594 1.33301 12.6667V14" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5.99967 7.33333C7.47243 7.33333 8.66634 6.13943 8.66634 4.66667C8.66634 3.19391 7.47243 2 5.99967 2C4.52692 2 3.33301 3.19391 3.33301 4.66667C3.33301 6.13943 4.52692 7.33333 5.99967 7.33333Z" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14.666 13.9993V12.6659C14.6656 12.0751 14.4689 11.5011 14.1069 11.0341C13.7449 10.5672 13.2381 10.2336 12.666 10.0859" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.666 2.08594C11.2396 2.2328 11.748 2.5664 12.1111 3.03414C12.4742 3.50188 12.6712 4.07716 12.6712 4.66927C12.6712 5.26138 12.4742 5.83666 12.1111 6.3044C11.748 6.77214 11.2396 7.10574 10.666 7.2526" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
            <clipPath id="clip0_1653_4542">
            <rect width="16" height="16" fill="white"/>
            </clipPath>
            </defs>
            </svg>
            `,
      value: "1 Cr+",
      label: "Happy Customers",
      sub: "Across India",
    },
    {
      icon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.6663 4.66797L8.99967 10.3346L5.66634 7.0013L1.33301 11.3346" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.667 4.66797H14.667V8.66797" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            `,
      value: "50L+",
      label: "Exchanges Done &amp; counting",
      sub: "",
    },
    {
      icon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.3337 8.66566C13.3337 11.999 11.0003 13.6657 8.22699 14.6323C8.08177 14.6815 7.92402 14.6792 7.78033 14.6257C5.00033 13.6657 2.66699 11.999 2.66699 8.66566V3.999C2.66699 3.82219 2.73723 3.65262 2.86225 3.52759C2.98728 3.40257 3.15685 3.33233 3.33366 3.33233C4.66699 3.33233 6.33366 2.53233 7.49366 1.519C7.6349 1.39833 7.81456 1.33203 8.00033 1.33203C8.18609 1.33203 8.36576 1.39833 8.50699 1.519C9.67366 2.539 11.3337 3.33233 12.667 3.33233C12.8438 3.33233 13.0134 3.40257 13.1384 3.52759C13.2634 3.65262 13.3337 3.82219 13.3337 3.999V8.66566Z" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            `,
      value: "100%",
      label: "Secure Process Bank-grade safety",
      sub: "",
    },
    {
      icon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.3337 8.66566C13.3337 11.999 11.0003 13.6657 8.22699 14.6323C8.08177 14.6815 7.92402 14.6792 7.78033 14.6257C5.00033 13.6657 2.66699 11.999 2.66699 8.66566V3.999C2.66699 3.82219 2.73723 3.65262 2.86225 3.52759C2.98728 3.40257 3.15685 3.33233 3.33366 3.33233C4.66699 3.33233 6.33366 2.53233 7.49366 1.519C7.6349 1.39833 7.81456 1.33203 8.00033 1.33203C8.18609 1.33203 8.36576 1.39833 8.50699 1.519C9.67366 2.539 11.3337 3.33233 12.667 3.33233C12.8438 3.33233 13.0134 3.40257 13.1384 3.52759C13.2634 3.65262 13.3337 3.82219 13.3337 3.999V8.66566Z" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            `,
      value: "100%",
      label: "Secure Process Bank-grade safety",
      sub: "",
    },
  ],
  wheelerTypes: ["motorcycle", "scooter", "moped"],
  vehicleTabs: ["sell", "scrap"],
  benefits: [
    {
      style: "filled",
      icon: "&#128337;",
      tag: "Speed",
      title: "30-Second Valuation",
      desc: "Get an accurate market price for your bike in under 30 seconds — powered by AI.",
      pill: "30 sec Instant result",
    },
    {
      style: "outline",
      icon: "&#128196;",
      tag: "Legal",
      title: "Free RC Transfer",
      desc: "We handle all paperwork — RC transfer, NOC, insurance clearance — at zero cost.",
      pill: "₹0 Document cost",
    },
    {
      style: "outline",
      icon: "&#9889;",
      tag: "Payment",
      title: "Instant Payment",
      desc: "Money credited to your bank account within hours of vehicle pickup.",
      pill: "2hrs Avg transfer time",
    },
    {
      style: "outline",
      icon: "&#128205;",
      tag: "Network",
      title: "5,000+ Dealers",
      desc: "India's largest authorised Hero dealer network at your doorstep.",
      pill: "5,000+ Dealer partners",
    },
    {
      style: "outline",
      icon: "&#127968;",
      tag: "Doorstep",
      title: "Doorstep Service",
      desc: "Our experts come to you — no need to visit a showroom or dealership.",
      pill: "Free Pickup",
    },
  ],
  vehicles: [
    {
      category: "scooters",
      badge: "Newly Launched",
      img: "https://placehold.co/400x260/E9EAED/555?text=XOOM+125",
      name: "XOOM 125",
      specs: [
        "124.66cc Engine Displacement",
        "Max Power 9.8 BHP @7250 Rpm",
        "5 L Fuel Tank",
        "Digital Speedometer With TBT Navigation",
      ],
      price: "₹82,194",
      priceSub: "Ex - Showroom Price, DELHI",
    },
    {
      category: "scooters",
      badge: "Newly Launched",
      img: "https://placehold.co/400x260/E9EAED/555?text=Destiny+Prime",
      name: "Destiny Prime",
      specs: [
        "124.66cc Engine Displacement",
        "Max Power 9.8 BHP @7250 Rpm",
        "5 L Fuel Tank",
        "Digital Speedometer With TBT Navigation",
      ],
      price: "₹82,194",
      priceSub: "Ex - Showroom Price, DELHI",
    },
    {
      category: "motorcycles",
      badge: "Newly Launched",
      img: "https://placehold.co/400x260/E9EAED/555?text=X+-+Plus",
      name: "X - Plus",
      specs: [
        "124.66cc Engine Displacement",
        "Max Power 9.8 BHP @7250 Rpm",
        "5 L Fuel Tank",
        "Digital Speedometer With TBT Navigation",
      ],
      price: "₹82,194",
      priceSub: "Ex - Showroom Price, DELHI",
    },
    {
      category: "motorcycles",
      badge: "Newly Launched",
      img: "https://placehold.co/400x260/E9EAED/555?text=Splendor",
      name: "Splendor",
      specs: [
        "124.66cc Engine Displacement",
        "Max Power 9.8 BHP @7250 Rpm",
        "5 L Fuel Tank",
        "Digital Speedometer With TBT Navigation",
      ],
      price: "₹82,194",
      priceSub: "Ex - Showroom Price, DELHI",
    },
  ],
  blogs: [
    {
      size: "tall",
      badge: "Gear",
      img: "https://placehold.co/700x1000/33363d/ffffff?text=Goodlife+Benefits",
      title: "Goodlife Benefits",
      desc: "Earn rewards with every ride. Make the most of your Hero Goodlife Membership.",
    },
    {
      size: "wide",
      badge: "Finance",
      img: "https://placehold.co/900x520/4a4132/ffffff?text=Finance+Your+Dreams",
      title: "Finance Your Dreams",
      desc: "Easy financing for your perfect ride. Low EMIs, quick approval.",
    },
    {
      size: "small",
      badge: "Gear",
      img: "https://placehold.co/440x420/1c1c1c/ffffff?text=Ride+in+Style",
      title: "Ride in Style",
      desc: "Premium helmets & accessories built for the road ahead.",
    },
    {
      size: "small",
      badge: "Adventure",
      img: "https://placehold.co/440x420/2b2f38/ffffff?text=Hit+The+Open+Road",
      title: "Hit The Open Road",
      desc: "Curated routes and riding stories from across India.",
    },
    {
      size: "tall",
      badge: "Exchange",
      img: "https://placehold.co/700x1000/3d4a37/ffffff?text=Exchange+Your+Bike",
      title: "Exchange Your Bike",
      desc: "Upgrade your ride. Get the best value for your old vehicle.",
    },
  ],
  testimonials: [
    {
      avatar: "https://placehold.co/96x96/9c8267/fff?text=PN",
      name: "Priya Nair",
      vehicle: "Honda Activa 5G · 2021",
      rating: 5,
    },
    {
      avatar: "https://placehold.co/96x96/9c8267/fff?text=PN",
      name: "Priya Nair",
      vehicle: "Honda Activa 5G · 2021",
      rating: 5,
    },
    {
      avatar: "https://placehold.co/96x96/9c8267/fff?text=PN",
      name: "Priya Nair",
      vehicle: "Honda Activa 5G · 2021",
      rating: 5,
    },
    {
      avatar: "https://placehold.co/96x96/9c8267/fff?text=PN",
      name: "Priya Nair",
      vehicle: "Honda Activa 5G · 2021",
      rating: 5,
    },
  ],
  faqs: [
    {
      question: "How is the resale value of my two-wheeler calculated?",
      answer:
        "We use 3 factors: vehicle age & registration year, brand & model demand, and your city's market conditions. Estimate is real-time.",
      open: true,
    },
    {
      question: "What documents do I need to sell my bike?",
      answer:
        "You'll need the RC (Registration Certificate), a valid ID proof, insurance papers, and PUC certificate to complete the sale.",
      open: false,
    },
    {
      question: "What is the difference between selling and scrapping?",
      answer:
        "Selling transfers ownership of a working vehicle to a new buyer, while scrapping permanently deregisters a vehicle that's no longer roadworthy.",
      open: false,
    },
    {
      question: "How long does the process take from start to payment?",
      answer:
        "Most exchanges are completed within 2-3 hours from valuation to payment, once documentation is verified.",
      open: false,
    },
    {
      question: "Is there any charge for this service?",
      answer:
        "No, our valuation, RC transfer, and pickup services are completely free of charge with zero hidden costs.",
      open: false,
    },
  ],
  footerQuickLinks: [
    { label: "Sell", href: "#" },
    { label: "Exchange", href: "#" },
    { label: "Scrap", href: "#" },
    { label: "Blogs", href: "#" },
    { label: "Sitemap", href: "#" },
  ],
  footerContactLinks: [
    { label: "Contact Us", href: "#" },
    { label: "Corporate Enquiry", href: "#" },
  ],
  footerBottomLinks: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Use", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "Sitemap", href: "#" },
  ],
};

/* =========================================================
     Hero Carousel Controller
  ========================================================= */
class HeroCarouselController {
  constructor(config) {
    this.images = config.heroImages;
    this.currentIndex = 0;
    this.allImagesArray = document.querySelectorAll(".hero_carousel_img > img");
    this.dots = document.querySelectorAll("#heroDots .hero-media__dot");
    this.autoPlayInterval = 4000;
    this.timer = null;
  }

  init() {
    this.allImagesArray.forEach((img, idx) => {
      img.style.zIndex = idx;
    });
    this.dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        const index = parseInt(dot.dataset.index, 10);
        this.goTo(index);
      });
    });
    this.startAutoPlay();
  }

  goTo(index) {
    this.currentIndex = index;

    this.allImagesArray.forEach((img) => {
      const imgDataSet = parseInt(img.dataset.img_idx, 10);

      if (imgDataSet === this.currentIndex) {
        img.classList.add("active");
      } else {
        img.classList.remove("active");
      }
    });

    this.dots.forEach((d) => d.classList.remove("is-active"));
    this.dots[index]?.classList.add("is-active");
  }

  startAutoPlay() {
    this.timer = setInterval(() => {
      const next = (this.currentIndex + 1) % this.dots.length;
      this.goTo(next);
    }, this.autoPlayInterval);
  }
}

/* =========================================================
     Vehicle Tabs Controller (Sell / Scrap)
  ========================================================= */
class VehicleTabsController {
  constructor() {
    this.container = document.getElementById("vehicleTabs");
    this.buttons = this.container.querySelectorAll(".vehicle-tabs__btn");
  }

  init() {
    this.buttons.forEach((btn) => {
      btn.addEventListener("click", () => this.setActive(btn));
    });
  }

  setActive(activeBtn) {
    this.buttons.forEach((btn) => btn.classList.remove("is-active"));
    activeBtn.classList.add("is-active");
  }
}

/* =========================================================
     Wheeler Type Selector Controller
  ========================================================= */
class WheelerTypeController {
  constructor() {
    this.container = document.getElementById("wheelerTypeGroup");
    this.options = this.container.querySelectorAll(".wheeler-type-option");
  }

  init() {
    this.options.forEach((opt) => {
      opt.addEventListener("click", () => this.setActive(opt));
    });
  }

  setActive(activeOpt) {
    this.options.forEach((opt) => opt.classList.remove("is-active"));
    activeOpt.classList.add("is-active");
  }
}

/* =========================================================
     Benefits Carousel Controller
  ========================================================= */
class BenefitsCarouselController {
  constructor(config) {
    this.benefits = config.benefits;
    this.track = document.getElementById("benefitsTrack");
    this.trackWrap = document.getElementById("benefitsTrackWrap");
    this.prevBtn = document.getElementById("benefitsPrevBtn");
    this.nextBtn = document.getElementById("benefitsNextBtn");
    this.dotsContainer = document.getElementById("benefitsDots");
    this.scrollStep = 320;
  }

  init() {
    this.render();
    this.renderDots();
    this.prevBtn.addEventListener("click", () => this.scroll(-1));
    this.nextBtn.addEventListener("click", () => this.scroll(1));
    this.trackWrap.addEventListener("scroll", () => this.syncDots());
    this.updateNavState();
  }

  render() {
    const html = this.benefits
      .map(
        (item) => `
        <article class="benefit-card benefit-card--${item.style}">
          <div class="benefit-card__icon">${item.icon}</div>
          <p class="benefit-card__tag">${item.tag}</p>
          <h3 class="benefit-card__title">${item.title}</h3>
          <p class="benefit-card__desc">${item.desc}</p>
          <span class="benefit-card__pill">${item.pill}</span>
        </article>
      `,
      )
      .join("");
    this.track.innerHTML = html;
  }

  renderDots() {
    const html = this.benefits
      .map(
        (_, i) => `
        <span class="benefits-dots__dot ${i === 0 ? "is-active" : ""}" data-index="${i}"></span>
      `,
      )
      .join("");
    this.dotsContainer.innerHTML = html;
  }

  scroll(direction) {
    this.trackWrap.scrollBy({
      left: direction * this.scrollStep,
      behavior: "smooth",
    });
  }

  syncDots() {
    const cards = this.track.querySelectorAll(".benefit-card");
    const wrapCenter = this.trackWrap.scrollLeft + this.trackWrap.clientWidth / 2;
    let closestIndex = 0;
    let closestDist = Infinity;
    cards.forEach((card, i) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const dist = Math.abs(cardCenter - wrapCenter);
      if (dist < closestDist) {
        closestDist = dist;
        closestIndex = i;
      }
    });
    const dots = this.dotsContainer.querySelectorAll(".benefits-dots__dot");
    dots.forEach((d) => d.classList.remove("is-active"));
    dots[closestIndex]?.classList.add("is-active");
    this.updateNavState();
  }

  updateNavState() {
    const maxScroll = this.trackWrap.scrollWidth - this.trackWrap.clientWidth;
    this.prevBtn.disabled = this.trackWrap.scrollLeft <= 4;
    this.nextBtn.disabled = this.trackWrap.scrollLeft >= maxScroll - 4;
  }
}

/* =========================================================
     Vehicles Section Controller (filter tabs + grid + mobile carousel)
  ========================================================= */
class VehiclesController {
  constructor(config) {
    this.allVehicles = config.vehicles;
    this.activeFilter = "all";
    this.mobileIndex = 0;

    this.filterTabsContainer = document.getElementById("vehicleFilterTabs");
    this.filterButtons = this.filterTabsContainer.querySelectorAll(
      ".vehicle-tabs-filter__item",
    );
    this.gridEl = document.getElementById("vehiclesGrid");
    this.mobileCardWrap = document.getElementById("vehicleMobileCardWrap");
    this.mobilePrevBtn = document.getElementById("vehiclePrevBtn");
    this.mobileNextBtn = document.getElementById("vehicleNextBtn");
  }

  init() {
    this.filterButtons.forEach((btn) => {
      btn.addEventListener("click", () => this.setFilter(btn));
    });
    this.mobilePrevBtn.addEventListener("click", () => this.stepMobile(-1));
    this.mobileNextBtn.addEventListener("click", () => this.stepMobile(1));
    this.render();
  }

  setFilter(activeBtn) {
    this.filterButtons.forEach((btn) => btn.classList.remove("is-active"));
    activeBtn.classList.add("is-active");
    this.activeFilter = activeBtn.dataset.filter;
    this.mobileIndex = 0;
    this.render();
  }

  getFilteredVehicles() {
    if (this.activeFilter === "all") return this.allVehicles;
    return this.allVehicles.filter((v) => v.category === this.activeFilter);
  }

  render() {
    const vehicles = this.getFilteredVehicles();
    this.renderGrid(vehicles);
    this.renderMobileCard(vehicles);
  }

  cardMarkup(vehicle) {
    const specsHtml = vehicle.specs.map((s) => `<li>${s}</li>`).join("");
    return `
        <div class="vehicle-card__badge-row">
          <span class="vehicle-card__badge">${vehicle.badge}</span>
        </div>
        <img class="vehicle-card__img" src="${vehicle.img}" alt="${vehicle.name}">
        <h3 class="vehicle-card__name">${vehicle.name}</h3>
        <ul class="vehicle-card__specs">${specsHtml}</ul>
        <p class="vehicle-card__price">${vehicle.price}</p>
        <p class="vehicle-card__price-sub">${vehicle.priceSub}</p>
        <button class="vehicle-card__btn" type="button">Exchange Now</button>
      `;
  }

  renderGrid(vehicles) {
    this.gridEl.innerHTML = vehicles
      .map(
        (v) => `
        <article class="vehicle-card">${this.cardMarkup(v)}</article>
      `,
      )
      .join("");
  }

  renderMobileCard(vehicles) {
    if (!vehicles.length) {
      this.mobileCardWrap.innerHTML = "";
      return;
    }
    if (this.mobileIndex >= vehicles.length) this.mobileIndex = 0;
    const vehicle = vehicles[this.mobileIndex];
    this.mobileCardWrap.innerHTML = `
        <article class="vehicle-card">${this.cardMarkup(vehicle)}</article>
      `;
  }

  stepMobile(direction) {
    const vehicles = this.getFilteredVehicles();
    if (!vehicles.length) return;
    this.mobileIndex = (this.mobileIndex + direction + vehicles.length) % vehicles.length;
    this.renderMobileCard(vehicles);
  }
}

/* =========================================================
     Blogs Section Controller (asymmetric grid + mobile carousel)
  ========================================================= */
class BlogsController {
  constructor(config) {
    this.blogs = config.blogs;
    this.currentIndex = 0;

    this.gridEl = document.getElementById("blogsGrid");
    this.mobileCarouselEl = document.getElementById("blogsMobileCarousel");
    this.dotsEl = document.getElementById("blogsDots");
  }

  init() {
    this.renderGrid();
    this.renderMobile();
  }

  cardMarkup(blog, sizeClass) {
    return `
        <article class="blog-card ${sizeClass}" style="background-image:url('${blog.img}')">
          <div class="blog-card__content">
            <span class="blog-card__badge">${blog.badge}</span>
            <h3 class="blog-card__title">${blog.title}</h3>
            <p class="blog-card__desc">${blog.desc}</p>
          </div>
        </article>
      `;
  }

  renderGrid() {
    // Layout: col1 = tall card (index 0), col2 = wide card (1) + 2 small cards (2,3), col3 = tall card (4)
    const [first, wide, small1, small2, last] = this.blogs;
    this.gridEl.innerHTML = `
        <div class="blogs-grid__col">
          ${this.cardMarkup(first, "blog-card--tall")}
        </div>
        <div class="blogs-grid__col">
          ${this.cardMarkup(wide, "blog-card--wide")}
          <div class="blogs-grid__col--small">
            ${this.cardMarkup(small1, "blog-card--small")}
            ${this.cardMarkup(small2, "blog-card--small")}
          </div>
        </div>
        <div class="blogs-grid__col">
          ${this.cardMarkup(last, "blog-card--tall")}
        </div>
      `;
  }

  renderMobile() {
    this.mobileCarouselEl.innerHTML = this.blogs
      .map((b) => this.cardMarkup(b, "blog-card--wide"))
      .join("");
    this.mobileCarouselEl.style.display = "grid";
    this.mobileCarouselEl.style.gap = "16px";

    // show only current index card on mobile
    const cards = this.mobileCarouselEl.querySelectorAll(".blog-card");
    cards.forEach((card, i) => {
      card.style.display = i === this.currentIndex ? "flex" : "none";
    });

    this.renderDots();
  }

  renderDots() {
    this.dotsEl.innerHTML = this.blogs
      .map(
        (_, i) => `
        <span class="blogs-dots__dot ${i === this.currentIndex ? "is-active" : ""}" data-index="${i}"></span>
      `,
      )
      .join("");

    this.dotsEl.querySelectorAll(".blogs-dots__dot").forEach((dot) => {
      dot.addEventListener("click", () => {
        this.currentIndex = parseInt(dot.dataset.index, 10);
        this.renderMobile();
      });
    });
  }
}

/* =========================================================
     Testimonials Marquee Controller
  ========================================================= */
class TestimonialsController {
  constructor(config) {
    this.testimonials = config.testimonials;
    this.track = document.getElementById("testimonialsTrack");
  }

  init() {
    this.render();
  }

  cardMarkup(t) {
    const stars = "&#9733;".repeat(t.rating);
    return `
        <div class="testimonial-card">
          <img class="testimonial-card__avatar" src="${t.avatar}" alt="${t.name}">
          <div>
            <p class="testimonial-card__name">${t.name}</p>
            <p class="testimonial-card__vehicle">${t.vehicle}</p>
          </div>
          <span class="testimonial-card__stars">${stars}</span>
        </div>
      `;
  }

  render() {
    // duplicate list for seamless infinite scroll loop
    const doubled = [...this.testimonials, ...this.testimonials];
    this.track.innerHTML = doubled.map((t) => this.cardMarkup(t)).join("");
  }
}

/* =========================================================
     FAQ Accordion Controller
  ========================================================= */
class FaqController {
  constructor(config) {
    this.faqs = config.faqs.map((f) => ({ ...f }));
    this.container = document.getElementById("faqAccordion");
  }

  init() {
    this.render();
  }

  render() {
    this.container.innerHTML = this.faqs
      .map(
        (faq, i) => `
        <div class="faq-item ${faq.open ? "is-open" : ""}" data-index="${i}">
          <button class="faq-item__header" type="button">
            <p class="faq-item__question">${faq.question}</p>
            <span class="faq-item__icon">&#9662;</span>
          </button>
          <div class="faq-item__body">
            <p class="faq-item__answer">${faq.answer}</p>
          </div>
        </div>
      `,
      )
      .join("");

    this.container.querySelectorAll(".faq-item__header").forEach((header) => {
      header.addEventListener("click", () => {
        const item = header.closest(".faq-item");
        const index = parseInt(item.dataset.index, 10);
        this.toggle(index);
      });
    });
  }

  toggle(index) {
    this.faqs = this.faqs.map((faq, i) => ({
      ...faq,
      open: i === index ? !faq.open : false,
    }));
    this.render();
  }
}

/* =========================================================
     Footer Controller
  ========================================================= */
class FooterController {
  constructor(config) {
    this.quickLinks = config.footerQuickLinks;
    this.contactLinks = config.footerContactLinks;
    this.bottomLinks = config.footerBottomLinks;

    this.quickLinksEl = document.getElementById("footerQuickLinks");
    this.contactLinksEl = document.getElementById("footerContactLinks");
    this.bottomLinksEl = document.getElementById("footerBottomLinks");
  }

  init() {
    this.quickLinksEl.innerHTML = this.linkListMarkup(this.quickLinks);
    this.contactLinksEl.innerHTML = this.linkListMarkup(this.contactLinks);
    this.bottomLinksEl.innerHTML = this.bottomLinks
      .map((l) => `<a href="${l.href}">${l.label}</a>`)
      .join("");
  }

  linkListMarkup(links) {
    return links.map((l) => `<li><a href="${l.href}">${l.label}</a></li>`).join("");
  }
}

/* =========================================================
     Stats Bar Renderer
  ========================================================= */
class StatsBarController {
  constructor(config) {
    this.stats = config.stats;
    this.container = document.getElementById("statsBar");
  }

  init() {
    this.render();
  }

  render() {
    const html = this.stats
      .map(
        (stat) => `
        <div class="stat-card">
          <div class="stat-card__icon">${stat.icon}</div>
          <div>
            <p class="stat-card__value">${stat.value}</p>
            <p class="stat-card__label">${stat.label}</p>
            ${stat.sub ? `<p class="stat-card__sub">${stat.sub}</p>` : ""}
          </div>
        </div>
      `,
      )
      .join("");
    this.container.innerHTML = html;
  }
}

/* =========================================================
     App Init Class - entry point
  ========================================================= */
class App {
  constructor(config) {
    this.config = config;
  }

  init() {
    new HeroCarouselController(this.config).init();
    new VehicleTabsController().init();
    new WheelerTypeController().init();
    new StatsBarController(this.config).init();
    new BenefitsCarouselController(this.config).init();
    new VehiclesController(this.config).init();
    new BlogsController(this.config).init();
    new TestimonialsController(this.config).init();
    new FaqController(this.config).init();
    new FooterController(this.config).init();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new App(CONFIG).init();
});
