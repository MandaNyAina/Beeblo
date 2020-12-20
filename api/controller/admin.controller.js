const Database = require("../database/database_manager");
const Login = require("./login.controller");
const database = new Database;
const login = new Login;
const C = require("../modules/constante");

class Admin {

  create(data) {
    return new Promise(async (resolve, reject) => {
      const user_login = {
        nom_utilisateur: data.nom_utilisateur,
        mot_de_passe: data.mot_de_passe,
        id_status: C.status.COMPTE_OK,
        id_groupe: data.groupe
      };
      let exist_user = await database.select("utilisateur", "*", `nom_utilisateur = ${user_login.nom_utilisateur}`)
      if (!exist_user.length) reject(C.connexion.USER_EXIST);
      login.create(user_login).then(async (res) => {
        const user_login_id = await database.execute("SELECT id_user FROM utilisateur ORDER BY id_user DESC LIMIT 1")[0]['id_user'];
        const admin_info = {
          nom_administrateur: data.nom_administrateur,
          prenom_administrateur: data.prenom_administrateur,
          id_login: user_login_id
        };
        database.insert("adminitrateur", admin_info).then(res => resolve(res)).catch(err => reject(err));
      }).catch(err => `Unable to create account for admin : ${err}`)
    })
  }

  update(id_administrateur, data) {
    return new Promise((resolve, reject) => {
      database.update("administrateur", data, `id_administrateur = ${id_administrateur}`)
    })
  }

  get() {
    return new Promise((resolve, reject) => {
      database.select("view_admin").then(res => resolve(res)).catch(err => reject(err));
    })
  }

  getById(id_administrateur) {
    return new Promise((resolve, reject) => {
      database.select("view_admin", "*", `id_administrateur = ${id_administrateur}`)
      .then(res => resolve(res[0])).catch(err => reject(err));
    })
  }

}

module.exports = Admin;
