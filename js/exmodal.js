const sortBtn = document.querySelector('.sort-btn');
const sortContainer = document.querySelector('.sortItems-container');
const sortItems = sortContainer.querySelectorAll('li');

sortBtn.addEventListener('click', function(event) {
    event.preventDefault();
    sortContainer.classList.toggle('hidden');
});

document.addEventListener('click', function(event) {
    if (!sortContainer.contains(event.target) && !sortBtn.contains(event.target)) {
        sortContainer.classList.add('hidden');
    }
});


//toggle icon
const toggleIcons = document.querySelectorAll(".toggleIcon");

toggleIcons.forEach((toggleIcon) => {
  toggleIcon.addEventListener("click", () => {
    if (toggleIcon.classList.contains("after:left-0")) {
      toggleIcon.classList.remove("after:left-0");
      toggleIcon.classList.add("after:right-0");
    } else {
      toggleIcon.classList.remove("after:right-0");
      toggleIcon.classList.add("after:left-0");
    }
  });
});


const tagsModal = document.querySelector("#tagsModal");
const tagsContent = document.querySelector("#tagsContent");
const studioModal = document.querySelector("#studioModal");
const studioContent = document.querySelector("#studioContent");
const excluderModal = document.querySelector("#excluderModal");
const excluderContent = document.querySelector("#excluderContent");
const tabsBackdrops = document.querySelector("#tabsBackdrops");
const cancelBtns = document.querySelectorAll(".cancelBtn");

tagsModal.addEventListener("click", ()=>{
    tagsContent.classList.toggle("hidden");
    tabsBackdrops.classList.toggle("hidden");
});

studioModal.addEventListener("click", ()=>{
    studioContent.classList.toggle("hidden");
    tabsBackdrops.classList.toggle("hidden");
});

excluderModal.addEventListener("click", ()=>{
    excluderContent.classList.toggle("hidden");
    tabsBackdrops.classList.toggle("hidden");
});

tabsBackdrops.addEventListener("click", ()=>{
    tagsContent.classList.add("hidden");
    studioContent.classList.add("hidden");
    excluderContent.classList.add("hidden");
    tabsBackdrops.classList.add("hidden");
})

cancelBtns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        tagsContent.classList.add("hidden");
        studioContent.classList.add("hidden");
        excluderContent.classList.add("hidden");
        tabsBackdrops.classList.add("hidden");
    })
})
