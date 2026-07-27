document.addEventListener("DOMContentLoaded", function () {
  /* Calculator tabs */
  var tabs = document.querySelectorAll(".calc-tab");
  var panes = document.querySelectorAll(".calc-pane");
  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      tabs.forEach(function (t) {
        t.classList.remove("active");
      });
      panes.forEach(function (p) {
        p.classList.remove("active");
      });
      tab.classList.add("active");
      document.getElementById("pane-" + tab.dataset.tab).classList.add("active");
    });
  });

  /* Read more toggle */
  var readMoreBtn = document.getElementById("readMoreBtn");
  if (readMoreBtn) {
    readMoreBtn.addEventListener("click", function () {
      var moreText = document.querySelector(".exchange-text");
      var expanded = !moreText.classList.contains("expend");
      expanded ? moreText.classList.add("expend") : moreText.classList.remove("expend");
      readMoreBtn.textContent = expanded ? "+ Read More" : "- Read Less";
    });
  }

  /* Scroll reveal */
  var revealEls = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("in-view");
    });
  }
});
