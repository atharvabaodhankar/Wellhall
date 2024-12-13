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


var accoBoxs = document.querySelectorAll(".accommodations-box");
var cover = document.querySelector("#cover");

accoBoxs.forEach(box => {
  box.addEventListener("click", () => {
    cover.style.display = "flex";
    cover.querySelector(".cover-img img").src = box.querySelector(".accommodations-img img").src;

  })
})
cover.addEventListener("click", () => {
  cover.style.display = "none";
})


var familyTl = gsap.timeline({
  scrollTrigger: {
    trigger: "#family",
    start: "top top",
    end: window.innerWidth > 800 ? "+300% top" : "+300% top",
    scrub: 3,
    pin: true
  }
})

familyTl.to(".family", {
  xPercent: window.innerWidth > 800 ? -55 : -80,
  duration: 5,
  ease: "none"
})