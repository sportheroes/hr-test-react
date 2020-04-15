# Sport Heroes - Test front-end

## Requirements

- nodejs v10.x (https://nodejs.org/en/)
- yarn latest (https://yarnpkg.com/fr/docs/install)

## Démarrer le projet

```
yarn
yarn start
```

## A garder en tête

- Les composants doivent être découpés de manière à être ré-utilisés (dans une app React Native par exemple).
- Les [styled components](https://styled-components.com/docs/basics), c'est pas mal.
- Encore plus que le résultat, l'architecture de code est importante !
- Les assets nécessaires sont présents dans le répertoire `public/`.

## Exercice

![image](https://p72.f4.n0.cdn.getcloudapp.com/items/X6uOJArD/Image%202020-04-15%20at%201.05.16%20PM.png?v=35266ab0f515f049d8bc6461d0d7f029)

Grâce au call API documenté dans `App.js`, créer un feed d'activités simple comprenant :

- Un icone du type d'activité.
- Une durée dans un format correct (2h01).
- Une distance dans un format correct (42,2 km).
- En fonction du type de sport, un nombre de pas.
- Les points acquis grâce à l'activité.
- Les crédits correspondants (1 crédit = 5 points).
- Une date dans un format correct ("aujourd'hui" ou "16/10").

### Bonus : 

- 🚀 Créer une pagination (par un lien simple ou un infinite scroll) pour voir les activités antérieures.
- 🤔 Que faire dans ce fichier `App.test.js` ? 
- 🛍️ Et Redux dans tout ça ? 
