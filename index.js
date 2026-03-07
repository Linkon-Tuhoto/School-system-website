  const navLinks = document.querySelectorAll(".navbar a");
    const menuToggle = document.getElementById("menu-toggle");

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            menuToggle.checked = false;
        });
    });
const sections = document.querySelectorAll(".page");
const navlink = document.querySelectorAll(".navbar a");
window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if(pageYOffset >= sectionTop -150){
            current = section.getAttribute("id");
        }
    });
        navlink.forEach(link => {
            link.classList.remove("active")
            if(link.getAttribute ("href") === "#" + current){
                link.classList.add("active");
            }
        });
});
/*
document.addEventListener("DOMContentLoaded", fuction() {
const observer = new IntersectionObserver((entries), () => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classlist.add("show");
            observer.unobserve(entry.target);
        }
    });
}, {threshold: 0.2 });
document.querySelectorAll(".hidden-left, .hidden-right").forEach(el => observer.observe(el));
});*/

document.addEventListener("DOMContentLoaded", function() {

    const buttons = document.querySelectorAll(".enroll-sign");
    const modal = document.getElementById("sign");
    const closeBtn = document.querySelector(".sign-close");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            console.log("Clicked");   // DEBUG TEST
            modal.style.display = "flex";
            document.body.style.overflow = "hidden";
        });
    });

    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    });

});

window.addEventListener('scroll', function(){
    const header = document.querySelector('.header');
    if(window.scrollY > 50){
        header.classList.add('scrolled');
    }
    else{
        header.classList.remove('scrolled');
    }
});

const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", function(){
    reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;

        const revealPoint = 150;

        if(elementTop < windowHeight - revealPoint){
            element.classList.add("active");
        }
    });

});
