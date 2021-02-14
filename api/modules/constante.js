module.exports.status = {
  COMPTE_IN : 1,
  COMPTE_OK : 2,
  COMPTE_SUSP : 3,
  COMPTE_KO : 4,
  PRODUIT_STOCK_OK : 5,
  PRODUIT_STOCK_KO : 6,
  PRODUIT_INDIS : 7,
  PRODUIT_SUSP : 8,
  LIVRAISON_EN : 9,
  LIVRAISON_OK : 10,
  LIVRAISON_ANN : 11,
  LIVRAISON_BLK : 12,
  COMMANDE_EN : 13,
  COMMANDE_ANN : 14,
  COMMANDE_PAYE : 15,
  MENU_ACTIVE: 16,
  MENU_DESACTIVE: 17,
  MENU_MAINTENANCE: 18,
  LIVREUR_DISPO: 19,
  LIVREUR_INDISPO: 20,
  LIVREUR_DESACTIVE: 21,
  TYPE_LIVRAISON_ACTIVE: 22,
  TYPE_LIVRAISON_DESACTIVE: 23,
  CATEGORIE_ACTIVE: 24,
  CATEGORIE_DESACTIVE: 25,
  CARACTERISTIQUE_ACTIVE: 26,
  CARACTERISTIQUE_DESACTIVE: 27,
}

module.exports.groups = {
  ADMINISTRATEUR: 1,
  OPERATEUR: 2
}

module.exports.connexion = {
  USER_EXIST : "L'utilisateur existe déjà",
  USER_INEXISTE : "L'utilisateur n'existe pas",
  PASSWORD_ERROR : "Mot de passe incorrect",
  COMPTE_IN : "Votre compte est inactif",
  COMPTE_SUSP : "Votre compte est suspendu",
  COMPTE_KO : "Votre compte est bloqué",
  COMPTE_INTROUVABLE : "Compte introuvable"
}

module.exports.promotion = {
  PROMOTION_PRODUIT : "Promotion sur un produit",
  PROMOTION_ACHETEUR : "Promotion cadeau par code promotionnel"
}
