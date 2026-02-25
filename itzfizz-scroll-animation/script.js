gsap.registerPlugin(ScrollTrigger);

/* HEADLINE LETTER ANIMATION */
gsap.to(".headline span", {
  opacity: 1,
  y: 0,
  duration: 0.8,
  stagger: 0.05,
  ease: "power3.out"
});

/* STATS ANIMATION */
gsap.to(".stat", {
  opacity: 1,
  y: 0,
  duration: 0.8,
  delay: 0.5,
  stagger: 0.2,
  ease: "power3.out"
});

/* IMAGE SCROLL PARALLAX */
gsap.to(".hero-image", {
  y: -150,
  scale: 1.05,
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});