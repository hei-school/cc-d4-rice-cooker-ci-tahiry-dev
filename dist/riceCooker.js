"use strict";
/* eslint @typescript-eslint/no-var-requires: "off" */
/* eslint-env node */
Object.defineProperty(exports, "__esModule", { value: true });
exports.cuireRiz = void 0;
var userPrompt = require('prompt-sync')();
var cuissonEnCours = false;
function cuireRiz(type, quantite) {
    console.log("D\u00E9but de la cuisson pour ".concat(quantite, "g de riz ").concat(type, "..."));
    cuissonEnCours = true;
    setTimeout(function () {
        if (cuissonEnCours) {
            console.log("Votre Riz est prêt !");
            cuissonEnCours = false;
        }
    }, 10000);
}
exports.cuireRiz = cuireRiz;
function main() {
    console.log("Bienvenue dans le simulateur de rice-cooker !");
    var typeDeRiz = "";
    var quantiteDeRiz = 0;
    while (typeDeRiz === "") {
        typeDeRiz = userPrompt("Entrez le type de riz : ").trim();
        if (typeDeRiz === "") {
            console.log("Le type de riz ne peut pas être vide. Veuillez le saisir.");
        }
    }
    var quantiteDeRizStr;
    do {
        quantiteDeRizStr = userPrompt("Entrez la quantité de riz (en grammes) : ");
        quantiteDeRiz = parseInt(quantiteDeRizStr, 10);
        if (isNaN(quantiteDeRiz) || quantiteDeRiz <= 10) {
            console.log("Veuillez entrer une quantité en nombre entier supérieur à 10.");
        }
    } while (isNaN(quantiteDeRiz) || quantiteDeRiz <= 10);
    console.log("Type de riz : ".concat(typeDeRiz));
    console.log("Quantit\u00E9 de riz : ".concat(quantiteDeRiz, "g"));
    cuireRiz(typeDeRiz, quantiteDeRiz);
}
main();
