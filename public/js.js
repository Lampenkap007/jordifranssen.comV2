gsap.from(".text", { duration: 1, y: "100px", ease: "power4" });
gsap.from(".title", { duration: 1, y: "100px", ease: "power4", delay: 0.3 });
gsap.from(".bar", { duration: 1, y: "100px", ease: "power4", delay: 0.4 });

gsap.from(".text", { duration: 1, opacity: 0 });
gsap.from(".title", { duration: 1, opacity: 0, delay: 0.3 });
gsap.from(".bar", { duration: 1, opacity: 0, delay: 0.4 });
