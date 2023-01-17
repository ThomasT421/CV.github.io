// Récupère toutes les sections
var sections = document.querySelectorAll("section");

// Détecte le changement de la taille de l'écran
window.onresize = function() {
    // Pour chaque section
    for (var i = 0; i < sections.length; i++) {
        // Récupère la largeur de l'écran
        var screenWidth = window.innerWidth;
        // Si la largeur de l'écran est inférieure à 600px
        if (screenWidth < 600) {
            // Enlève la bordure
            sections[i].style.border = "none";
        } else {
            // Ajoute la bordure
            sections[i].style.border = "1px solid black";
        }
    }
}
