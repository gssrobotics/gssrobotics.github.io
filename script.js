function goTo(id) {
    var element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
}

function toggleMobileMenu() {
    document.querySelector('nav').classList.toggle("visible");
}