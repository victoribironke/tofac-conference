/**
 * TOFAC 2026 Conference Website - Interactive JavaScript
 * Theme: Identities in Nigeria
 * Handles countdown timer, scroll animations, navigation, and UI interactions
 */

document.addEventListener("DOMContentLoaded", function () {
  // Initialize Lucide icons
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }

  // Initialize all components
  initNavigation();
  initCountdown();
  initScrollAnimations();
  initSmoothScroll();
  initNewsletterForm();
  initStatCounters();
});

/**
 * Navigation - Mobile menu toggle and scroll behavior
 */
function initNavigation() {
  const navbar = document.getElementById("navbar");
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");

  // Mobile menu toggle
  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      navMenu.classList.toggle("active");

      // Update icon
      const icon = navToggle.querySelector("i");
      if (icon) {
        if (navMenu.classList.contains("active")) {
          icon.setAttribute("data-lucide", "x");
        } else {
          icon.setAttribute("data-lucide", "menu");
        }
        lucide.createIcons();
      }
    });

    // Close menu when clicking a link
    const navLinks = navMenu.querySelectorAll("a");
    navLinks.forEach((link) => {
      link.addEventListener("click", function () {
        navMenu.classList.remove("active");
        const icon = navToggle.querySelector("i");
        if (icon) {
          icon.setAttribute("data-lucide", "menu");
          lucide.createIcons();
        }
      });
    });
  }

  // Navbar scroll behavior
  if (navbar) {
    let lastScroll = 0;

    window.addEventListener("scroll", function () {
      const currentScroll = window.pageYOffset;

      if (currentScroll > 100) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }

      lastScroll = currentScroll;
    });
  }
}

/**
 * Countdown Timer - Counts down to conference date
 * TOFAC 2026: July 7, 2026
 */
function initCountdown() {
  const countdown = document.getElementById("countdown");
  if (!countdown) return;

  // Conference date: July 7, 2026, 9:00 AM WAT (West Africa Time = UTC+1)
  const conferenceDate = new Date("2026-07-07T09:00:00+01:00").getTime();

  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = conferenceDate - now;

    if (distance < 0) {
      // Conference has started
      daysEl.textContent = "00";
      hoursEl.textContent = "00";
      minutesEl.textContent = "00";
      secondsEl.textContent = "00";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.textContent = String(days).padStart(2, "0");
    hoursEl.textContent = String(hours).padStart(2, "0");
    minutesEl.textContent = String(minutes).padStart(2, "0");
    secondsEl.textContent = String(seconds).padStart(2, "0");
  }

  // Initial update
  updateCountdown();

  // Update every second
  setInterval(updateCountdown, 1000);
}

/**
 * Scroll Animations - Fade in sections on scroll
 */
function initScrollAnimations() {
  const sections = document.querySelectorAll(".fade-in-section");

  if (!sections.length) return;

  // Check if user prefers reduced motion
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReducedMotion) {
    // If user prefers reduced motion, show all sections immediately
    sections.forEach((section) => {
      section.classList.add("is-visible");
    });
    return;
  }

  const observerOptions = {
    root: null,
    rootMargin: "0px 0px -100px 0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  }, observerOptions);

  sections.forEach((section) => {
    observer.observe(section);
  });
}

/**
 * Smooth Scroll - For anchor links
 */
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      // Skip if it's just "#"
      if (href === "#") return;

      const target = document.querySelector(href);

      if (target) {
        e.preventDefault();

        const navbarHeight = 72;
        const targetPosition =
          target.getBoundingClientRect().top +
          window.pageYOffset -
          navbarHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });
}

/**
 * Newsletter Form - Handle submission
 */
function initNewsletterForm() {
  const form = document.getElementById("newsletter-form");

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const emailInput = form.querySelector('input[type="email"]');
    const submitButton = form.querySelector('button[type="submit"]');

    if (!emailInput || !submitButton) return;

    const email = emailInput.value.trim();

    if (!email) {
      alert("Please enter your email address.");
      return;
    }

    // Disable button and show loading state
    const originalText = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.textContent = "Subscribing...";

    // Simulate API call (replace with actual endpoint)
    setTimeout(() => {
      // Success state
      submitButton.textContent = "Subscribed!";
      submitButton.style.background = "#10B981";
      emailInput.value = "";

      // Reset after 3 seconds
      setTimeout(() => {
        submitButton.disabled = false;
        submitButton.textContent = originalText;
        submitButton.style.background = "";
      }, 3000);
    }, 1500);
  });
}

/**
 * Stat Counters - Animate numbers on scroll
 */
function initStatCounters() {
  const statNumbers = document.querySelectorAll(".stat-number[data-target]");

  if (!statNumbers.length) return;

  // Check if user prefers reduced motion
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  const animateCounter = (element) => {
    const target = parseInt(element.getAttribute("data-target"), 10);
    const duration = 2000; // 2 seconds
    const frameDuration = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameDuration);

    if (prefersReducedMotion) {
      element.textContent = target;
      return;
    }

    let frame = 0;
    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.round(easeOut * target);

      element.textContent = currentValue;

      if (frame === totalFrames) {
        clearInterval(counter);
        element.textContent = target;
      }
    }, frameDuration);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  statNumbers.forEach((stat) => {
    observer.observe(stat);
  });
}

/**
 * Active Navigation Link - Highlight current section
 */
function initActiveNavLinks() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  if (!sections.length || !navLinks.length) return;

  const observerOptions = {
    root: null,
    rootMargin: "-50% 0px -50% 0px",
    threshold: 0,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");

        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach((section) => {
    observer.observe(section);
  });
}

// Initialize active nav links after other initializations
document.addEventListener("DOMContentLoaded", function () {
  // Small delay to ensure other scripts are loaded
  setTimeout(initActiveNavLinks, 100);
});

/**
 * Subtheme cards hover effect with stagger animation index
 */
document.addEventListener("DOMContentLoaded", function () {
  const subthemeCards = document.querySelectorAll(".subtheme-card");
  subthemeCards.forEach((card, index) => {
    card.style.setProperty("--index", index);
  });
});
