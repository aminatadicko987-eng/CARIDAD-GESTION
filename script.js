// Récupérer le tableau depuis le localStorage (doit être un tableau [])
let tableau = JSON.parse(localStorage.getItem('tableau')) || [];

// Fonction pour afficher le tableau
function afficherTableau() {
    const listeTableau = document.getElementById('liste-tableau');
    listeTableau.innerHTML = '';

    tableau.forEach((ligne, index) => {
        const tr = document.createElement('tr');

        tr.innerHTML = `
            <td>${ligne.nom}</td>
            <td>${ligne.prenom}</td>
            <td>${ligne.adresse}</td>
            <td>${ligne.numero}</td>
            <td>${ligne.metier}</td>
            <td>
                <button class="btn-modifier" data-index="${index}">Modifier</button>
                <button class="btn-supprimer" data-index="${index}">Supprimer</button>
            </td>
        `;

        listeTableau.appendChild(tr);
    });
}

// Fonction pour ajouter une ligne
document.getElementById('form-tableau').addEventListener('submit', (e) => {
    e.preventDefault();

    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const adresse = document.getElementById('adresse').value;
    const numero = document.getElementById('numero').value;
    const metier = document.getElementById('metier').value;

    const nouvelleLigne = { nom, prenom, adresse, numero, metier };

    tableau.push(nouvelleLigne);
    localStorage.setItem('tableau', JSON.stringify(tableau));

    afficherTableau();
    document.getElementById('form-tableau').reset();
});

// Fonction pour modifier ou supprimer une ligne
document.addEventListener('click', (e) => {

    // MODIFIER
    if (e.target.classList.contains('btn-modifier')) {
        const index = e.target.dataset.index;
        const ligne = tableau[index];

        document.getElementById('nom').value = ligne.nom;
        document.getElementById('prenom').value = ligne.prenom;
        document.getElementById('adresse').value = ligne.adresse;
        document.getElementById('numero').value = ligne.numero;
        document.getElementById('metier').value = ligne.metier;

        // Supprime l’ancienne ligne (elle sera recréée au submit)
        tableau.splice(index, 1);
        localStorage.setItem('tableau', JSON.stringify(tableau));
        afficherTableau();
    }

    // SUPPRIMER
    if (e.target.classList.contains('btn-supprimer')) {
        const index = e.target.dataset.index;

        tableau.splice(index, 1);
        localStorage.setItem('tableau', JSON.stringify(tableau));
        afficherTableau();
    }
});

// Afficher le tableau au chargement
afficherTableau();