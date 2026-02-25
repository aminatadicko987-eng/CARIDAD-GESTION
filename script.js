let tableau = JSON .parse(localStorage.getItem('tableau')) || {};

// Fonction pour afficher le tableau
function afficherTableau() { 
    const  listeTableau =document.getElementById('liste-tableau');
    listeTableau.innerHTML ='';
    tableau.forEach((ligne, index) => {
        const tr =document.createElement('tr');
        tr. innerHTML = `
      <td>${ligne.nom}</td>
      <td>${ligne.prénom}</td>
      <td>${ligne.adresse}</td>
      <td>${ligne.numero}</td>
      <td>${ligne.metier}</td>
      <td>
        <button class="bnt-modifier" data-index="${index}">Modifier</button>
        <button class="btn-supprimer" data-index="${index}"Spprimer</button>
      </td>
        `;
        listeTableau.appendChild(tr);
    })
    }
        //Fonction pour ajouter ligne
        document.getElementById('form-tableau').addEventListener('submit' , (e) => {
            e.preventDefault();
            const nom =document.getElementById('nom').Value ;
            const prénom =document. getElementById(prénom).Value;
            const adresse =document.getElementById(adresse).Value;
            const numero =document.getElementById(numero).Value;
            const metier =document.getElementById(metier).Value;
            const nouvelleLigne ={nom,prénom,adresse,numero,metier};
            tableau.push(nouvelleLigne);
            localStorage.setItem('tableau' ,JSON.stringify(tableau));
            afficherTableau();
            document.getElementById('form-tableau').reset ();
        
    })
    //Fonction pour modifier une ligne
    document.addEventListener('click',(e) => {
        if(e.target.classListe.contains('btn-modifier')) {
            const index = e.target.dataset.index;
            const ligne =tableau[ind,ex];
            document.getElementById('nom').Value = ligne.nom;
            document.getElementById('prénom').Value =ligne.prénom;
            document.getElementById('adresse').Value =ligne.adresse;
            document.getElementById('numero').Value =ligne.numero;
            document.getElementById('metier').Value =ligne.metier;
            tableau.splice(index,1);
            localStorage.setItem('tableau',JSON.stringify(tableau));
            afficherTableau();
        }else if(e.target.classListe.contains('btn-supprimer')){
            const index = e.target.dataset.index;
            tableau.splice(index,1);
            localStorage.setItem('tableau', JSON.stringify(tableau));
            afficherTableau();
        }
     
    });
    // Afficher le tableau au chargement
    afficherTableau()









} 

