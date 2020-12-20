const Database = require("../database/database_manager");
const Login = require("./login.controller");
const database = new Database;
const login = new Login;
const C = require("../modules/constante");

class Admin {

  create(data) {
    return new Promise((resolve, reject) => {
      const user_login = {
        nom_utilisateur: data.nom_utilisateur,
        mot_de_passe: data.mot_de_passe,
        id_status: C.status.COMPTE_OK,
        id_groupe: data.groupe
      };
      login.create(user_login).then(async (res) => {
        const user_login_id = await database.execute("SELECT id_user FROM utilisateur ORDER BY id_user DESC LIMIT 1")[0]['id_user'];
        const admin_info = {
          nom_administrateur: data.nom_administrateur,
          prenom_administrateur: data.prenom_administrateur,
          id_login: user_login_id
        };
        database.insert(admin_info).then(res => resolve(res)).catch(err => reject(err));
      }).catch(err => `Unable to create account for admin : ${err}`)
    })
  }

}

module.exports = Admin;
