import Foundation

class Logger {
    func log(_ message: String) {
        // swiftlint:disable:next no_direct_standard_out_logs
        print(message)
    }
}

let logger = Logger()

var cuissonEnCours = false

func cuireRiz(type: String, quantite: Int) {
    logger.log("Début de la cuisson pour \(quantite)g de riz \(type)...")

    cuissonEnCours = true

    sleep(10)

    if cuissonEnCours {
        logger.log("Votre Riz est prêt !")
        cuissonEnCours = false
    } else {
        logger.log("Cuisson annulée.")
    }
}

func main() {
    logger.log("Bienvenue dans le simulateur de rice-cooker !")

    // swiftlint:disable:next no_direct_standard_out_logs
    print("Entrez le type de riz : ", terminator: "")
    let typeDeRiz = readLine() ?? ""

    // swiftlint:disable:next no_direct_standard_out_logs
    print("Entrez la quantité de riz (en grammes) : ", terminator: "")
    let quantiteDeRiz = Int(readLine() ?? "") ?? 0

    logger.log("Type de riz : \(typeDeRiz)")
    logger.log("Quantité de riz : \(quantiteDeRiz)g")

    cuireRiz(type: typeDeRiz, quantite: quantiteDeRiz)

}
main()
