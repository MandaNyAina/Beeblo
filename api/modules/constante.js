module.exports.status = {
  COMPTE_IN = 1,
  COMPTE_OK = 2,
  COMPTE_SUSP = 3,
  COMPTE_KO = 4,
  PRODUIT_STOCK_OK = 5,
  PRODUIT_STOCK_KO = 6,
  PRODUIT_INDIS = 7,
  PRODUIT_SUSP = 8,
  LIVRAISON_EN = 9,
  LIVRAISON_OK = 10,
  LIVRAISON_ANN = 11,
  LIVRAISON_BLK = 12,
  COMMANDE_EN = 13,
  COMMANDE_ANN = 14,
  COMMANDE_PAYE = 15
}

module.exports.groups = {
  ADMINISTRATEUR: 1,
  OPERATEUR: 2
}

module.exports.connexion = {
  USER_INEXISTE = "L'utilisateur n'exist pas",
  PASSWORD_ERROR = "Mot de passe incorrect",
  COMPTE_IN = "Votre compte est inactif",
  COMPTE_SUSP = "Votre compte est suspendu",
  COMPTE_KO = "Votre compte est bloqué",
}
