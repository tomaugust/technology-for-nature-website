const revealItems = document.querySelectorAll(".reveal");
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
    }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach(showItem);
}
