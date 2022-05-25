// Je déclare des variables
const butt = document.getElementById('butt').onclick = changerCouleur
const butt2 = document.getElementById('butt2').onclick = changerBackground

// Cette fonction consiste à changer la couleur du paragraphe
function changerCouleur() {
    para.style.color = 'red'
}

// Cette fonction consiste à changer la couleur du background
function changerBackground() {
    header.style.backgroundColor = 'blue';
}