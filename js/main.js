const mobileSearch = document.querySelector("#mobileSearch");
const trasnformSearch = document.querySelector("#searchSection");
const searchInput = document.querySelector("#searchInput");
const menuIcon = document.querySelector("#menuIcon");
const mobileLeft = document.querySelector("#mobileLeft");
const menuIconActive = document.querySelector("#menuIconActive");

mobileSearch.addEventListener("click", () => {
    trasnformSearch.classList.toggle('positioning');
    trasnformSearch.classList.toggle("translate-y-[-200%]");
    searchInput.focus();
    mobileSearch.classList.toggle("search-active");
});

menuIcon.addEventListener("click", () => {
    mobileLeft.classList.toggle("translate-x-[-200%]");
});

menuIconActive.addEventListener("click", () => {
    mobileLeft.classList.toggle("translate-x-[-200%]");
});

document.addEventListener("click", (ev) => {
    if (!mobileLeft.contains(ev.target) && !menuIcon.contains(ev.target)) {
        mobileLeft.classList.add("translate-x-[-200%]");
    }

    if (!trasnformSearch.contains(ev.target) && !mobileSearch.contains(ev.target)) {
        trasnformSearch.classList.add("translate-y-[-200%]"); 
        mobileSearch.classList.remove("search-active");
    }
});


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
//end//