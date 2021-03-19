import gsap from "gsap";

let tl = gsap.timeline();

export const openMenu = (width) => {
  window.scrollTo(0, 0);
  tl.to("nav", 0, {
    css: { display: "block" },
  })
    .to("body", 0, { css: { overflow: "hidden" } })
    .to(".content-section", 1, {
      y: width <= 654 ? "70vh" : window.innerHeight / 2,
      ease: "expo.inOut",
    })
    .to(".menu-top", 1, {
      delay: -1,
      transform: "translateY(0)",
    })
    .to(".menu-bot", 1.2, {
      delay: -1.6,
      transform: "translateY(0)",
    });
};

export const closeMenu = () => {
  tl.to(".content-section", 1, {
    y: 0,
    ease: "expo.inOut",
  })
    .to("body", 0, { css: { overflow: "auto" } })
    .to("nav", 0, {
      css: { display: "none" },
    })
    .to(".menu-top", 1, {
      delay: -1,
      transform: "rotate(315deg) translateY(-4px) ",
      ease: "linear",
    })
    .to(".menu-bot", 1.2, {
      delay: -1.6,
      transform: "rotate(225deg) translateY(4px) ",
      ease: "linear",
    });
};
