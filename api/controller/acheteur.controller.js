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
      let check_user = await database.select("acheteur", "id_acheteur", `email_acheteur = '${data.email_acheteur}'`);
      if (check_user.length) {
        reject(C.connexion.USER_EXIST);
      } else {
        data.mot_de_passe_acheteur = await fn.signPassword(data.mot_de_passe_acheteur);
        database.insert("acheteur", data).then(res => resolve(res)).catch(err => reject(err));
      }
    })
  }

  changePassword(id_acheteur, new_password) {
    return new Promise(async (resolve, reject) => {
      database.update("acheteur", {mot_de_passe_acheteur: await fn.signPassword(new_password)}, `id_acheteur = ${id_acheteur}`)
      .then(res => resolve(res)).catch(err => reject(err));
    })
  }

  sendNewPassword(email) {
    return new Promise((resolve, reject) => {
      database.select("acheteur", "id_acheteur", `email_acheteur = '${email}'`)
      .then(async (res) => {
        if (res.length == 0) {
          reject(C.connexion.COMPTE_INTROUVABLE);
        } else {
          let new_password = await fn.encrypt(fn.generatePassword(8));
          let acheteur_name = res[0].nom_acheteur;
          let read_template = await fs.readFile("../mailing/template/reset_password.html", "utf8");
          let template = hs.compile(read_template);
          let template_html = template({ acheteur_name, new_password });
          mail.send("Reset password", email, template_html);
          this.changePassword(res[0].id_acheteur, new_password)
          .then(res => resolve(res)).catch(err => reject(err));
        }
      }).catch(err => reject(err));
    })
  }

  update(id_acheteur, data) {
    return new Promise((resolve, reject) => {
      database.update("acheteur", data, `id_acheteur = ${id_acheteur}`)
      .then(res => resolve(res)).catch(err => reject(err));
    })
  }

  get() {
    return new Promise((resolve, reject) => {
      database.select("view_acheteur", '*', `etat_acheteur = 1`).then(res => resolve(res)).catch(err => reject(err));
    })
  }

  getById(id_acheteur) {
    return new Promise((resolve, reject) => {
      database.select("view_acheteur", "*", `id_acheteur = ${id_acheteur}`)
      .then(res => resolve(res[0])).catch(err => reject(err));
    })
  }

  deleteAccount(id_acheteur) {
    return new Promise((resolve, reject) => {
      database.delete("acheteur", `id_acheteur = ${id_acheteur}`)
      .then(res => resolve(res)).catch(err => reject(err));
    })
  }

  addTypeAcheteur(data) {
    return new Promise((resolve, reject) => {
      database.insert("type_acheteur", data)
      .then(res => resolve(res)).catch(err => reject(err));
    })
  }

  getAllTypeAcheteur() {
    return new Promise((resolve, reject) => {
      database.select("type_acheteur")
      .then(res => resolve(res)).catch(err => reject(err));
    })
  }

  getByIdTypeAcheteur(id_type_client) {
    return new Promise((resolve, reject) => {
      database.select("type_acheteur", "*", `id_type_acheteur = ${id_type_client}`)
      .then(res => resolve(res[0])).catch(err => reject(err));
    })
  }

  updateTypeAcheteur(id_type_client, data) {
    return new Promise((resolve, reject) => {
      database.update("type_acheteur", data, `id_type_acheteur = ${id_type_client}`)
      .then(res => resolve(res)).catch(err => reject(err));
    })
  }

  deleteTypeAcheteur(id_type_client) {
    return new Promise((resolve, reject) => {
      database.delete("type_acheteur", `id_type_acheteur = ${id_type_client}`)
      .then(res => resolve(res)).catch(err => reject(err));
    })
  }

}

module.exports = Acheteur;
