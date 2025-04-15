# MonPremierLab - Création d'une API REST avec Node.js et Express : Solution

Ceci est une solution à l'atelier [Création d'une API REST avec Node.js et Express de MonPremierLab](#).

## Table des matières

- [MonPremierLab - Création d'une API REST avec Node.js et Express : Solution](#monpremierlab---création-dune-api-rest-avec-nodejs-et-express--solution)
  - [Table des matières](#table-des-matières)
  - [Aperçu](#aperçu)
    - [Le challenge](#le-challenge)
    - [Capture d’écran](#capture-décran)
    - [Liens](#liens)
  - [Mon processus](#mon-processus)
    - [Construit avec](#construit-avec)
    - [Ce que j’ai appris](#ce-que-jai-appris)
    - [Développement futur](#développement-futur)
    - [Ressources utiles](#ressources-utiles)
  - [Auteur](#auteur)
  - [Remerciements](#remerciements)

---

## Aperçu

### Le challenge

Il était question de  mettre sur pied une API REST de base.

### Capture d’écran

![Capture d’écran de votre solution](./p/Screenshot%202025-04-15%20135254.png)

### Liens

- Solution URL : [Dépôt git](https://github.com/warano02/monPremierLab-manage-stock)
- API Live URL : [Ajoutez l’URL où votre API est hébergée, si applicable]([Insérez le lien])

---

## Mon processus

### Construit avec

- Nodejs
- Express
- Insomnia

### Ce que j’ai appris

Mise en place de la logique de base du fichier de paramétrage d'une API REST

```javascript
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

// Middleware pour parser les requêtes JSON
app.use(express.json());

// Route racine par défaut
app.get('/', (req, res) => {
  res.send('<strong>MonPremierLab</strong> : Bienvenue et merci de votre participation à ce challenge !');
});

// Importation des routes
const routes = require('./routes/index');
app.use('/api', routes);

// Lancement du serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
```

### Développement futur

Implementer avec une base de donnée réelle

---

## Auteur

- GitHub - [@Warano02](https://github.com/warano02)
- LinkedIn - [@votreusername]([Insérez le lien vers votre profil LinkedIn, si applicable])

---
