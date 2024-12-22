const mobileSearch = document.querySelector("#mobileSearch");
const trasnformSearch = document.querySelector("#searchSection");
const searchInput = document.querySelector("#searchInput");
const menuIcon = document.querySelector("#menuIcon");
const mobileLeft = document.querySelector("#mobileLeft");
const menuIconActive = document.querySelector("#menuIconActive");

// Toggle search section visibility when mobileSearch is clicked
mobileSearch.addEventListener("click", () => {
    trasnformSearch.classList.toggle('positioning');
    trasnformSearch.classList.toggle("translate-y-[-200%]");
    searchInput.focus();
    mobileSearch.classList.toggle("search-active");
});

// Toggle mobile menu visibility when menuIcon is clicked
menuIcon.addEventListener("click", () => {
    mobileLeft.classList.toggle("translate-x-[-200%]");
});

// Toggle mobile menu visibility when menuIconActive is clicked
menuIconActive.addEventListener("click", () => {
    mobileLeft.classList.toggle("translate-x-[-200%]");
});

// Close the mobile menu if the click is outside the menu or menu icon
document.addEventListener("click", (ev) => {
    if (!mobileLeft.contains(ev.target) && !menuIcon.contains(ev.target)) {
        mobileLeft.classList.add("translate-x-[-200%]");
    }

    // Close the search section if the click is outside of the search section or search button
    if (!trasnformSearch.contains(ev.target) && !mobileSearch.contains(ev.target)) {
        trasnformSearch.classList.add("translate-y-[-200%]"); // Or add any class to hide it
        mobileSearch.classList.remove("search-active");
    }
});


//scrool to top//
const scrollToTopButton = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  const totalHeight = document.documentElement.scrollHeight - window.innerHeight;

  if (scrollPosition > totalHeight * 0.25) {
    scrollToTopButton.classList.remove("hidden");
  } else {
    scrollToTopButton.classList.add("hidden");
  }
});

scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
  });
});
//end//