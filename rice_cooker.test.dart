import 'dart:io';
import 'package:test/test.dart';
import 'package:mocktail/mocktail.dart'; // Import mocktail
import 'rice_cooker.dart';

void main() {
  group('Logger', () {
    test('log adds message to the log list', () {
      var logger = Logger();
      logger.log('Test message');

      expect(logger.getLogContents(), contains('Test message'));
    });
  });

  group('simulation de cuisson', () {
    test('cuire du riz avec des valeurs valide', () {
      var logger = Logger();
      var typeDeRiz = 'Makalioka';
      var quantiteDeRiz = 200;
      cuireRiz(typeDeRiz, quantiteDeRiz);
    });
  });
}
