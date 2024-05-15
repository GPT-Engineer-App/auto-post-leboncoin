# auto-post-leboncoin

Nous souhaitons développer une page web permettant à l'utilisateur de publier des annonces sur le site leboncoin.fr de manière semi-automatisée. Voici le cahier des charges pour l'outil requis :

Fonctionnalité principale :

La page web doit offrir à l'utilisateur la possibilité de télécharger jusqu'à trois photos de l'article qu'il souhaite vendre.
Génération automatique de contenu :

À partir des photos téléchargées, l'outil doit automatiquement générer un titre et une description appropriés pour l'annonce, basés sur l'identification visuelle et la catégorisation du produit.
L'outil doit également suggérer un prix de vente idéal en analysant des données comparatives du marché actuel sur leboncoin.fr.
Édition de l'annonce :

Après la génération du titre et de la description, l'utilisateur doit avoir la possibilité de les éditer à sa convenance avant la publication.
Publication de l'annonce :

Un bouton "Publier" doit être intégré. Lorsque l'utilisateur clique sur ce bouton, l'outil doit :
Se connecter automatiquement à son compte leboncoin.fr en utilisant ses identifiants préalablement sauvegardés de manière sécurisée.
Naviguer automatiquement vers la section de dépôt d'annonce.
Remplir les champs de l'annonce avec le titre, la description, et uploader les photos sélectionnées.
Publier l'annonce sur le site.
Sécurité et confidentialité :

Toutes les interactions avec le site leboncoin.fr doivent être sécurisées pour protéger les informations personnelles de l'utilisateur.
L'outil doit être conforme aux normes de sécurité web actuelles pour assurer la protection des données utilisateur.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/auto-post-leboncoin.git
cd auto-post-leboncoin
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
