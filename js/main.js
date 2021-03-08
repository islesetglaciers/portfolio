// Ouvrir et fermer le menu de navigation
const btnMenu = document.querySelector(".menu-nav");
const menuNav = document.querySelector("#menu");

btnMenu.addEventListener("click", () => {
    btnMenu.classList.toggle("ouvrir");
    if (btnMenu.classList.contains("ouvrir")) {
        btnMenu.innerHTML = "F e r m e r";
    } else {
        btnMenu.innerHTML = "M e n u";
    }
    menuNav.classList.toggle("ouvrir");
});

// Changer Image dans la page Projets