 # PREMIER PROJET REACT: LISTE DE PRODUITS
 ---
## I.Présentation du projet

J'ai réalisé ce projet à l'aide de la vidéo de Grafikart sur Youtube, mais cet exercice vient surtout de la documentation du site de React.

### Principe
--> Le but est de créer un tableau montrant un stock d'aliments dans un tableau avec comme données son nom, son prix, sa catégorie, et sa disponibilité.
### Fonctionnalités
On peut rechercher une catégorie ou un aliment précis en le recherchant ou afficher uniquement les produits en stock en cochant la case.
### Résultat
À la fin on obtient ceci: 
![Screenshot](/assets/final_tab.png)

---
## II.Organisation du projet et du code

### Projet

Le projet se découpe en deux parties: 
- La barre de recherche et la "checkbox" (le bouton à cocher)  --> Présent dans le dossier "src/components/forms"
- Notre tableau de produits avec les lignes et le contenu qu'elles contiennent  --> Présent dans le dossier "src/products"
(A noter que c'est notre fichier App.jsx qui va faire le lien entre toutes ces données).

## Code

### Barre de recherche et checkbox:
Je crée deux composants enfants "Checkbox" et "Input" qui vont chacun renvoyer une "</div/>" qui est une balise modélisant une sorte de boîte dans laquelle on peut mettre d'autres balises comme "</input/>", qui va nous permettre d'entrer des informations.

On a alors juste a preciser le type pour avoir une barre de recherche et notre checkbox.

Ces deux composants vont être réunis dans leur composant parent "Search Bar" dans le fichier App.jsx.

### Table de produits
Ici je vais créer deux composants enfants:

"ProductCategoryRow", qui est la ligne qui va contenir la catégorie d'aliment (Fruits, Vegetables...)

"ProductRow", qui est la ligne qui va contenir le nom et le prix ainsi que sa disponibilité (si il n'est plus en stock, donc qu'il est "false", alors on met le nom du produit en rouge).

Ces deux composants vont être réunis dans le composant "ProductTable", qui va afficher notre tableau à l'aide d'une boucle et parcourir nos catégories
puis en rajouter une nouvelle si elle est différente de celle d'avant mais aussi ajouter les éléments (noms, prix...)

## Codage des fonctionnalités
### Barre de recherche
Objectif: Pouvoir taper dans notre barre de recherche ce que l'on souhaite et que notre tableau nous affiche ce que l'on a demandé

> [!NOTE]
> Les composants parents "Search Bar" et "ProductTable" sont réunis dans le composant parent "App".

Résolution: Je définis la valeur de mon input à une chaîne de caractères vide à l'aide du hook "useState" et j'associe un "setter" afin de prendre mon nouvel input
et de vérifier à l'aide d'un évènement si ce que je rentre dans ma barre de recherche correspond au nom d'un des produits.

Si c'est le cas je return true et j'affiche uniquement les produits demandées, sinon je return false et je ne les affiche pas.

> [!TIP]
> Un hook est une fonction JavaScript déjà implémentée dans la librairie React (elles commencent toutes par "use")

> Un "setter" va permettre de modifier la valeur d'une variable sans créer d'incohérences dans le rafraichissement de notre affichage et permet une meilleure lisibilité de code

### Checkbox
Objectif: Pouvoir afficher uniquement les produits en stock et donc supprimer ceux qui ne nous intéresse pas, lorsque je coche la case.

On va procéder de la même manière que pour "SearchBar":
- On définit la valeur de notre case à false donc non cochée avec useState
- J'associe un setter avec un évènement et on vérifie si notre produit est en stock si ce n'est pas le cas, je return false et donc je n'affiche pas les aliments qui ne sont pas en stock.

J'arrive donc pour ces deux fonctionnalités à n'afficher que ce qui est intéressant à l'aide de la fonction filter qui va supprimer des éléments dans ma liste et donc ne va pas les afficher.
Je la stocke dans une variable qui va être la valeur de ma "productTable", qui réunit toutes les informations de mes données.

Conclusion:
- Pour le tester, si vous avez npm et react déja installés, il vous suffit de clone ce repo et de lancer "npm start" pour voir le résultat.
