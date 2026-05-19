const revealItems = Array.from(document.querySelectorAll(".reveal"));
const reduceMotion =
  "matchMedia" in window && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const showItem = (item) => {
  item.classList.add("is-visible");
};

if (reduceMotion) {
  revealItems.forEach(showItem);
} else if ("IntersectionObserver" in window && revealItems.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          showItem(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -14% 0px", threshold: 0.08 }
  );

  revealItems.forEach((item, index) => {
    item.style.transitionDelay = `${Math.min(index * 70, 280)}ms`;
    observer.observe(item);
  });
} else {
  revealItems.forEach(showItem);
}
