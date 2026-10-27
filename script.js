// Theme toggle functionality
const toggle = document.getElementById("toggleTheme");
const root = document.documentElement;

const storedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

const theme = storedTheme || (prefersDark ? 'dark' : 'light');
root.setAttribute("data-theme", theme);

toggle.addEventListener("click", () => {
    const current = root.getAttribute("data-theme");
    const newTheme = current === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
});

// Dynamic Year
document.getElementById("year").textContent = new Date().getFullYear();

// Initialize GLightbox
if (typeof GLightbox !== 'undefined') {
    const lightbox = GLightbox({
        selector: '.glightbox',
        touchNavigation: true,
        loop: true,
        zoomable: true,
        autoplayVideos: false
    });
}

// Gallery Horizontal Navigation Controls
const galleryTrack = document.getElementById("galleryTrack");
const galleryPrev = document.getElementById("galleryPrev");
const galleryNext = document.getElementById("galleryNext");

if (galleryTrack && galleryPrev && galleryNext) {
    galleryPrev.addEventListener("click", () => {
        galleryTrack.scrollBy({ left: -320, behavior: "smooth" });
    });

    galleryNext.addEventListener("click", () => {
        galleryTrack.scrollBy({ left: 320, behavior: "smooth" });
    });
}