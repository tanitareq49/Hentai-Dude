const loginBtn = document.querySelector("#login");
const signInBtn = document.querySelector("#sign-in");
const backdrop = document.querySelector("#backdrop")
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

loginBtn.addEventListener("click", (ev)=>{
    heading.innerHTML = "Sign In";
    modal.classList.remove("hidden");
    backdrop.classList.remove("hidden");
    tabOneContent.classList.remove("hidden");
    tabOneBtn.classList.add("active");
    if(!tabTwoContent.classList.contains("hidden")) {
        tabTwoContent.classList.add("hidden");
    } 
    if(!tabThreeContent.classList.contains("hidden")) {
        tabThreeContent.classList.add("hidden");
    } 
    if(tabTwoBtn.classList.contains("active")) {
        tabTwoBtn.classList.remove("active");
    }
    if(tabThreeBtn.classList.contains("active")) {
        tabThreeBtn.classList.remove("active");
    }
});

signInBtn.addEventListener("click", (ev)=>{
    heading.innerHTML = "Register";
    modal.classList.remove("hidden");
    backdrop.classList.remove("hidden");
    tabTwoContent.classList.remove("hidden");
    tabTwoBtn.classList.add("active");
    if(!tabOneContent.classList.contains("hidden")) {
        tabOneContent.classList.add("hidden");
    } 
    if(!tabThreeContent.classList.contains("hidden")) {
        tabThreeContent.classList.add("hidden");
    } 
    if(tabOneBtn.classList.contains("active")) {
        tabOneBtn.classList.remove("active");
    }
    if(tabThreeBtn.classList.contains("active")) {
        tabThreeBtn.classList.remove("active");
    }
});

backdrop.addEventListener("click", ()=>{
    backdrop.classList.add("hidden");
    modal.classList.add("hidden");
});

closeFormBtn.addEventListener("click", ()=>{
    backdrop.classList.add("hidden");
    modal.classList.add("hidden");
});

tabs.forEach((tab, index)=>{
    tab.addEventListener("click", (event)=> {
        if(index === 0) {
            heading.innerHTML = "Sign In";
            tabOneContent.classList.remove("hidden");
            if(!tabTwoContent.classList.contains("hidden")) {
                tabTwoContent.classList.add("hidden");
            }
            if(!tabThreeContent.classList.contains("hidden")) {
                tabThreeContent.classList.add("hidden");
            }
        }
        if(index === 1) {
            heading.innerHTML = "Register";
            tabTwoContent.classList.remove("hidden");
            if(!tabOneContent.classList.contains("hidden")) {
                tabOneContent.classList.add("hidden");
            }
            if(!tabThreeContent.classList.contains("hidden")) {
                tabThreeContent.classList.add("hidden");
            }
        }
        if(index === 2) {
            heading.innerHTML = "Forgot Password";
            tabThreeContent.classList.remove("hidden");
            if(!tabTwoContent.classList.contains("hidden")) {
                tabTwoContent.classList.add("hidden");
            }
            if(!tabOneContent.classList.contains("hidden")) {
                tabThreeContent.classList.add("hidden");
            }
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