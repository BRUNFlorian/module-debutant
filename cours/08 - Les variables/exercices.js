/*
 * Tapez votre code sous chacun des commentaires.
 * Vous devez faire les exercices dans l'ordre !
 *
 * Si vous rencontrez un bogue, contactez-moi par email à l'adresse
 * jeremy@javascriptdezero.com.
 *
 * Merci et bon courage ! 🤘
 */

// Les instructions try (juste après) et catch (à la fin de ce fichier) permettent d'intercepter
// les erreurs JavaScript que vous allez devoir corriger dans ces exercices !
// Ne supprimez pas la ligne suivante
try {
  // -- Début des exercices, vous pouvez modifier le fichier à partir d'ici
  // Chassez le bogue 0
  // Décommentez le code suivant pour faire l'exercice
  let nomParc = "Le Royaume Magique";
  console.log("Bienvenue au parc d'attractions " + nomParc);

  // Chassez le bogue 1
  // Décommentez le code suivant pour faire l'exercice
  let clientsHier = 359;
  let clientsAujourdhui = 374;
  let totalClients = clientsHier + clientsAujourdhui;
  console.log(totalClients);

  // Chassez le bogue 2
  // Décommentez le code suivant pour faire l'exercice
  let nombreDeCases = 64;
  let surfaceCase = 2;
  let superficie = nombreDeCases * surfaceCase;
  console.log("Superficie du plateau : " + superficie + "m2");

  // Chassez le bogue 3
  // Décommentez le code suivant pour faire l'exercice
  let heure = 13;
  let minutes = 37;
  let separateur = "h";
  let horaire = heure + separateur + minutes;
  console.log("Bienvenue, il est " + horaire);

  // -- Fin des exercices, ne touchez pas au code suivant
  // Ne supprimez pas les instructions suivantes
} catch (erreur) {
  console.log(`<code>${erreur}</code>
<p class="attention">L'interpréteur JavaScript a détécté une erreur dans votre code... Zut alors !
=> Le but du jeu va être de corriger cette erreur ! Pensez à utiliser la console développeur de Chrome pour trouver le bogue. Bonne chance 👍</p>`);
  throw erreur;
}
