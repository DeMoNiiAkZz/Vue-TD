# Questions TD4 

## 1. Quelle est la différence entre v-if et v-show ?

La directive conditionnelle "v-if" permet d'ajouter ou de supprimer un élément du DOM en fonction de la condition si elle est vraie ou fausse, tandis que "v-show" permet d'afficher ou de masquer l'élément qui reste dans le DOM dans n'importe quel cas, c'est juste une propriété css  nommée "display" qui switch entre la valeur "none" ou "block"

## 2. Pourquoi utiliser v-model pour les formulaires ?

"v-model" permet de lier un élément dans un formulaire, par exemple 
`  <input type="text" v-model="messageInput" placeholder="ecrire un message ici" />
    <p>vous écrivez : {{ messageInput }}</p>` 
    
## 3. Dans quel cas utiliser une directive personnalisée ? 

On peut utiliser une directive personnalisée 