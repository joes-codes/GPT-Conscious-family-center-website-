// ======================================
// PREMIUM HEADER EFFECT
// ======================================

window.addEventListener("scroll", () => {

  const header = document.querySelector("header");

  if(window.scrollY > 50){

    header.style.background = "rgba(0,0,0,0.55)";
    header.style.backdropFilter = "blur(16px)";
    header.style.boxShadow = "0 10px 40px rgba(0,0,0,0.35)";

  } else {

    header.style.background = "rgba(0,0,0,0.25)";
    header.style.boxShadow = "none";

  }

});


// ======================================
// HERO ENTRANCE ANIMATION
// ======================================

window.addEventListener("load", () => {

  const heroContent = document.querySelector(".hero-content");

  if(heroContent){

    heroContent.style.opacity = "0";
    heroContent.style.transform = "translateY(60px)";

    setTimeout(() => {

      heroContent.style.transition = "1.5s ease";

      heroContent.style.opacity = "1";
      heroContent.style.transform = "translateY(0px)";

    }, 300);

  }

});


// ======================================
// SCROLL REVEAL
// ======================================

const revealItems = document.querySelectorAll(
  ".program-card, .contact-card, .testimonial-card, .about-image, .about-text"
);

const revealObserver = new IntersectionObserver(

  (entries) => {

    entries.forEach((entry) => {

      if(entry.isIntersecting){

        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0px)";

      }

    });

  },

  {
    threshold:0.15
  }

);

revealItems.forEach((item) => {

  item.style.opacity = "0";
  item.style.transform = "translateY(60px)";
  item.style.transition = "1s ease";

  revealObserver.observe(item);

});


// ======================================
// 3D CARD EFFECT
// ======================================

const cards = document.querySelectorAll(".program-card");

cards.forEach((card) => {

  card.addEventListener("mousemove", (e) => {

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / 18) * -1;
    const rotateY = (x - centerX) / 18;

    card.style.transform =
      `perspective(1000px)
       rotateX(${rotateX}deg)
       rotateY(${rotateY}deg)
       scale(1.03)`;

  });

  card.addEventListener("mouseleave", () => {

    card.style.transform =
      "perspective(1000px) rotateX(0) rotateY(0) scale(1)";

  });

});


// ======================================
// PARALLAX HERO
// ======================================

window.addEventListener("scroll", () => {

  const hero = document.querySelector(".hero");

  if(hero){

    let offset = window.pageYOffset;

    hero.style.backgroundPositionY = `${offset * 0.5}px`;

  }

});


// ======================================
// BUTTON GLOW EFFECT
// ======================================

const buttons = document.querySelectorAll(
  ".primary-btn, .secondary-btn"
);

buttons.forEach((button) => {

  button.addEventListener("mouseenter", () => {

    button.style.boxShadow =
      "0 15px 40px rgba(76,175,80,0.35)";

  });

  button.addEventListener("mouseleave", () => {

    button.style.boxShadow = "none";

  });

});


// ======================================
// PAGE FADE IN
// ======================================

document.body.style.opacity = "0";

window.addEventListener("load", () => {

  document.body.style.transition = "opacity 1s ease";
  document.body.style.opacity = "1";

});


// ======================================
// FLOATING BUBBLE RANDOM DELAYS
// ======================================

const bubbles = document.querySelectorAll(".bubble");

bubbles.forEach((bubble, index) => {

  bubble.style.animationDelay = `${index * 2}s`;

});
