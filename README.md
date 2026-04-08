# 📘 TP 1 : Création d'une application React simple

## 📚 Cours

Développement Front-End moderne avec React

---

## 🎯 Objectif du TP

Ce TP a pour objectif de découvrir les bases de React à travers la création d'une application simple.

À la fin de ce TP, nous avons appris à :

* Initialiser un projet React avec Create React App
* Créer des composants fonctionnels avec JSX
* Utiliser les props pour transmettre des données dynamiques
* Générer des listes d'éléments automatiquement avec la méthode `.map()`
* Structurer une application React et lui appliquer un design CSS moderne

---

## ⚙️ Installation et lancement

### 1. Prérequis

* Node.js installé
* npm installé

Vérification :

    node -v
    npm -v

---

### 2. Création du projet

    npx create-react-app tp-react
    cd tp-react
    npm install prop-types
    npm start

Application accessible sur :

    http://localhost:3000

---

## 🧱 Structure du projet

    src/
    ├── App.js
    ├── HelloWorld.js
    ├── Greeting.js
    ├── Profil.js
    ├── Voiture.js
    ├── ListeCourses.js
    ├── index.js


---

## 🧩 Description des composants

### 🔹 HelloWorld

Affiche un message de bienvenue simple :

    Salut tout le monde !

---

### 🔹 Greeting

Affiche un message personnalisé grâce aux props :

    Bienvenue parmi nous, Yassine !

---

### 🔹 Profil

Affiche :

* une image utilisateur (importée depuis le dossier public)
* le nom de l'utilisateur (Emma Lopez)

Utilisation de **PropTypes** pour sécuriser les données de l'objet.

---

### 🔹 Voiture

Affiche les informations d’une voiture (marque, modèle, couleur).
Nous avons utilisé `.map()` pour afficher un tableau entier de véhicules :

    Véhicule : Dacia Sandero, Couleur : Gris
    Véhicule : Peugeot 208, Couleur : Rouge
    Véhicule : Hyundai Tucson, Couleur : Noir

---

### 🔹 ListeCourses

Affiche une liste dynamique d’éléments à partir d'un tableau.
Le composant a été réutilisé 3 fois pour afficher différentes catégories :

    1. Banane
    2. Ananas
    3. Mangue

---

## 🧠 Concepts utilisés

### ✔ Composants

Permettent de découper l’interface en parties indépendantes et réutilisables.

### ✔ Props

Permettent de transmettre des données (textes, tableaux, objets) entre les composants parents et enfants.

### ✔ JSX

Syntaxe qui permet d’écrire du HTML directement dans le JavaScript.

### ✔ PropTypes

Permet de vérifier strictement le type des données reçues pour éviter les bugs.

---

## 🎨 Design

Une refonte visuelle complète a été appliquée via `index.css` avec :

* l'intégration de la police Google "Poppins"
* des cartes (cards) blanches sur un fond gris clair
* des ombres légères (box-shadow) pour faire ressortir le profil
* une disposition en Flexbox pour aligner les listes de courses côte à côte

---

## ✅ Résultat final

L'application affiche :

* un message d'accueil personnalisé
* un profil utilisateur avec une image bien cadrée
* une liste générée dynamiquement de 3 voitures
* 3 listes de courses disposées horizontalement

  
<img width="813" height="1533" alt="image" src="https://github.com/user-attachments/assets/0c828f72-4791-46d3-9036-fe940aeb0a53" />


---

## ⚠️ Problèmes rencontrés

* **Image cassée :** L'image d'Emma Lopez ne s'affichait pas. Corrigé en modifiant l'extension dans le code (`/user.jpeg` au lieu de `/user.png`).
* **Erreur ENOENT au lancement :** Le terminal ne trouvait pas le `package.json` car j'avais déplacé le projet dans mon dossier de cours (S6). Corrigé en ouvrant le bon dossier racine avec VS Code.
* **Confusion de serveur :** J'ai pensé qu'il fallait mettre le projet dans le dossier `htdocs` d'Apache. J'ai compris que React utilise son propre serveur Node.js via `npm start`.

---

## 🏁 Conclusion

Ce TP m'a permis de comprendre la logique fondamentale de React. J'ai pu constater la puissance de la réutilisabilité des composants (notamment en passant d'une seule voiture à une liste complète) et j'ai appris à corriger des erreurs courantes d'environnement.

---

