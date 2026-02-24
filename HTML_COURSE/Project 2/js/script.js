// Sidebar Toggle
const menuToggle = document.querySelector(".menu-toggle");
const sidebar = document.querySelector(".sidebar");

menuToggle.onclick = () => {
    sidebar.classList.toggle("active");
};

// Smooth Scroll + Active Nav
document.querySelectorAll(".nav a").forEach(link => {
    link.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"});
    });
});

// Portfolio Filter
const filterBtns = document.querySelectorAll(".filter-buttons button");
const items = document.querySelectorAll(".item");

filterBtns.forEach(btn=>{
    btn.addEventListener("click", ()=>{
        document.querySelector(".filter-buttons .active")?.classList.remove("active");
        btn.classList.add("active");

        const filter = btn.dataset.filter;

        items.forEach(item=>{
            if(filter === "all" || item.classList.contains(filter)){
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });
});

// Scroll Reveal Animation
window.addEventListener("scroll", ()=>{
    document.querySelectorAll(".reveal").forEach(section=>{
        const windowHeight = window.innerHeight;
        const revealTop = section.getBoundingClientRect().top;
        if(revealTop < windowHeight - 100){
            section.classList.add("active");
        }
    });
});

// Dark Mode
const themeBtn = document.getElementById("themeBtn");

themeBtn.onclick = ()=>{
    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        themeBtn.innerText = "☀ Light Mode";
    } else {
        themeBtn.innerText = "🌙 Dark Mode";
    }
};