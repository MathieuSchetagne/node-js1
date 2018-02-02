"use strict";
/* importation du module «fs» (file system) */
const fs = require("fs");

/* lecture synchrone, la fonction: fs.readFileSync() 
bloque l'éxécution des instructions suivantes */

let data = fs.readFileSync('fichierText.txt');

console.log(data.toString());
console.log("Fin du programme");

console.log("////////////////////////////////////////////");


/* La fonction fs.readFile() est asynchrone elle ne bloque pas l'éxécution des instructions suivantes */
fs.readFile('fichierText.txt', (err, data) => {
 if (err) return console.error(err);
 console.log(data.toString());
});
/* «Fin du programme» apparaît avant la lecture du fichier */
console.log("Fin du programme");