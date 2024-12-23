const tabContainer = document.querySelectorAll('.tab-container');
const tabBtns = document.querySelectorAll('.tab-btn li');
const lines = document.querySelectorAll(".line");

for (const btn of tabBtns) {
  btn.addEventListener('click', function (event) {
    event.preventDefault();

    tabBtns.forEach((btn) => {
      btn.classList.remove("active-two");
    });
    lines.forEach((line) => {
      line.classList.remove("active-two");
    });

    event.currentTarget.classList.add("active-two");

    const index = Array.from(tabBtns).indexOf(event.currentTarget);
    lines[index].classList.add("active-two");

    for (container of tabContainer) {
      container.classList.add("hidden");
    }

    const getId = event.currentTarget.getAttribute("data-tab");
    document.getElementById(getId).classList.remove("hidden");
    console.log(getId);
  });
}
