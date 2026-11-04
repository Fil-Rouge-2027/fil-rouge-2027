# Cahier des charges Projet « Application de randonnée »

## 1. Objet du CDC

Ce cahier des charges décrit les attendus du projet technique que vous devrez mener en équipe en tant que futurs titulaires du titre professionnel Concepteur Développeur d'Applications (CDA) correspondant au titre RNCP 01281.

Il fixe les objectifs, les livrables, les contraintes et les critères d'évaluation, sans imposer de répartition interne des rôles techniques : c'est à vous, en autonomie, d'organiser votre travail et vos responsabilités au sein du groupe.

## 2. Contexte et finalité

Ce projet s'inscrit dans le cadre de la formation CDA, titre RNCP niveau 6, et vise à valider les compétences professionnelles du référentiel. Il vous amène à concevoir, développer, tester, documenter et déployer une application complète dans une logique de projet professionnel.

Le projet doit mobiliser des pratiques professionnelles, et aboutir à une application fonctionnelle, déployée et démontrable.

## 3. Description du projet

Le projet porte sur la conception et le développement d'une application de randonnée permettant de proposer des idées de randonnée en fonction d'une situation géographique. L'objectif est de concevoir un système de type « Kayak » appliqué aux sites de randonnée, capable de rechercher, comparer et organiser des randonnées en regroupant en un seul endroit l'ensemble des données et informations disponibles sur différents sites.

Le MVP reste à définir par vous, mais l'application devra s'appuyer sur les fonctionnalités suivantes comme base :

- Moteur de recherche de randonnées par zone géographique, point d'intérêt, ville, massif ou région.
- Présentation de fiches de randonnée avec les informations essentielles.
- Comparaison de plusieurs randonnées selon des critères définis.
- Organisation et sauvegarde de randonnées favorites ou à faire.
- Agrégation de données issues de plusieurs sources ou sites pour centraliser l'information.
- Interface utilisateur responsive, accessible et intuitive.
- Authentification avec inscription, connexion et profil utilisateur.
- Historique des recherches, des randonnées consultées et des sélections enregistrées.

Vous pourrez proposer les options avancées suivantes (au choix) :

1. Suggestions de randonnées selon la météo.
2. Suggestions selon le niveau de difficulté, la durée, le dénivelé ou le type de terrain.
3. Filtrage par saison, accessibilité, distance ou équipement nécessaire.

Si vous souhaitez proposer d'autres options, vous pouvez le faire !

## 4. Périmètre fonctionnel et technique

Le projet doit couvrir, au minimum, les dimensions suivantes, adaptées au sujet qui vous est confié :

- Conception : analyse du besoin, modélisation des données, architecture générale, choix technologiques argumentés.
- Architecture organisée en couches (MVC, microservices, etc.).
- Base de données relationnelle (MySQL, PostgreSQL) et/ou NoSQL (MongoDB, Firebase).
- Développement : implémentation d'une application web, mobile, desktop ou hybride, avec bonnes pratiques de lisibilité, modularité et gestion des erreurs.
- Tests et qualité : mise en place de tests unitaires, d'intégration et fonctionnels, avec démarche de validation et de recette.
- Accessibilitée RGAA
- Sécurité : authentification, protection des données, HTTPS, les bonnes pratiques (OWASP, HTTPS, validation des entrées, etc.)
- Déploiement et exploitation : mise en production, hébergement cloud (AWS, GCP, OVH, etc.), conteneurisation (Docker), CI/CD, logs et documentation d'exploitation.
- Documentation : documentation technique, utilisateur, déploiement.

Les technologies restent au choix, dans une architecture organisée en couches, avec une base de données relationnelle et/ou NoSQL selon vos besoins, et des exigences de sécurité de base.

## 5. Planning et jalons

Le projet est organisé en 7 jalons, chacun correspondant à une semaine d'autonomie de 35h. Vous devez définir un MVP et progresser de manière incrémentale vers une version complète et déployée.

| Jalon | Semaine   | Période  | Objectifs à atteindre                                                                                                                                                  | Livrables attendus                                                                            |
| ----- | --------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| J1    | Semaine 1 | Novembre | - Analyse des besoins - Maquettes (Figma, Adobe XD) - Choix des technologies - Architecture logicielle - Plan de projet (Gantt, backlog)                               | - Cahier des charges fonctionnel - Maquettes UI/UX - Architecture technique - Backlog produit |
| J2    | Semaine 2 | Décembre | - Installation environnement de dév - Setup repo Git (GitHub/GitLab) - Développement des composants métier de base - Modèle de données (MCD, MLD) - Création de la BDD | - Repo Git initialisé - BDD créée et peuplée - Composants métier de base (CRUD de randonnées) |
| J3    | Semaine 3 | Février  | - Développement des interfaces utilisateur (frontend) - Intégration des APIs (météo, saisons) - Authentification utilisateurs                                          | - Frontend fonctionnel - API intégrées - Système d'authentification fonctionnel               |

| Jalon | Semaine   | Période    | Objectifs à atteindre                                                                                                                       | Livrables attendus                                                                                                          |
| ----- | --------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| J4    | Semaine 4 | Début mars | - Développement des algorithmes de suggestion de randonnées - Tests unitaires et d'intégration - Documentation technique (code, API)        | - Algorithme de suggestion fonctionnel - Tests unitaires rédigés et exécutés - Documentation technique (Swagger, README)    |
| J5    | Semaine 5 | Fin mars   | - Tests fonctionnels (plan de tests) - Correction des bugs -ptimisation des performances - Début de la documentation utilisateur            | - Plan de tests exécuté - Bugs corrigés - Doc utilisateur (guide, FAQ)                                                      |
| J6    | Semaine 6 | Fin avril  | - Préparation du déploiement (Docker, CI/CD) - Mise en place de l'environnement de prod - Déploiement de la version bêta                    | - Dockerfile, pipelines CI/CD - Environnement de prod configuré - Beta déployée et accessible                               |
| J7    | Semaine 7 | Fin mai    | - Tests de validation finale - Documentation complète (technique, utilisateur, déploiement) - Préparation de la soutenance (démo, supports) | - Application déployée et testée - Documentation complète - Supports pour la préparation de la certification (slides, démo) |

## 6. Compétences professionnelles couvertes

Le projet permet de valider l'ensemble des 11 compétences du titre CDA :

## Activité type 1 : Développer une application sécurisée

- CP1 : Installer et configurer son environnement de travail (J2).
- CP2 : Développer des interfaces utilisateur (J3).
- CP3 : Développer des composants métier (J2, J4).
- CP4 : Contribuer à la gestion d'un projet informatique (J1, J7).

## Activité type 2 : Concevoir et développer une application sécurisée organisée en couches

- CP5 : Analyser les besoins et maquetter une application (J1).
- CP6 : Définir l'architecture logicielle (J1).
- CP7 : Concevoir et mettre en place une base de données relationnelle (J2).
- CP8 : Développer des composants d'accès aux données SQL et NoSQL (J2, J3).

## Activité type 3 : Préparer le déploiement d'une application sécurisée

- CP9 : Préparer et exécuter les plans de tests (J4, J5, J7).
- CP10 : Préparer et documenter le déploiement (J6, J7).
- CP11 : Contribuer à la mise en production dans une démarche DevOps (J6, J7).

## 7. Livrables attendus

À l'issue du projet, votre équipe devra fournir au minimum :

## 1. Code sourcee et infrastructure

- Dépôt Git versionné complet (frontend, backend, BDD, scripts de déploiement) accessible à l'équipe pédagogique.
- Historique de commits traçable.
- Application déployée et accessible en ligne
- Dockerfile, pipelines CI/CD, scripts de déploiement.

## 2. Application fonctionnelle

- Environnement de démonstration.
- Jeu de données cohérent avec le besoin.

## 3. Documentation

- Documentation technique :
- Architecture générale.
- Technologies utilisées et justifications
- Documentation utilisateur : guide d'utilisation avec exemples et captures, procédure d'installation et de configuration.
- Documentation de déploiement : procédures, environnement, variables.

## 4. Tests

- Plan de tests (unitaires, intégration, fonctionnels).
- Résultats des tests (rapports, coverage).
- Stratégie qualité.
- Preuve d'exécution (logs, screenshots).

## 5. Rapport de projet / dossier de synthèse

- Contexte et objectifs.
- Choix techniques majeurs.
- Difficultés rencontrées et solutions apportées.
- Bilan individuel et collectif.

## 6. Supports pour la Soutenance / démonstration

Supports pour pouvoir préparer individuellement :

- Présentation orale du projet.
- Démonstration live.
- Réponses aux questions du jury.

## 8. Contraintes et attendus transverses

- Respect des délais et des jalons.
- Qualité du code : lisibilité, structure, sécurité, gestion des erreurs.
- Travail collaboratif : suivi de projet, revues de code, communication régulière.
- Autonomie : recherche d'information, expérimentation, propositions de solution.
- Posture professionnelle : fiabilité, engagement, respect des échéances.

## 9. Critères d'évaluation

Le jury évaluera les éléments suivants :

- Qualité du code : structure, lisibilité, sécurité, tests.
- Qualité technique : architecture, code, tests, déploiement.
- Respect du cahier des charges : fonctionnalités, MVP, options.
- Maîtrise individuelle du projet dans son ensemble.
- Documentation : complétude, clarté, accessibilité.
- Déploiement : automatisation, reproductibilité, environnement.
- Présentation : clarté, démonstration, réponses aux questions.
- Travail d'équipe : répartition des tâches, autonomie, gestion de projet.
- Posture professionnelle.

La répartition précise des rôles techniques n'est pas un critère en soi ; ce qui compte est la cohérence de votre organisation et votre capacité à produire un projet de niveau CDA.

## 10. Autonomie d'organisation du groupe

Le présent CDC ne définit pas de rôles techniques imposés. Il vous appartient de définir vousmêmes votre organisation interne, de l'adapter au fil du projet et de pouvoir l'expliquer en soutenance.

C'est cette capacité à vous auto-organiser et à mener un projet complet qui est au cœur de la logique du titre CDA.

## 11. Ressources et références

- [o Référentiel de certification CDA : RNCP 01281 : https://www.francecompetences.fr/recherche/rncp/37873/](https://www.francecompetences.fr/recherche/rncp/37873/)
- Outils recommandés : Figma, GitHub, Docker, Swagger, Trello/Jira, Postman
