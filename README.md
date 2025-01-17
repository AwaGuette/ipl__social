IPL Social
Informations personnelles
Nom : DIEYE
Prénom : AWA
Email Vinci : awa.dieye@student.vinci.be
URL GitHub du projet : https://github.com/AwaGuette/ipl__social.git
Description du projet
Ce projet, nommé "IPL Social", démontre la mise en place d'un environnement DevOps utilisant GitHub Actions. Il comprend une fonction de validation de mot de passe en JavaScript et une pipeline d'Intégration Continue (CI).
Explication du code
Le fichier passwordChecker.js contient une fonction isValidPassword qui vérifie si un mot de passe respecte les critères suivants :
Au moins 8 caractères
Au moins un caractère spécial
Au moins un chiffre
Ne contient pas la chaîne "IPL" (insensible à la casse)
La fonction utilise des expressions régulières pour effectuer ces vérifications et retourne un booléen indiquant si le mot de passe est valide ou non.
Tests
Les tests unitaires sont écrits dans le fichier passwordChecker.test.js en utilisant l'approche TDD (Test-Driven Development). Ils vérifient tous les critères de validation du mot de passe.
Pour exécuter les tests, utilisez la commande suivante :
npm run test
Pipeline CI
La pipeline CI est configurée dans le fichier .github/workflows/ci.yml. Elle s'exécute automatiquement à chaque push sur la branche principale "main" ou lors d'une Pull Request vers cette branche. La pipeline effectue les actions suivantes :
Installation des dépendances
Exécution des tests
