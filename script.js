/* =========================================================
     CONFIG
  ========================================================= */
const CONFIG = {
  heroImages: ["/assets/Default.png", "/assets/Variant2.png", "/assets/Variant3.png"],
  wheelerTypes: ["motorcycle", "scooter", "moped"],
  vehicleTabs: ["sell", "scrap"],
  benefits: [
    {
      style: "filled",
      icon: '<i class="bi bi-clock"></i>',
      tag: "Speed",
      title: "30-Second Valuation",
      desc: "Get an accurate market price for your bike in under 30 seconds — powered by AI.",
      pill: "30 sec Instant result",
    },
    {
      style: "outline",
      icon: '<i class="bi bi-file-earmark-text"></i>',
      tag: "Legal",
      title: "Free RC Transfer",
      desc: "We handle all paperwork — RC transfer, NOC, insurance clearance — at zero cost.",
      pill: "₹0 Document cost",
    },
    {
      style: "outline",
      icon: '<i class="bi bi-lightning-fill"></i>',
      tag: "Payment",
      title: "Instant Payment",
      desc: "Money credited to your bank account within hours of vehicle pickup.",
      pill: "2hrs Avg transfer time",
    },
    {
      style: "outline",
      icon: '<i class="bi bi-geo-alt-fill"></i>',
      tag: "Network",
      title: "5,000+ Dealers",
      desc: "India's largest authorised Hero dealer network at your doorstep.",
      pill: "5,000+ Dealer partners",
    },
    {
      style: "outline",
      icon: '<i class="bi bi-house-door-fill"></i>',
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
      img: "/assets/sale_bike.png",
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
      img: "/assets/sale_bike.png",
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
      img: "/assets/sale_bike.png",
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
      img: "/assets/sale_bike.png",
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
      img: "/assets/blogs/blog_1.png",
      title: "Goodlife Benefits",
      desc: "Earn rewards with every ride. Make the most of your Hero Goodlife Membership.",
    },
    {
      size: "wide",
      badge: "Finance",
      img: "/assets/blogs/blog_2.png",
      title: "Finance Your Dreams",
      desc: "Easy financing for your perfect ride. Low EMIs, quick approval.",
    },
    {
      size: "small",
      badge: "Gear",
      img: "/assets/blogs/blog_3.png",
      title: "Ride in Style",
      desc: "Premium helmets & accessories built for the road ahead.",
    },
    {
      size: "small",
      badge: "Adventure",
      img: "/assets/blogs/blog_4.png",
      title: "Hit The Open Road",
      desc: "Curated routes and riding stories from across India.",
    },
    {
      size: "tall",
      badge: "Exchange",
      img: "/assets/blogs/blog_5.png",
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
        <div class="d-flex gap-2 align-items-end">
          <div class="benefit-card__icon">${item.icon}</div>
          <p class="benefit-card__tag">${item.tag}</p>
        </div>
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
    // this.renderMobile();
  }

  cardMarkup(blog, sizeClass) {
    return `
        <article class="blog-card ${sizeClass}" style="background-image:url('${blog.img}')">
        <span class="blog-card__badge">${blog.badge}</span>
          <div class="blog-card__content">
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
