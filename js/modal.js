const loginBtn = document.querySelector("#login");
const signInBtn = document.querySelector("#sign-in");
const loginTwo = document.querySelector("#login2");
const signinTwo = document.querySelector("#sign-in2");

const backdrop = document.querySelector("#backdrop");
const modal = document.querySelector("#modal");
const closeFormBtn = document.querySelector("#closeFormBtn");

const tabs = document.querySelectorAll(".tab");
const tabOneBtn = document.querySelector("#tabOne");
const tabTwoBtn = document.querySelector("#tabTwo");
const tabThreeBtn = document.querySelector("#tabThree");

const tabOneContent = document.querySelector("#tabOneContent");
const tabTwoContent = document.querySelector("#tabTwoContent");
const tabThreeContent = document.querySelector("#tabThreeContent");

const heading = document.querySelector("#heading");

function showModal(contentIndex, headingText) {
    heading.innerHTML = headingText;
    modal.classList.remove("hidden");
    backdrop.classList.remove("hidden");

    tabs.forEach((tab, index) => {
        if (index === contentIndex) {
            tab.classList.add("active");
        } else {
            tab.classList.remove("active");
        }
    });

    // Show the corresponding content and hide the others
    if (contentIndex === 0) {
        tabOneContent.classList.remove("hidden");
        tabTwoContent.classList.add("hidden");
        tabThreeContent.classList.add("hidden");
    } else if (contentIndex === 1) {
        tabTwoContent.classList.remove("hidden");
        tabOneContent.classList.add("hidden");
        tabThreeContent.classList.add("hidden");
    } else if (contentIndex === 2) {
        tabThreeContent.classList.remove("hidden");
        tabOneContent.classList.add("hidden");
        tabTwoContent.classList.add("hidden");
    }
}

function hideModal() {
    backdrop.classList.add("hidden");
    modal.classList.add("hidden");
}

loginBtn.addEventListener("click", () => {
    showModal(0, "Sign In");
});

signInBtn.addEventListener("click", () => {
    showModal(1, "Register");
});

loginTwo.addEventListener("click", () => {
    showModal(0, "Sign In");
});

signinTwo.addEventListener("click", () => {
    showModal(1, "Register");
});

backdrop.addEventListener("click", () => {
    hideModal();
});

closeFormBtn.addEventListener("click", () => {
    hideModal();
});

tabThreeBtn.addEventListener("click", (ev) => {
    heading.innerHTML = "Forgot Password";  
    tabThreeContent.classList.remove("hidden"); 

    if (!tabOneContent.classList.contains("hidden")) {
        tabOneContent.classList.add("hidden");
    }

    if (!tabTwoContent.classList.contains("hidden")) {
        tabTwoContent.classList.add("hidden");
    }

    tabs.forEach((btn) => {
        btn.classList.remove('active');
    });
    tabThreeBtn.classList.add("active");

    ev.preventDefault();
});

// Adding event listener to all tab buttons
tabs.forEach((tab, index) => {
    tab.addEventListener("click", (event) => {
        // Prevent event propagation to avoid modal closing when clicking the tabs
        event.stopPropagation();  // This prevents the event from bubbling up to the backdrop

        if (index === 0) {
            showModal(0, "Sign In");
        }
        if (index === 1) {
            showModal(1, "Register");
        }
        if (index === 2) {
            showModal(2, "Forgot Password");
        }

        event.preventDefault();

        tabs.forEach((btn) => {
            if (btn !== tab) {
                btn.classList.remove('active');
            }
        });
        tab.classList.add("active");
    });
});
