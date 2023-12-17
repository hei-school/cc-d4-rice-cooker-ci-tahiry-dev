import 'dart:io';

class Logger {
  void log(String message) {
    print(message);
  }
}

bool cuissonEnCours = false;

void cuireRiz(String type, int quantite) {
  var logger = Logger();
  logger.log("Début de la cuisson pour $quantite g de riz $type...");

  cuissonEnCours = true;

  sleep(Duration(seconds: 10));

  if (cuissonEnCours) {
    logger.log("Votre riz est prêt !");
    cuissonEnCours = false;
  } else {
    logger.log("Cuisson annulée.");
  }
}

void main() {
  var logger = Logger();
  logger.log("Bienvenue dans le simulateur de rice-cooker !");

  stdout.write("Entrez le type de riz : ");
  var typeDeRiz = stdin.readLineSync() ?? "";

  stdout.write("Entrez la quantité de riz (en grammes) : ");
  var quantiteDeRiz = int.tryParse(stdin.readLineSync() ?? "") ?? 0;

  logger.log("Type de riz : $typeDeRiz");
  logger.log("Quantité de riz : $quantiteDeRiz g");

  cuireRiz(typeDeRiz, quantiteDeRiz);
}
