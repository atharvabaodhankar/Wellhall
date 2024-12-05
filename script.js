const lenis = new Lenis({
    lerp : 0.05
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

gsap.from(".welcome-img img", {
  duration: 5,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut",
  x: function(i) {
    return Math.sin(Math.random() * 360 * (Math.PI / 180)) * 10;
  },
  y: function(i) {
    return -Math.cos(Math.random() * 360 * (Math.PI / 180)) * 30;
  },
})
