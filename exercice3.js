"use strict";
/* importation du module «fs» (file system) */
var fs = require("fs");

/* lecture synchrone, la fonction: fs.readFileSync() 
bloque l'éxécution des instructions suivantes */

var data = fs.readFileSync('03_fichier.txt');

console.log(data.toString());
console.log("Fin du programme");

console.log("////////////////////////////////////////////");

"use strict";
var fs = require("fs");
/* La fonction fs.readFile() est asynchrone elle ne bloque pas l'éxécution des instructions suivantes */
fs.readFile('03_fichier.txt', (err, data) => {
 if (err) return console.error(err);
 console.log(data.toString());
});
/* «Fin du programme» apparaît avant la lecture du fichier */
console.log("Fin du programme");