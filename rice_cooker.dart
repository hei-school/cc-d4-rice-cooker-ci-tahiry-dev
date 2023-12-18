import 'dart:io';

class Logger {
  List<String> logContents = [];

  void log(String message) {
    print(message);
    logContents.add(message);
  }

  List<String> getLogContents() {
    return List.from(logContents);
  }
}

void cuireRiz(String type, int quantite) {
  var logger = Logger();
  logger.log("Début de la cuisson pour $quantite g de riz $type...");
  sleep(Duration(seconds: 10));
  logger.log("Votre riz est prêt !");
}

void main() {
  var logger = Logger();
  logger.log("Bienvenue dans le simulateur de rice-cooker !");

  String? typeDeRiz;

  while (typeDeRiz == null || typeDeRiz.isEmpty) {
    stdout.write("Entrez le type de riz : ");
    typeDeRiz = stdin.readLineSync()?.trim();

    if (typeDeRiz == null || typeDeRiz.isEmpty) {
      logger.log("Le type de riz ne peut pas être vide. Veuillez le saisir.");
    }
  }

  int quantiteDeRiz = 0;

  while (quantiteDeRiz <= 10) {
    stdout.write("Entrez la quantité de riz (en grammes) : ");
    var quantiteDeRizStr = stdin.readLineSync()?.trim();
    quantiteDeRiz = int.tryParse(quantiteDeRizStr ?? "0") ?? 0;

    if (quantiteDeRiz <= 10) {
      logger.log("Veuillez entrer une quantité en nombre entier supérieur à 10.");
    }
  }

  logger.log("Type de riz : $typeDeRiz");
  logger.log("Quantité de riz : $quantiteDeRiz g");

  cuireRiz(typeDeRiz, quantiteDeRiz);
}
