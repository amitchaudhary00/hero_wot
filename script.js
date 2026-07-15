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
};

class YearSelectInput {
  constructor({
    selector = "#year_select",
    startYear = new Date().getFullYear(),
    endYear = 1950,
    placeholder = "Select Year",
  } = {}) {
    this.selector = selector;
    this.startYear = startYear;
    this.endYear = endYear;
    this.placeholder = placeholder;
  }

  init() {
    this.selectInput = document.querySelector(this.selector);

    if (!this.selectInput) return;

    this._generateYear();
  }

  _generateYear() {
    // Clear existing options
    this.selectInput.innerHTML = "";

    // Placeholder
    const placeholderOption = document.createElement("option");
    placeholderOption.value = "";
    placeholderOption.textContent = this.placeholder;
    placeholderOption.selected = true;
    placeholderOption.disabled = true;

    this.selectInput.appendChild(placeholderOption);

    // Generate years
    for (let year = this.startYear; year >= this.endYear; year--) {
      const option = document.createElement("option");
      option.value = year;
      option.textContent = year;
      this.selectInput.appendChild(option);
    }
  }
}

//  ======================================================
// FORM SERVICE
// =======================================================
class FormService {
  /**
   * @param {Object} config
   * @param {string} config.formKey - localStorage key for this form's data
   * @param {string} config.rootSelector - root container selector
   * @param {number} config.totalSteps - total number of steps
   */
  constructor(config) {
    this.formKey = config.formKey || "vehicleValuationForm";
    this.root = document.querySelector(config.rootSelector);
    this.totalSteps = config.totalSteps || 2;

    this.currentStep = 1;
    this.flow = "sell"; // "sell" | "scrap"
    this.data = {};

    // DOM refs
    this.tabsEl = this.root.querySelector("#vehicleTabs");
    this.continueBtn = this.root.querySelector("#continueBtn");
    this.backBtn = this.root.querySelector("#backBtn");
    this.stepLabel = this.root.querySelector("#stepLabel");
    this.wheelerGroup = this.root.querySelector("#wheelerTypeGroup");
    const yearSelect = new YearSelectInput();
    yearSelect.init();
    this._bindEvents();
  }

  init() {
    this._restoreFromStorage();
    this._restoreFromQueryParams();
    this._renderStep();
    this._renderTabs();
    this._populateFieldsFromData();
  }

  // ---------- EVENT BINDING ----------
  _bindEvents() {
    // Tabs (sell/scrap) - only active on step 1
    this.tabsEl.querySelectorAll("[data-tab]").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (this.currentStep !== 1) return; // locked after step 1
        this.flow = btn.dataset.tab;
        this._renderTabs();
        this._persist();
        this._syncQueryParams();
      });
    });

    // Wheeler type selection (step 1)
    if (this.wheelerGroup) {
      this.wheelerGroup.querySelectorAll("[data-type]").forEach((opt) => {
        opt.addEventListener("click", () => {
          this.wheelerGroup
            .querySelectorAll("[data-type]")
            .forEach((el) => el.classList.remove("is-active"));
          opt.classList.add("is-active");
          this.data.vehicleType = opt.dataset.type;
          this._persist();
        });
      });
    }

    // Generic input/select capture for current step
    this.root.addEventListener("change", (e) => {
      const field = e.target;
      if (field.name) {
        this.data[field.name] = field.value;
        this._persist();
      }
    });

    // Continue button
    this.continueBtn.addEventListener("click", () => {
      if (!this._validateCurrentStep()) return;
      // Step 2 -> open offcanvas for either flow now (not just sell)
      if (this.currentStep === 2) {
        this.vcOffcanvas.open();
        return;
      }

      if (this.currentStep < this.totalSteps) {
        this.currentStep++;
        this._renderStep();
        this._syncQueryParams();
      } else {
        this._submit();
      }
    });

    // Back button
    this.backBtn.addEventListener("click", () => {
      if (this.currentStep > 1) {
        this.currentStep--;
        this._renderStep();
        this._syncQueryParams();
      }
    });
  }

  // ---------- STEP RENDERING (toggle only, no HTML generation) ----------
  _renderStep() {
    // Show/hide step containers
    this.root.querySelectorAll("[data-step]").forEach((stepEl) => {
      const stepNum = parseInt(stepEl.dataset.step, 10);
      stepEl.classList.toggle("is-active", stepNum === this.currentStep);
    });

    // Step indicator bars
    this.root.querySelectorAll("[data-step-indicator]").forEach((bar) => {
      const stepNum = parseInt(bar.dataset.stepIndicator, 10);
      bar.classList.toggle("is-active", stepNum <= this.currentStep);
    });

    if (this.stepLabel) {
      this.stepLabel.textContent = `Step ${this.currentStep} of ${this.totalSteps}`;
    }

    // Back button visibility
    this.backBtn.style.display = this.currentStep > 1 ? "inline-flex" : "none";

    // Continue button label on last step
    this.continueBtn.innerHTML =
      this.currentStep === this.totalSteps
        ? `Submit <span><i class="bi bi-chevron-right"></i></span>`
        : `Continue <span><i class="bi bi-chevron-right"></i></span>`;

    // Lock tabs after step 1
    this._renderTabs();
  }

  _renderTabs() {
    const isLocked = this.currentStep > 1;
    this.tabsEl.querySelectorAll("[data-tab]").forEach((btn) => {
      btn.classList.toggle("is-active", btn.dataset.tab === this.flow);
      btn.disabled = isLocked;
      btn.classList.toggle("is-disabled", isLocked);
    });
  }

  // ---------- VALIDATION ----------
  _validateCurrentStep() {
    const stepEl = this.root.querySelector(`[data-step="${this.currentStep}"]`);
    let valid = true;

    stepEl.querySelectorAll("[data-required]").forEach((field) => {
      const isGroup = field.hasAttribute("data-field"); // e.g. wheelerTypeGroup
      if (isGroup) {
        const hasActive = field.querySelector(".is-active");
        this._toggleFieldError(field, !hasActive);
        if (!hasActive) valid = false;
      } else {
        const empty = !field.value;
        this._toggleFieldError(field, empty);
        if (empty) valid = false;
      }
    });

    return valid;
  }

  _toggleFieldError(field, hasError) {
    field.classList.toggle("has-error", hasError);
  }

  // ---------- DATA COLLECTION ----------
  _populateFieldsFromData() {
    Object.entries(this.data).forEach(([key, value]) => {
      const field = this.root.querySelector(`[name="${key}"]`);
      if (field) field.value = value;
    });

    if (this.data.vehicleType && this.wheelerGroup) {
      this.wheelerGroup.querySelectorAll("[data-type]").forEach((opt) => {
        opt.classList.toggle("is-active", opt.dataset.type === this.data.vehicleType);
      });
    }
  }

  // ---------- PERSISTENCE ----------
  _persist() {
    const payload = {
      currentStep: this.currentStep,
      flow: this.flow,
      data: this.data,
    };
    localStorage.setItem(this.formKey, JSON.stringify(payload));
  }

  _restoreFromStorage() {
    const raw = localStorage.getItem(this.formKey);
    if (!raw) return;
    try {
      const parsed = JSON.parse(raw);
      this.currentStep = parsed.currentStep || 1;
      this.flow = parsed.flow || "sell";
      this.data = parsed.data || {};
    } catch (e) {
      console.warn("Failed to parse stored form data", e);
    }
  }

  _clearStorage() {
    localStorage.removeItem(this.formKey);
  }

  // ---------- QUERY PARAMS ----------
  _syncQueryParams() {
    const params = new URLSearchParams(window.location.search);
    params.set("flow", this.flow);
    params.set("step", this.currentStep);
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.pushState({}, "", newUrl);
  }

  _restoreFromQueryParams() {
    const params = new URLSearchParams(window.location.search);
    const step = parseInt(params.get("step"), 10);
    const flow = params.get("flow");

    if (flow === "sell" || flow === "scrap") this.flow = flow;
    if (step && step >= 1 && step <= this.totalSteps) this.currentStep = step;
  }

  // ---------- SUBMIT ----------
  _submit() {
    console.log("Final form data:", { flow: this.flow, ...this.data });

    // TODO: replace with actual API call
    // await api.submitValuation({ flow: this.flow, ...this.data });

    this._clearStorage();

    // Clean up query params after successful submit
    window.history.pushState({}, "", window.location.pathname);

    // Redirect or show success state
    // window.location.href = "/valuation-result";
  }
}

// ---------- INIT ----------
document.addEventListener("DOMContentLoaded", () => {
  const valuationForm = new FormService({
    formKey: "vehicleValuationForm",
    rootSelector: "#valuationCard",
    totalSteps: 2,
  });
  valuationForm.vcOffcanvas = new VehicleConditionOffcanvas(valuationForm);
  valuationForm.init();
  // valuationForm.vcOffcanvas.open(); // ---0>
});

// ============================ VEHICLE MODAL =============================
class VehicleConditionOffcanvas {
  constructor(formService) {
    this.form = formService;
    this.el = document.getElementById("vehicleConditionOffcanvas");
    this.bsOffcanvas = new bootstrap.Offcanvas(this.el, {
      backdrop: true,
      scroll: false,
    });

    // sub-flow: 'questions' (condition or legal, based on this.form.flow) -> 'auth'
    this.subStep = "questions";

    this.proceedBtn = document.getElementById("vcProceedBtn");
    this.backBtn = document.getElementById("vcBackBtn");

    this._bindEvents();
  }

  open() {
    this.subStep = "questions"; // remove this with questions ---0>
    this._renderSubStep();
    this.bsOffcanvas.show();
  }

  close() {
    this.bsOffcanvas.hide();
  }

  _questionSetKey() {
    return this.form.flow === "sell" ? "condition" : "legal";
  }

  _renderSubStep() {
    const setKeyMap = {
      questions: this._questionSetKey(),
      auth: "auth",
      result: "result",
      dealer: "dealer",
      thankyou: "thankyou",
    };
    const activeKey = setKeyMap[this.subStep];

    this.el.querySelectorAll("[data-vc-set]").forEach((setEl) => {
      setEl.classList.toggle("is-active", setEl.dataset.vcSet === activeKey);
    });

    const footer = this.el.querySelector(".vc-offcanvas__footer");
    const bar = document.getElementById("selectedVehicleBar");

    if (this.subStep === "thankyou") {
      footer.style.display = "none";
      bar.style.display = "none";
      return; // no back/proceed logic needed on this screen
    }

    footer.style.display = "flex";
    this.backBtn.style.display = this.subStep !== "questions" ? "inline-flex" : "none";

    const labelMap = {
      questions: "Proceed to Next",
      auth: "Next",
      result: "Proceed to Next",
      dealer: "Proceed to Next",
    };
    this.proceedBtn.textContent = labelMap[this.subStep];

    if (this.subStep === "dealer" && this.form.data.newVehicleInterest) {
      bar.style.display = "flex";
      this._populateSelectedVehicleBar();
    } else {
      bar.style.display = "none";
    }
  }

  _saveNewVehicleInterest() {
    const selected = this.el.querySelector('.vc-model-row input[type="radio"]:checked');
    if (selected) {
      this.form.data.newVehicleInterest = selected.value;
      this.form._persist();
    }
  }

  _populateSelectedVehicleBar() {
    // Pull label/price from the previously selected radio in the result step
    const selectedRow = this.el
      .querySelector(`.vc-model-row input[value="${this.form.data.newVehicleInterest}"]`)
      ?.closest(".vc-model-row");

    if (selectedRow) {
      document.getElementById("selectedVehicleName").textContent =
        selectedRow.querySelector(".vc-model-row__name").textContent;
      document.getElementById("selectedVehiclePrice").textContent =
        selectedRow.querySelector(".vc-model-row__price").textContent;
    }
  }

  _bindEvents() {
    // Toggle option selection (condition/legal sets)
    this.el.querySelectorAll(".vc-toggle-option").forEach((opt) => {
      opt.addEventListener("click", () => {
        const group = opt.closest(".vc-toggle-group");
        group
          .querySelectorAll(".vc-toggle-option")
          .forEach((o) => o.classList.remove("is-active"));
        opt.classList.add("is-active");

        const questionKey = opt.closest("[data-question]").dataset.question;
        this.form.data[`vc_${questionKey}`] = opt.dataset.value;
        this.form._persist();
      });
    });

    // Auth field capture
    this.el
      .querySelectorAll(
        '[data-vc-set="auth"] input[type="text"], [data-vc-set="auth"] input[type="tel"]',
      )
      .forEach((input) => {
        input.addEventListener("input", () => {
          this.form.data[input.name] = input.value;
          this.form._persist();
        });
      });

    // Checkbox capture
    const termsCheckbox = document.getElementById("authTerms");
    termsCheckbox.addEventListener("change", () => {
      this.form.data.termsAccepted = termsCheckbox.checked;
      this.form._persist();
    });

    // OTP buttons (placeholder — wire to real API later)
    document.getElementById("sendOtpWhatsapp").addEventListener("click", () => {
      console.log("Send OTP via WhatsApp to", this.form.data.mobileNumber);
      // TODO: call OTP API
    });
    document.getElementById("sendOtpSms").addEventListener("click", (e) => {
      e.preventDefault();
      console.log("Send OTP via SMS to", this.form.data.mobileNumber);
      // TODO: call OTP API
    });

    // Proceed / Next button
    this.proceedBtn.addEventListener("click", () => {
      if (this.subStep === "questions") {
        if (!this._validateQuestionSet()) return;
        this.subStep = "auth";
        this._renderSubStep();
        return;
      }

      if (this.subStep === "auth") {
        if (!this._validateAuthStep()) return;
        this.subStep = "result";
        this._renderSubStep();
        this._fetchValuation();
        return;
      }

      if (this.subStep === "result") {
        this._saveNewVehicleInterest();
        this.subStep = this.form.data.newVehicleInterest ? "dealer" : "thankyou";
        this._renderSubStep();
        return;
      }

      if (this.subStep === "dealer") {
        this._saveDealerSelection();
        this.subStep = "thankyou";
        this._renderSubStep();
        return;
      }
    });

    // Back button
    this.backBtn.addEventListener("click", () => {
      const order = ["questions", "auth", "result", "dealer"];
      const idx = order.indexOf(this.subStep);
      if (idx > 0) {
        this.subStep = order[idx - 1];
        this._renderSubStep();
      }
    });

    this.el.querySelectorAll('.vc-dealer-card input[type="radio"]').forEach((radio) => {
      radio.addEventListener("change", () => {
        this.el
          .querySelectorAll(".vc-dealer-card")
          .forEach((card) => card.classList.remove("is-active"));
        radio.closest(".vc-dealer-card").classList.add("is-active");
      });
    });

    this.el.querySelectorAll('.vc-model-row input[type="radio"]').forEach((radio) => {
      radio.addEventListener("change", () => {
        this.el
          .querySelectorAll(".vc-model-row")
          .forEach((row) => row.classList.remove("is-active"));
        radio.closest(".vc-model-row").classList.add("is-active");
        this.form.data.newVehicleInterest = radio.value;
        this.form._persist();
      });
    });
    // Edit selected vehicle
    document.getElementById("editSelectedVehicle").addEventListener("click", () => {
      this.subStep = "result";
      this._renderSubStep();
    });

    // Star rating
    this.el.querySelectorAll(".vc-star").forEach((star) => {
      star.addEventListener("click", () => {
        const value = parseInt(star.dataset.value, 10);
        this.form.data.rating = value;
        this.form._persist();

        this.el.querySelectorAll(".vc-star").forEach((s) => {
          s.classList.toggle("is-filled", parseInt(s.dataset.value, 10) <= value);
        });
      });
    });

    // Template select capture
    document.getElementById("templateSelect").addEventListener("change", (e) => {
      this.form.data.selectedTemplate = e.target.value;
      this.form._persist();
    });

    // Submit feedback — this is the actual final submission of the whole form
    document.getElementById("submitFeedbackBtn").addEventListener("click", () => {
      this.form._submit(); // finalizes, clears localStorage
      this.close();
    });

    // Copy referral link
    document.getElementById("copyReferralBtn").addEventListener("click", () => {
      const input = document.getElementById("referralLink");
      navigator.clipboard.writeText(input.value).then(() => {
        const btn = document.getElementById("copyReferralBtn");
        const original = btn.textContent;
        btn.textContent = "Copied!";
        setTimeout(() => (btn.textContent = original), 1500);
      });
    });

    // Share buttons (basic share URLs — adjust as needed)
    document.getElementById("shareWhatsapp").addEventListener("click", (e) => {
      e.preventDefault();
      const url = encodeURIComponent(document.getElementById("referralLink").value);
      window.open(`https://wa.me/?text=${url}`, "_blank");
    });
    document.getElementById("shareFacebook").addEventListener("click", (e) => {
      e.preventDefault();
      const url = encodeURIComponent(document.getElementById("referralLink").value);
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, "_blank");
    });
    document.getElementById("shareTwitter").addEventListener("click", (e) => {
      e.preventDefault();
      const url = encodeURIComponent(document.getElementById("referralLink").value);
      window.open(`https://twitter.com/intent/tweet?url=${url}`, "_blank");
    });

    this.el.addEventListener("hidden.bs.offcanvas", () => {
      // stays on Step 2, answers preserved in this.form.data
    });
  }

  _saveDealerSelection() {
    const selected = this.el.querySelector('.vc-dealer-card input[type="radio"]:checked');
    if (selected) {
      this.form.data.preferredDealer = selected.value;
      this.form._persist();
    }
  }

  _finish() {
    this.close();
    this.form.currentStep++;
    this.form._renderStep();
    this.form._syncQueryParams();
  }

  _validateQuestionSet() {
    const activeSet = this.el.querySelector(".vc-question-set.is-active");
    let valid = true;
    activeSet.querySelectorAll(".vc-toggle-group").forEach((group) => {
      if (!group.querySelector(".is-active")) valid = false;
    });
    return valid;
  }

  _validateAuthStep() {
    let valid = true;

    const fullName = document.getElementById("authFullName");
    const mobile = document.getElementById("authMobile");
    const terms = document.getElementById("authTerms");

    if (!fullName.value.trim()) {
      fullName.classList.add("has-error");
      valid = false;
    } else {
      fullName.classList.remove("has-error");
    }

    if (!/^\d{10}$/.test(mobile.value.trim())) {
      mobile.classList.add("has-error");
      valid = false;
    } else {
      mobile.classList.remove("has-error");
    }

    if (!terms.checked) {
      valid = false;
      // optionally highlight the terms box
    }

    return valid;
  }
}

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
    this.renderMobile();
    this.startAutoPlay();
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

    // show only current index card on mobile
    const cards = this.mobileCarouselEl.querySelectorAll(".blog-card");
    cards.forEach((card, i) => {
      card.style.display = i === this.currentIndex ? "flex" : "none";
    });

    this.renderDots();
  }

  startAutoPlay() {
    this.timer = setInterval(() => {
      const next =
        (this.currentIndex + 1) % this.dotsEl.querySelectorAll(".blogs-dots__dot").length;
      this.currentIndex = next;
      this.renderMobile();
    }, 3000);
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
    // new TestimonialsController(this.config).init();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new App(CONFIG).init();
});
