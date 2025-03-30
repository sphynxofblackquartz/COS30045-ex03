function pageNav(pages) {
    document.querySelectorAll(".pages").forEach(section => { section.style.display = "none" });

    document.getElementById(pages).style.display = "block";

    document.querySelectorAll("nav ul li").forEach(navItem => {
        navItem.classList.remove("active");
    });

    document.getElementById(pages).classList.add("active");
    
}

document.addEventListener("DOMContentLoaded", () => {pageNav("index")});
