package main

import (
	"fmt"
	"time"
)

type Logger struct{}

func (l Logger) log(message string) {
	fmt.Println(message)
}

var cuissonEnCours bool

func cuireRiz(typeDeRiz string, quantiteDeRiz int) {
	logger := Logger{}
	logger.log(fmt.Sprintf("Début de la cuisson pour %dg de riz %s...", quantiteDeRiz, typeDeRiz))

	cuissonEnCours = true

	time.Sleep(10 * time.Second)

	if cuissonEnCours {
		logger.log("Votre Riz est prêt !")
		cuissonEnCours = false
	} else {
		logger.log("Cuisson annulée.")
	}
}

func main() {
	logger := Logger{}
	logger.log("Bienvenue dans le simulateur de rice-cooker !")

	fmt.Print("Entrez le type de riz : ")
	var typeDeRiz string
	fmt.Scanln(&typeDeRiz)

	fmt.Print("Entrez la quantité de riz (en grammes) : ")
	var quantiteDeRiz int
	fmt.Scanln(&quantiteDeRiz)

	logger.log(fmt.Sprintf("Type de riz : %s", typeDeRiz))
	logger.log(fmt.Sprintf("Quantité de riz : %dg", quantiteDeRiz))

	cuireRiz(typeDeRiz, quantiteDeRiz)
}
