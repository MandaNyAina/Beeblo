const Database = require('../database/database_manager')
const database = new Database;
const fn = require('../modules/custom_function');
const C = require('../modules/constante');
const Mailing = require('../mailing/mailing');
const mail = new Mailing;
const fs = require('fs');
const hs = require('handlebars');

class Acheteur {

  create(data) {
    return new Promise(async (resolve, reject) => {
      let check_user = database.select("acheteur", "id_acheteur", `email_acheteur = ${data.email_acheteur}`);
      if (!check_user.length) reject(C.connexion.USER_EXIST);
      data.mot_de_passe_acheteur = fn.signPassword(data.mot_de_passe_acheteur);
      database.insert(data).then(res => resolve(res)).catch(err => reject(err));
    })
  }

  changePassword(id_acheteur, new_password) {
    return new Promise((resolve, reject) => {
      database.update("acheteur", {mot_de_passe_acheteur: fn.signPassword(new_password)}, `id_acheteur = ${id_acheteur}`)
      .then(res => resolve(res)).catch(err => reject(err));
    })
  }

  sendNewPassword(email) {
    return new Promise((resolve, reject) => {
      database.select("acheteur", "id_acheteur", `email_acheteur = ${email}`)
      .then(async (res) => {
        if (res.length == 0) reject(C.connexion.COMPTE_INTROUVABLE);
        let new_password = fn.encrypt(fn.generatePassword(8));
        let acheteur_name = res[0].nom_acheteur;
        let read_template = await fs.readFile("../mailing/template/reset_password.html", "utf8");
        let template = hs.compile(read_template);
        let template_html = template({ acheteur_name, new_password });
        mail.send("Reset password", email, template_html);
        this.changePassword(res[0].id_acheteur, new_password)
        .then(res => resolve(res)).catch(err => reject(err));
      }).catch(err => reject(err));
    })
  }

  update(id_acheteur, data) {
    return new Promise((resolve, reject) => {
      database.update("acheteur", data, `id_acheteur = ${id_acheteur}`)
      .then(res => resolve(res)).catch(err => reject(err));
    })
  }

  disableAccount(id_acheteur) {
    return new Promise((resolve, reject) => {
      database.update("acheteur", {id_status: C.status.COMPTE_KO}, `id_acheteur = ${id_acheteur}`)
      .then(res => resolve(res)).catch(err => reject(err));
    })
  }

}

module.exports = Acheteur;
