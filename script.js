// ===============================
// HEADER SHADOW EFFECT
// ===============================

window.addEventListener("scroll", () => {

  const header = document.querySelector("header");

  if (window.scrollY > 50) {

    header.style.background = "rgba(255,255,255,0.95)";
    header.style.backdropFilter = "blur(12px)";
    header.style.boxShadow = "0 10px 30px rgba(0,0,0,0.08)";

  } else {

    header.style.background = "rgba(255,255,255,0.9)";
    header.style.boxShadow = "none";

  }

});


// ===============================
// SCROLL REVEAL ANIMATION
// ===============================

const revealElements = document.querySelectorAll(
  ".program-card, .testimonial-card, .about-image, .about-text, .contact-card, .hours-card"
);

const revealObserver = new IntersectionObserver(

  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add("show");

      }

    });

  },

  {
    threshold: 0.15
  }

);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});


// ===============================
// HERO CONTENT ANIMATION
// ===============================

window.addEventListener("load", () => {

  const heroContent = document.querySelector(".hero-content");

  if (heroContent) {

    heroContent.style.opacity = "0";
    heroContent.style.transform = "translateY(50px)";

    setTimeout(() => {

      heroContent.style.transition = "1.4s ease";
      heroContent.style.opacity = "1";
      heroContent.style.transform = "translateY(0px)";

    }, 300);

  }

});


// ===============================
// PARALLAX HERO EFFECT
// ===============================

window.addEventListener("scroll", () => {

  const hero = document.querySelector(".hero");

  if (hero) {

    let scrollPosition = window.pageYOffset;

    hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;

  }

});


// ===============================
// FLOATING BUBBLE MOVEMENT
// ===============================

const bubbles = document.querySelectorAll(".bubble");

bubbles.forEach((bubble, index) => {

  bubble.style.animationDelay = `${index * 2}s`;

});


// ===============================
// CARD HOVER TILT EFFECT
// ===============================

const cards = document.querySelectorAll(".program-card");

cards.forEach((card) => {

  card.addEventListener("mousemove", (e) => {

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / 25) * -1;
    const rotateY = (x - centerX) / 25;

    card.style.transform =
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;

  });

  card.addEventListener("mouseleave", () => {

    card.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)";

  });

});


// ===============================
// SMOOTH BUTTON HOVER GLOW
// ===============================

const buttons = document.querySelectorAll(
  ".primary-btn, .secondary-btn"
);

buttons.forEach((button) => {

  button.addEventListener("mouseenter", () => {

    button.style.boxShadow =
      "0 10px 25px rgba(76,175,80,0.35)";

  });

  button.addEventListener("mouseleave", () => {

    button.style.boxShadow = "none";

  });

});


// ===============================
// ACTIVE NAVIGATION LINK
// ===============================

const currentPage = window.location.pathname.split("/").pop();

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {

  const linkPage = link.getAttribute("href");

  if (linkPage === currentPage) {

    link.classList.add("active");

  }

});


// ===============================
// SMOOTH PAGE TRANSITION EFFECT
// ===============================

document.body.style.opacity = "0";

window.addEventListener("load", () => {

  document.body.style.transition = "opacity 0.8s ease";
  document.body.style.opacity = "1";

});


// ===============================
// MOBILE NAVBAR ANIMATION SUPPORT
// ===============================

const nav = document.querySelector("nav");

window.addEventListener("resize", () => {

  if (window.innerWidth > 700) {

    nav.style.opacity = "1";

  }

});


// ===============================
// PREMIUM SCROLL EXPERIENCE
// ===============================

window.addEventListener("scroll", () => {

  const scrollTop = window.scrollY;

  document.documentElement.style.setProperty(
    "--scroll",
    scrollTop
  );

});
