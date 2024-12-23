//scrool to top//
const scrollToTopButton = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  const totalHeight = document.documentElement.scrollHeight - window.innerHeight;

  if (scrollPosition > totalHeight * 0.25) {
    scrollToTopButton.classList.remove("opacity-0"); 
    scrollToTopButton.classList.add("opacity-100");
  } else {
    scrollToTopButton.classList.remove("opacity-100");
    scrollToTopButton.classList.add("opacity-0");
  }
});

scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
