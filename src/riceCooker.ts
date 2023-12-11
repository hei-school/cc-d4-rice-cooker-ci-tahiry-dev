/* eslint @typescript-eslint/no-var-requires: "off" */
/* eslint-env node */

const userPrompt = require('prompt-sync')();
import { setTimeout } from 'timers';

let cuissonEnCours = false;

function cuireRiz(type: string, quantite: number): void {
    console.log(`Début de la cuisson pour ${quantite}g de riz ${type}...`);

    cuissonEnCours = true;

    setTimeout(() => {
        if (cuissonEnCours) {
            console.log("Votre Riz est prêt !");
            cuissonEnCours = false;
        } else {
            console.log("Cuisson annulée.");
        }
    }, 10000);
}

function main(): void {
    console.log("Bienvenue dans le simulateur de rice-cooker !");

    const typeDeRiz: string = userPrompt("Entrez le type de riz : ");

    const quantiteDeRiz: number = parseInt(userPrompt("Entrez la quantité de riz (en grammes) : "), 10);

    console.log(`Type de riz : ${typeDeRiz}`);
    console.log(`Quantité de riz : ${quantiteDeRiz}g`);

    cuireRiz(typeDeRiz, quantiteDeRiz);
}

main();
