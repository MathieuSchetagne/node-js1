// Importation du module de gestion des événements «events»
let events = require('events');

// Création d'un objet émetteur d'événement «.EventEmitter()»
let emeteurEvenement = new events.EventEmitter();

// Créer le gestionnaire d'événement « connectHandler »
let connectHandler = () => {
 console.log('connexion réussie.');
 
 // lancer l'événement 'donnees_recu'
 emeteurEvenement.emit('donnees_recues');
}

// Lier l'événement de connexion au gestionnaire d'événement «connectHandler»
emeteurEvenement.on('connexion', connectHandler);
 
// Lier l'événement 'data_received' à la function anonyme 
emeteurEvenement.on('donnees_recues', () => {
 console.log('Donnéees bien reçues.');
});

// Lancer l'événement 'connexion' 
emeteurEvenement.emit('connexion');

console.log("Fin du programme.");