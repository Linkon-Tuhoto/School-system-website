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