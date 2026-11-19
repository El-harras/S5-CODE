# Découpage du travail — Sprint S5

## 1. Mission globale

Créer une page PHP modulaire qui charge 3 articles depuis un tableau PHP et les affiche sur la page d’accueil du Blog.

## 2. Plan des sous-tâches

### Étape 1 — Préparer les données
- **Action :** Créer un tableau PHP contenant 3 articles.
- **Fichier :** `data/articles.php`
- **Validation :** Le tableau `$articles` contient 3 articles valides.

### Étape 2 — Créer une fonction
- **Action :** Créer une fonction qui reçoit un article et retourne son HTML.
- **Fichier :** `includes/functions.php`
- **Validation :** Le HTML contient le titre et le résumé de l’article.

### Étape 3 — Intégrer les articles
- **Action :** Inclure les fichiers nécessaires et utiliser une boucle `foreach`.
- **Fichier :** `index.php`
- **Validation :** Les 3 articles sont parcourus sans erreur PHP.

### Étape 4 — Effectuer les tests
- **Action :** Vérifier l’affichage dans le navigateur.
- **Fichier :** Navigateur Web
- **Validation :** Les 3 articles s’affichent correctement, sans erreur PHP.

## 3. Vérification finale

La dernière étape consiste à effectuer une recette visuelle pour vérifier que tous les articles sont correctement affichés sur la page d’accueil du Blog.