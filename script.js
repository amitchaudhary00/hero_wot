/* =========================================================
     CONFIG
  ========================================================= */
const CONFIG = {
  heroImages: ["/assets/Default.png", "/assets/Variant2.png", "/assets/Variant3.png"],
  wheelerTypes: ["motorcycle", "scooter", "moped"],
  vehicleTabs: ["sell", "scrap"],
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
        : `Calculate Resale Value <span><i class="bi bi-chevron-right"></i></span>`;

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
      document.querySelector(".otp_group").style = "display:block;";
    });
    document.getElementById("sendOtpSms").addEventListener("click", (e) => {
      e.preventDefault();
      console.log("Send OTP via SMS to", this.form.data.mobileNumber);
      // TODO: call OTP API
      document.querySelector(".otp_group").style = "display:block;";
    });

    // Proceed / Next button
    this.proceedBtn.addEventListener("click", () => {
      if (this.subStep === "questions") {
        if (!this._validateQuestionSet()) return;
        this.subStep = "auth";
        this._renderSubStep();
        const canvas_title = document.querySelector(".vc-offcanvas__title");
        const canvas_subtitle = document.querySelector(".vc-offcanvas__subtitle");
        const canvas_header = document.querySelector(".vc-offcanvas__header");
        canvas_header.style = "display:block;";
        canvas_title.style = "visibility: visible;";
        canvas_title.innerHTML =
          'Authenticate to  <span class="text-red">unlock price</span>';
        canvas_subtitle.innerText = "Verify your details to get your vehicle estimate​";
        return;
      }

      if (this.subStep === "auth") {
        if (!this._validateAuthStep()) return;
        this.subStep = "result";
        this._renderSubStep();
        const canvas_title = document.querySelector(".vc-offcanvas__title");
        const canvas_subtitle = document.querySelector(".vc-offcanvas__subtitle");
        const canvas_card = document.querySelector(".vc-result-price-card");
        const canvas_additional_benefit_card =
          document.querySelector(".vc-benefits-block");
        canvas_title.innerHTML =
          'Here is the estimated Resale Value of your   <span class="text-red">two-wheeler</span>';
        canvas_subtitle.innerHTML = "";
        if (this.form.flow === "sell") return;
        canvas_card.innerHTML = `
                <p class="vc-result-vehicle-name" id="resultVehicleName">TVS XL BS6</p>
                <p class="vc-result-price">
                  <span class="vc-result-price__currency">₹</span><span id="resultPriceMin">10,000</span>
                </p>
              `;
        canvas_additional_benefit_card.style = "display:block;";
        return;
      }

      if (this.subStep === "result") {
        this._saveNewVehicleInterest();
        this.subStep = this.form.data.newVehicleInterest ? "dealer" : "thankyou";
        this._renderSubStep();
        const canvas_card = document.querySelector(".vc-next-card.vc-result-price-card");
        if (this.form.flow === "sell") return;
        canvas_card.innerHTML = `
                <p class="vc-result-vehicle-name" id="resultVehicleName">TVS XL BS6</p>
                <p class="vc-result-price">
                  <span class="vc-result-price__currency">₹</span><span id="resultPriceMin">10,000</span>
                </p>
              `;
        return;
      }

      if (this.subStep === "dealer") {
        this._saveDealerSelection();
        this.subStep = "thankyou";
        this._renderSubStep();
        const canvas_title = document.querySelector(".vc-offcanvas__title");
        const canvas_subtitle = document.querySelector(".vc-offcanvas__subtitle");
        const canvas_header = document.querySelector(".vc-offcanvas__header");
        canvas_title.style = "visibility: hidden;";
        canvas_header.style = "display:none;";
        canvas_subtitle.innerHTML = "";
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
  constructor() {
    this.track = document.getElementById("benefitsTrack");
    this.trackWrap = document.getElementById("benefitsTrackWrap");
    this.prevBtn = document.getElementById("benefitsPrevBtn");
    this.nextBtn = document.getElementById("benefitsNextBtn");
    this.dotsContainer = document.getElementById("benefitsDots");
    this.scrollStep = 320;

    // Read already-rendered cards/dots from static HTML
    this.cards = Array.from(this.track.querySelectorAll(".benefit-card"));
    this.dots = Array.from(this.dotsContainer.querySelectorAll(".benefits-dots__dot"));
  }

  init() {
    this.prevBtn.addEventListener("click", () => this.scroll(-1));
    this.nextBtn.addEventListener("click", () => this.scroll(1));
    this.trackWrap.addEventListener("scroll", () => this.syncDots());

    this.dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        const index = parseInt(dot.dataset.index, 10);
        this.cards[index]?.scrollIntoView({
          behavior: "smooth",
          inline: "start",
          block: "nearest",
        });
      });
    });

    this.updateNavState();
  }

  scroll(direction) {
    const step = this.scrollStep;
    this.animatedScrollBy(this.trackWrap, direction * step, 350);
  }

  animatedScrollBy(el, distance, duration = 350) {
    const start = el.scrollLeft;
    const startTime = performance.now();

    const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

    const step = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInOutQuad(progress);

      el.scrollLeft = start + distance * eased;

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }

  syncDots() {
    const wrapCenter = this.trackWrap.scrollLeft + this.trackWrap.clientWidth / 2;
    let closestIndex = 0;
    let closestDist = Infinity;

    this.cards.forEach((card, i) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const dist = Math.abs(cardCenter - wrapCenter);
      if (dist < closestDist) {
        closestDist = dist;
        closestIndex = i;
      }
    });

    this.dots.forEach((d) => d.classList.remove("is-active"));
    this.dots[closestIndex]?.classList.add("is-active");
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
  constructor() {
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

    // Desktop grid prev/next buttons
    this.desktopPrevBtn = document.getElementById("vehiclesDesktopPrevBtn");
    this.desktopNextBtn = document.getElementById("vehiclesDesktopNextBtn");

    // Read the already-rendered cards from the static HTML
    this.allCards = Array.from(this.gridEl.querySelectorAll(".vehicle-card"));
  }

  init() {
    this.filterButtons.forEach((btn) => {
      btn.addEventListener("click", () => this.setFilter(btn));
    });
    this.mobilePrevBtn.addEventListener("click", () => this.stepMobile(-1));
    this.mobileNextBtn.addEventListener("click", () => this.stepMobile(1));

    this.desktopPrevBtn.addEventListener("click", () => this.stepDesktop(-1));
    this.desktopNextBtn.addEventListener("click", () => this.stepDesktop(1));
    this.gridEl.addEventListener("scroll", () => this.updateDesktopNavState());

    this.render();
  }

  setFilter(activeBtn) {
    this.filterButtons.forEach((btn) => btn.classList.remove("is-active"));
    activeBtn.classList.add("is-active");
    this.activeFilter = activeBtn.dataset.filter;
    this.mobileIndex = 0;
    this.render();
  }

  getFilteredCards() {
    if (this.activeFilter === "all") return this.allCards;
    return this.allCards.filter((card) => card.dataset.category === this.activeFilter);
  }

  render() {
    const cards = this.getFilteredCards();
    this.renderGrid(cards);
    this.renderMobileCard(cards);
  }

  renderGrid(visibleCards) {
    // Show/hide existing DOM nodes instead of rebuilding markup
    this.allCards.forEach((card) => {
      card.hidden = !visibleCards.includes(card);
    });
    // reset scroll position and nav state whenever the filtered set changes
    this.gridEl.scrollTo({ left: 0 });
    this.updateDesktopNavState();
  }

  // ---------- DESKTOP GRID SCROLL ----------

  stepDesktop(direction) {
    const visibleCards = this.getFilteredCards();
    if (!visibleCards.length) return;

    const card = visibleCards[0];
    const cardWidth = card.getBoundingClientRect().width;
    const gap = this.getGridGap();
    const step = cardWidth + gap;

    this.animatedScrollBy(this.gridEl, direction * step, 350);
  }

  animatedScrollBy(el, distance, duration = 350) {
    const start = el.scrollLeft;
    const startTime = performance.now();

    const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

    const step = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInOutQuad(progress);

      el.scrollLeft = start + distance * eased;

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }

  getGridGap() {
    const styles = window.getComputedStyle(this.gridEl);
    // "column-gap" (or fallback "gap") is what your CSS `gap: 10px` maps to
    const gapValue = styles.columnGap || styles.gap || "0";
    return parseFloat(gapValue) || 0;
  }

  updateDesktopNavState() {
    const maxScroll = this.gridEl.scrollWidth - this.gridEl.clientWidth;
    this.desktopPrevBtn.disabled = this.gridEl.scrollLeft <= 4;
    this.desktopNextBtn.disabled = this.gridEl.scrollLeft >= maxScroll - 4;
  }

  // ---------- MOBILE CAROUSEL ----------

  renderMobileCard(visibleCards) {
    this.mobileCardWrap.innerHTML = "";
    if (!visibleCards.length) return;

    if (this.mobileIndex >= visibleCards.length) this.mobileIndex = 0;

    // Clone the real static card node instead of regenerating markup
    const original = visibleCards[this.mobileIndex];
    const clone = original.cloneNode(true);
    clone.hidden = false;
    this.mobileCardWrap.appendChild(clone);
  }

  stepMobile(direction) {
    const cards = this.getFilteredCards();
    if (!cards.length) return;
    this.mobileIndex = (this.mobileIndex + direction + cards.length) % cards.length;
    this.renderMobileCard(cards);
  }
}

/* =========================================================
     Blogs Section Controller (asymmetric grid + mobile carousel)
  ========================================================= */
class BlogsController {
  constructor() {
    this.currentIndex = 0;

    this.mobileCarouselEl = document.getElementById("blogsMobileCarousel");
    this.dotsEl = document.getElementById("blogsDots");

    // Read already-rendered cards/dots from static HTML
    this.cards = Array.from(this.mobileCarouselEl.querySelectorAll(".blog-card"));
    this.dots = Array.from(this.dotsEl.querySelectorAll(".blogs-dots__dot"));
  }

  init() {
    this.dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        this.currentIndex = parseInt(dot.dataset.index, 10);
        this.update();
      });
    });

    this.update();
    this.startAutoPlay();
  }

  update() {
    // Show only the active card
    this.cards.forEach((card, i) => {
      const isActive = i === this.currentIndex;
      card.style.transition = "transform 0.3s ease, opacity 0.3s ease";
      card.style.transform = isActive ? "translateX(0)" : "translateX(-50px)";
      card.style.opacity = isActive ? "1" : "0";
      card.style.pointerEvents = isActive ? "auto" : "none"; // prevent interacting with hidden cards
      card.style.position = "absolute"; // stack cards so hidden ones don't take up layout space
      card.style.top = "0";
      card.style.left = "0";
    });
    // Sync active dot
    this.dots.forEach((dot, i) => {
      dot.classList.toggle("is-active", i === this.currentIndex);
    });
  }

  startAutoPlay() {
    this.timer = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.cards.length;
      this.update();
    }, 3000);
  }

  stopAutoPlay() {
    clearInterval(this.timer);
  }
}

/* =========================================================
     Language select 
  ========================================================= */
class LanguageSelect {
  constructor({
    selectId = "languageSwitcher",
    triggerId = "openLanguageSwitcher",
    labelId = "langSwitcherLabel",
    dropdownId = "langDropdown",
  } = {}) {
    this.nativeSelect = document.getElementById(selectId);
    this.triggerBtn = document.getElementById(triggerId);
    this.label = document.getElementById(labelId);
    this.dropdown = document.getElementById(dropdownId);

    if (!this.nativeSelect || !this.triggerBtn || !this.label || !this.dropdown) {
      console.warn("LanguageSelect: one or more required elements not found");
      return;
    }

    // Bind so `this` is preserved when used as event listeners
    this._handleOutsideClick = this._handleOutsideClick.bind(this);

    this._bindEvents();
    this._buildDropdown();
    this._syncUI();
  }

  _bindEvents() {
    this.triggerBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      this.dropdown.hidden ? this._openDropdown() : this._closeDropdown();
    });

    // If something else changes the select programmatically (e.g. i18n init), stay in sync
    this.nativeSelect.addEventListener("change", () => this._syncUI());
  }

  _buildDropdown() {
    this.dropdown.innerHTML = "";
    Array.from(this.nativeSelect.options).forEach((option) => {
      const li = document.createElement("li");
      li.setAttribute("role", "option");
      li.dataset.value = option.value;
      li.setAttribute("aria-selected", option.selected ? "true" : "false");
      if (option.selected) li.classList.add("is-selected");

      li.innerHTML = `
        <span class="lang-dropdown__name">${option.textContent}</span>
        <span class="check"><i class="bi bi-check2"></i></span>
      `;

      li.addEventListener("click", () => this._selectLanguage(option.value));
      this.dropdown.appendChild(li);
    });
  }

  _selectLanguage(value) {
    this.nativeSelect.value = value;
    this.nativeSelect.dispatchEvent(new Event("change", { bubbles: true }));
    this._syncUI();
    this._closeDropdown();
  }

  _syncUI() {
    const selectedOption = this.nativeSelect.options[this.nativeSelect.selectedIndex];
    this.label.textContent = selectedOption.dataset.code;

    this.dropdown.querySelectorAll("li").forEach((li) => {
      const isSelected = li.dataset.value === this.nativeSelect.value;
      li.classList.toggle("is-selected", isSelected);
      li.setAttribute("aria-selected", isSelected ? "true" : "false");
    });
  }

  _openDropdown() {
    this.dropdown.hidden = false;
    this.triggerBtn.setAttribute("aria-expanded", "true");
    document.addEventListener("click", this._handleOutsideClick);
  }

  _closeDropdown() {
    this.dropdown.hidden = true;
    this.triggerBtn.setAttribute("aria-expanded", "false");
    document.removeEventListener("click", this._handleOutsideClick);
  }

  _handleOutsideClick(e) {
    if (!this.dropdown.contains(e.target) && !this.triggerBtn.contains(e.target)) {
      this._closeDropdown();
    }
  }
}

/* =========================================================
     OTP INPUT BOX
  ========================================================= */
class OTPInput {
  constructor() {
    this.init();
  }
  init() {
    const inputs = document.getElementById("otp_input_box");

    inputs.addEventListener("input", function (e) {
      const target = e.target;
      const val = target.value;

      if (isNaN(val)) {
        target.value = "";
        return;
      }

      if (val != "") {
        const next = target.nextElementSibling;
        if (next) {
          next.focus();
        }
      }
    });

    inputs.addEventListener("keyup", function (e) {
      const target = e.target;
      const key = e.key.toLowerCase();

      if (key == "backspace" || key == "delete") {
        target.value = "";
        const prev = target.previousElementSibling;
        if (prev) {
          prev.focus();
        }
        return;
      }
    });
  }
}

/* =========================================================
     Sticky button in mobile
  ========================================================= */
class StickyCtaController {
  constructor({
    heroSelector = "#hero_valuation_form",
    stickyButtonSelector = ".sticky-button",
  } = {}) {
    this.hero = document.querySelector(heroSelector);
    this.stickyButton = document.querySelector(stickyButtonSelector);

    if (!this.hero || !this.stickyButton) {
      console.warn("StickyCtaController: hero or sticky button element not found");
      return;
    }
  }

  init() {
    const observer = new IntersectionObserver(
      ([entry]) => {
        this.toggleButton(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
      },
    );

    observer.observe(this.hero);
  }

  toggleButton(shouldShow) {
    this.stickyButton.classList.toggle("is-visible", shouldShow);
  }
}

/* =========================================================
     VALUATION CARD GLOW
  ========================================================= */
class ValuationCardGlowController {
  constructor({
    targetId = "valuationCard",
    triggerSelectors = [".vehicle-card__btn", ".mobile-sticky-cta"],
  } = {}) {
    this.target = document.getElementById(targetId);
    this.triggerSelectors = triggerSelectors;
    this.glowDuration = 4500; // ms
    this.glowTimeoutId = null;
  }

  init() {
    if (!this.target) {
      console.warn(
        `ValuationCardGlowController: no element found with id "${this.target}"`,
      );
      return;
    }

    // Event delegation on document — covers all buttons, including
    // dynamically cloned ones (e.g. mobile carousel clones added after init)
    this.triggerSelectors.forEach((triggerSelector) => {
      document.addEventListener("click", (e) => {
        const trigger = e.target.closest(triggerSelector);
        if (!trigger) return;

        e.preventDefault();
        this.scrollAndGlow();
      });
    });
  }

  scrollAndGlow() {
    this.target.scrollIntoView({ behavior: "smooth", block: "start" });
    this.triggerGlow();
  }

  triggerGlow() {
    // Clear any glow already in progress so rapid re-clicks restart cleanly
    if (this.glowTimeoutId) {
      clearTimeout(this.glowTimeoutId);
      this.target.classList.remove("is-highlighted");
      void this.target.offsetWidth; // force reflow to restart the CSS animation
    }

    this.target.classList.add("is-highlighted");

    this.glowTimeoutId = setTimeout(() => {
      this.target.classList.remove("is-highlighted");
      this.glowTimeoutId = null;
    }, this.glowDuration);
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
    new LanguageSelect();
    new StickyCtaController().init();
    new ValuationCardGlowController().init();
    new OTPInput();
    const valuationForm = new FormService({
      formKey: "vehicleValuationForm",
      rootSelector: "#valuationCard",
      totalSteps: 2,
    });
    valuationForm.vcOffcanvas = new VehicleConditionOffcanvas(valuationForm);
    valuationForm.init();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new App(CONFIG).init();
});
