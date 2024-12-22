const mobileSearch = document.querySelector("#mobileSearch");
const trasnformSearch = document.querySelector("#searchSection");
const searchInput = document.querySelector("#searchInput");
const menuIcon = document.querySelector("#menuIcon");

mobileSearch.addEventListener("click", ()=> {
    trasnformSearch.classList.toggle('positioning');
    trasnformSearch.classList.toggle("translate-y-[-200%]");
    searchInput.focus();
})