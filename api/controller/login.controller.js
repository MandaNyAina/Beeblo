const Database = require('../database/database_manager')
const database = new Database;
const fn = require('../modules/custom_function');
const C = require('../modules/constante');
require('dotenv').config();

class Login {

  constructor() {}

  create(data) {
    return new Promise((resolve, reject) => {
      data.mot_de_passe = fn.signPassword(data.mot_de_passe);
      database.insert("utilisateur", data).then(
        res => {
          resolve(res);
        }
      ).catch(err => reject(err));
    })
  }

  resetPassword(id_user, new_password) {
    return new Promise((resolve, reject) => {
      database.update('utilisateur', {mot_de_passe: fn.signPassword(new_password)}, `id_user = ${id_user}`)
      .then(res => resolve(res)).catch(err => reject(err));
    })
  }

  disableAccount(id_user) {
    return new Promise((resolve, reject) => {
      database.update('utilisateur', {id_status: C.status.COMPTE_KO}, `id_user = ${id_user}`)
      .then(res => resolve(res)).catch(err => reject(err));
    })
  }

  authAsAdmin(data) {
    return new Promise((resolve, reject) => {
      const username = data.nom_utilisateur;
      database.select("utilisateur", "id_user, mot_de_passe, id_status, id_groupe", `nom_utilisateur = '${username}'`)
      .then((res) => {
        if (res.length == 0) reject(C.connexion.USER_INEXISTE);
        let source_password = data.mot_de_passe.split("(%%)");
        if (source_password[0] != "from_beeblo_app") reject("Unkown source connexion");
        data.mot_de_passe = source_password[1];
        let check_password = fn.matchPassword(data.mot_de_passe, res[0].mot_de_passe);
        if (!check_password) reject(C.connexion.PASSWORD_ERROR);
        let status = res[0].id_status;
        switch (status) {
          case C.status.COMPTE_IN:
            reject(C.connexion.COMPTE_IN);
            break;

          case C.status.COMPTE_SUSP:
            reject(C.connexion.COMPTE_SUSP);
            break;

          case C.status.COMPTE_KO:
            reject(C.connexion.COMPTE_KO);
            break;

          case C.status.COMPTE_OK:
            database.select("view_admin", "*", `id_login = ${res[0].id_user}`)
            .then((res) => {
              if (res.length == 0) reject("User admin info not created");
              const token = fn.generateToken(res[0])
              resolve({ token, data: res[0] });
            }).catch(err => reject(`Unable to get admin info : ${err}`));
            break;
        }
      }).catch(err => reject(`Unable to get username : ${err}`));
    })
  }

  authAsAcheteur(data) {
    return new Promise((resolve, reject) => {
      const email_acheteur = data.email_acheteur;
      database.select("acheteur", "id_acheteur, nom_acheteur, prenom_acheteur, email_acheteur, numero_client_acheteur, adresse_acheteur, code_postal, ville_acheteur, pays_acheteur, etat_acheteur, date_inscription_acheteur, id_status", `id_acheteur = ${email_acheteur}`)
      .then(res => {
        if (res.length == 0) reject(C.connexion.USER_INEXISTE);
        let source_password = data.mot_de_passe.split("(%%)");
        if (source_password[0] != "from_beeblo_app") reject("Unkown source connexion");
        data.mot_de_passe = source_password[1];
        let check_password = fn.matchPassword(data.mot_de_passe, res[0].mot_de_passe);
        if (!check_password) reject(C.connexion.PASSWORD_ERROR);
        let status = res[0].id_status;
        switch (status) {
          case C.status.COMPTE_IN:
            reject(C.connexion.COMPTE_IN);
            break;

          case C.status.COMPTE_SUSP:
            reject(C.connexion.COMPTE_SUSP);
            break;

          case C.status.COMPTE_KO:
            reject(C.connexion.COMPTE_KO);
            break;

          case C.status.COMPTE_OK:
            const token = fn.generateToken(res[0]);
            resolve({ token, data: res[0] });
            break;
        }
      }).catch(err => reject(err));
    })
  }
}

module.exports = Login;
