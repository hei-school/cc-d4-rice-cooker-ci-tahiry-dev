"use strict";
/* eslint @typescript-eslint/no-var-requires: "off" */
/* eslint-env node */
Object.defineProperty(exports, "__esModule", { value: true });
var userPrompt = require('prompt-sync')();
var timers_1 = require("timers");
var cuissonEnCours = false;
function cuireRiz(type, quantite) {
    console.log("D\u00E9but de la cuisson pour ".concat(quantite, "g de riz ").concat(type, "..."));
    cuissonEnCours = true;
    (0, timers_1.setTimeout)(function () {
        if (cuissonEnCours) {
            console.log("Votre Riz est prêt !");
            cuissonEnCours = false;
        }
        else {
            console.log("Cuisson annulée.");
        }
    }, 10000);
}
function main() {
    console.log("Bienvenue dans le simulateur de rice-cooker !");
    var typeDeRiz = userPrompt("Entrez le type de riz : ");
    var quantiteDeRiz = parseInt(userPrompt("Entrez la quantité de riz (en grammes) : "), 10);
    console.log("Type de riz : ".concat(typeDeRiz));
    console.log("Quantit\u00E9 de riz : ".concat(quantiteDeRiz, "g"));
    cuireRiz(typeDeRiz, quantiteDeRiz);
}
main();
