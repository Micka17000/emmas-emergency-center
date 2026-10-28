# Emma’s Emotional Emergency Center

Mini-expérience mobile en anglais américain pour les mugs Emma’s Little Things. HTML, CSS et JavaScript natifs : aucun build, aucune API, aucune base de données, aucun abonnement, aucun suivi, aucun cookie applicatif et aucune dépendance distante. L’hébergeur GitHub peut conserver ses propres journaux techniques.

## Fichiers

- `index.html` : structure, quatre catégories et boutons.
- `style.css` : palette rose poudré/crème/cerise, responsive et animation avec respect de la préférence de mouvement réduit.
- `script.js` : 40 réponses (10 par catégorie), tirage mélangé sans répétition dans chaque série de dix, sans doublon immédiat entre séries. Aucun stockage persistant.
- `icon.svg` : favicon local.
- `.nojekyll` : publication statique directe sur GitHub Pages.

## Tester et maintenir

Ouvrir `index.html` dans un navigateur pour un test simple. Pour un serveur local, depuis ce dossier : `python -m http.server 8765`, puis ouvrir `http://localhost:8765`. Python est seulement un outil de prévisualisation, jamais une dépendance du site.

Modifier les textes dans les quatre listes de `script.js`, conserver dix chaînes par catégorie et vérifier les apostrophes/guillemets. Modifier les couleurs dans `:root` de `style.css`. Le contenu doit rester humoristique et bienveillant, sans conseil médical ni promesse thérapeutique.

Après une modification : parcourir les quatre catégories, demander dix réponses différentes par catégorie, vérifier le bouton retour, le clavier, une largeur de 320 px et un téléphone. Publier les fichiers à la racine de la branche `main`. Dans Settings → Pages : Deploy from a branch → `main` → `/ (root)` → Save. Attendre la fin du déploiement puis vérifier la page publique en navigation privée.

## Conserver l’URL imprimée

Le dépôt de publication est `Micka17000/emmas-emergency-center`. Garder ce propriétaire, ce nom de dépôt, la branche de publication et `index.html` à la racine. Ne pas supprimer le dépôt, désactiver Pages ou changer l’adresse après impression. Le contenu peut évoluer sans changer le QR code tant que l’URL reste identique. La continuité dépend du maintien du compte GitHub et de son service Pages.

## Sauvegarder et restaurer

Après chaque mise à jour, utiliser Code → Download ZIP sur GitHub et conserver une copie datée sur deux supports distincts. L’historique des commits permet aussi de revenir à une version antérieure. Avec Git : `git clone https://github.com/Micka17000/emmas-emergency-center.git`, puis `git pull` pour actualiser une copie existante.

Pour restaurer, remettre les fichiers de la dernière sauvegarde à la racine de `main`, puis vérifier Settings → Pages. Conserver aussi le PNG du QR code avec la sauvegarde. Avant toute production de mugs, scanner un échantillon imprimé à sa taille réelle sur une surface courbe avec plusieurs téléphones ; conserver la marge blanche et ne pas déformer le QR code.

Le QR code définitif doit être créé uniquement à partir de l’URL publique vérifiée. Le fichier de bilan fourni avec la livraison distingue les tests effectués des vérifications physiques restant à faire.
