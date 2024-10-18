const nav = document.getElementById("nav-id");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
    const isVisible = nav.getAttribute("data-visible");

    if (isVisible == "false") {
        nav.setAttribute("data-visible", "true");
        navToggle.setAttribute("aria-expanded", "true");
    }
    else if (isVisible == "true") {
        nav.setAttribute("data-visible", "false");
        navToggle.setAttribute("aria-expanded", "false");
    }
})

document.onclick = function(pointerEvent) {
    if (pointerEvent.target.id != "nav-bar" && pointerEvent.target.id != "menu-btn") {
        nav.setAttribute("data-visible", "false");
        navToggle.setAttribute("aria-expanded", "false");
    }
}