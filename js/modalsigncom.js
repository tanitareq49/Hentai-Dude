
//modal comment//
const loginComment = document.querySelector(".loginComment");
const signinComment = document.querySelector(".signinComment");

const backdropComment = document.querySelector("#backdropComment");
const modalComment = document.querySelector("#modalComment");
const closeFormBtnComment = document.querySelector("#closeFormBtnComment");

const tabsComment = document.querySelectorAll(".tabComment");
const tabOneComment = document.querySelector("#tabOneComment");
const tabTwoComment = document.querySelector("#tabTwoComment");
const tabThreeComment = document.querySelector("#tabThreeComment");

const tabOneContentComment = document.querySelector("#tabOneContentComment");
const tabTwoContentComment = document.querySelector("#tabTwoContentComment");
const tabThreeContentComment = document.querySelector("#tabThreeContentComment");

const headingComment = document.querySelector("#headingComment");

function showModalComment(contentCommentIndex, headingCommentText) {
    heading.innerHTML = headingCommentText;
    modalComment.classList.remove("hidden");
    backdropComment.classList.remove("hidden");

    tabsComment.forEach((tab, index) => {
        if (index === contentCommentIndex) {
            tab.classList.add("active");
        } else {
            tab.classList.remove("active");
        }
    });

    // Show the corresponding content and hide the others
    if (contentCommentIndex === 0) {
        tabOneContentComment.classList.remove("hidden");
        tabTwoContentComment.classList.add("hidden");
        tabThreeContentComment.classList.add("hidden");
    } else if (contentCommentIndex === 1) {
        tabTwoContentComment.classList.remove("hidden");
        tabOneContentComment.classList.add("hidden");
        tabThreeContentComment.classList.add("hidden");
    } else if (contentCommentIndex === 2) {
        tabThreeContentComment.classList.remove("hidden");
        tabOneContentComment.classList.add("hidden");
        tabTwoContentComment.classList.add("hidden");
    }
}

function hideModalComment() {
    backdropComment.classList.add("hidden");
    modalComment.classList.add("hidden");
}

loginComment.addEventListener("click", () => {
    showModalComment(0, "Sign In");
});

signinComment.addEventListener("click", () => {
    showModalComment(1, "Register");
});

backdropComment.addEventListener("click", () => {
    hideModalComment();
});

closeFormBtnComment.addEventListener("click", () => {
    hideModalComment();
});

tabThreeComment.addEventListener("click", (ev) => {
    heading.innerHTML = "Forgot Password";  
    tabThreeContentComment.classList.remove("hidden"); 

    if (!tabOneContentComment.classList.contains("hidden")) {
        tabOneContentComment.classList.add("hidden");
    }

    if (!tabTwoContentComment.classList.contains("hidden")) {
        tabTwoContentComment.classList.add("hidden");
    }

    tabsComment.forEach((btn) => {
        btn.classList.remove('active');
    });
    tabThreeComment.classList.add("active");

    ev.preventDefault();
});

// Adding event listener to all tab buttons
tabsComment.forEach((tab, index) => {
    tab.addEventListener("click", (event) => {
        // Prevent event propagation to avoid modal closing when clicking the tabs
        event.stopPropagation();  // This prevents the event from bubbling up to the backdrop

        if (index === 0) {
            showModalComment(0, "Sign In");
        }
        if (index === 1) {
            showModalComment(1, "Register");
        }
        if (index === 2) {
            showModalComment(2, "Forgot Password");
        }

        event.preventDefault();

        tabsComment.forEach((btn) => {
            if (btn !== tab) {
                btn.classList.remove('active');
            }
        });
        tab.classList.add("active");
    });
});
