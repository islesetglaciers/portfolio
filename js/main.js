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
const imgProjet = document.querySelector('.contenu img');
const imagesProjets = ['img/projets/refonte-tim/cover.jpg', 'img/projets/momo/cover.jpg', 'img/projets/daneo/cover.jpg', 'img/projets/quiz-astro/cover.jpg', 'img/projets/quiz-anime/cover.jpg', 'img/projets/projet-recherche/cover.png'];

// Fonction changerImage
function changerImage(numImg) {
    // console.log(evt);
    // console.log("Numéro de l'image : " + numImg);
    imgProjet.src = imagesProjets[numImg];
} 

