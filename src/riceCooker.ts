/* eslint @typescript-eslint/no-var-requires: "off" */
/* eslint-env node */

const userPrompt = require('prompt-sync')();

let cuissonEnCours = false;

export function cuireRiz(type: string, quantite: number): void {
    console.log(`Début de la cuisson pour ${quantite}g de riz ${type}...`);

    cuissonEnCours = true;

    setTimeout(() => {
        if (cuissonEnCours) {
            console.log("Votre Riz est prêt !");
            cuissonEnCours = false;
        }
    }, 10000);
}

function main(): void {
    console.log("Bienvenue dans le simulateur de rice-cooker !");

    let typeDeRiz: string = "";
    let quantiteDeRiz: number = 0;

    while (typeDeRiz === "") {
        typeDeRiz = userPrompt("Entrez le type de riz : ").trim();
        if (typeDeRiz === "") {
            console.log("Le type de riz ne peut pas être vide. Veuillez le saisir.");
        }
    }

    let quantiteDeRizStr: string;
    do {
        quantiteDeRizStr = userPrompt("Entrez la quantité de riz (en grammes) : ");
        quantiteDeRiz = parseInt(quantiteDeRizStr, 10);

        if (isNaN(quantiteDeRiz) || quantiteDeRiz <= 10) {
            console.log("Veuillez entrer une quantité en nombre entier supérieur à 10.");
        }
    } while (isNaN(quantiteDeRiz) || quantiteDeRiz <= 10);

    console.log(`Type de riz : ${typeDeRiz}`);
    console.log(`Quantité de riz : ${quantiteDeRiz}g`);

    cuireRiz(typeDeRiz, quantiteDeRiz);
}

main();
