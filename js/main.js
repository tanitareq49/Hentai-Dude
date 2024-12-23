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
