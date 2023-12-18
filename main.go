package main

import (
	"bufio"
	"fmt"
	"os"
	"time"
)

type Logger struct {
	logContents []string
}

func (l *Logger) log(message string) {
	fmt.Println(message)
	l.logContents = append(l.logContents, message)
}

func (l *Logger) getLogContents() []string {
	return append([]string(nil), l.logContents...)
}

func cuireRiz(typeDeRiz string, quantite int, logger *Logger) {
	logger.log(fmt.Sprintf("Début de la cuisson pour %d g de riz %s...", quantite, typeDeRiz))
	time.Sleep(10 * time.Second)
	logger.log("Votre riz est prêt !")
}

func main() {
	logger := Logger{}
	logger.log("Bienvenue dans le simulateur de rice-cooker !")

	var typeDeRiz string
	scanner := bufio.NewScanner(os.Stdin)

	for typeDeRiz == "" {
		fmt.Print("Entrez le type de riz : ")
		scanner.Scan()
		typeDeRiz = scanner.Text()
		typeDeRiz = (typeDeRiz)
		if typeDeRiz == "" {
			logger.log("Le type de riz ne peut pas être vide. Veuillez le saisir.")
		}
	}

	var quantiteDeRiz int
	for quantiteDeRiz <= 10 {
		fmt.Print("Entrez la quantité de riz (en grammes) : ")
		scanner.Scan()
		quantiteDeRizStr := scanner.Text()
		quantiteDeRiz = 0
		fmt.Sscanf(quantiteDeRizStr, "%d", &quantiteDeRiz)

		if quantiteDeRiz <= 10 {
			logger.log("Veuillez entrer une quantité en nombre entier supérieur à 10.")
		}
	}

	logger.log(fmt.Sprintf("Type de riz : %s", typeDeRiz))
	logger.log(fmt.Sprintf("Quantité de riz : %d g", quantiteDeRiz))

	cuireRiz(typeDeRiz, quantiteDeRiz, &logger)
}
