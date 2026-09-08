const today = new Date();

document.getElementById("currentyear").textContent = today.getFullYear();

document.getElementById("lastModified").textContent =
    `Last Modification: ${document.lastModified}`;

// Hamburger menu
const menuButton = document.getElementById("menu-button");
const mainNav = document.getElementById("main-nav");

menuButton.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");

    menuButton.setAttribute("aria-expanded", isOpen);

    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );

    menuButton.textContent = isOpen ? "✕" : "☰";
});