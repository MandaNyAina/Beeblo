const Database = require('../database/database_manager')
const database = new Database;
const fn = require('../modules/custom_function');
const C = require('../modules/constante');
require('dotenv').config();

class Livraison {

  create(data) {
    return new Promise((resolve, reject) => {
      database.insert("livraison", data)
      .then(res => resolve(res)).catch(err => reject(err));
    })
  }

  changeStatus(id_livraison, id_status) {
    return new Promise((resolve, reject) => {
      database.update("livraison", {id_status}, `id_livraison = ${id_livraison}`)
      .then(res => resolve(res)).catch(err => reject(err));
    })
  }

  get() {
    return new Promise((resolve, reject) => {
      database.select("view_livraison")
      .then(res => resolve(res)).catch(err => reject(err));
    })
  }

  getById(id_livraison) {
    return new Promise((resolve, reject) => {
      database.select("view_livraison", "*", `id_livraison = ${id_livraison}`)
      .then(res => resolve(res[0])).catch(err => reject(err));
    })
  }

  getLivraisonCommande() {
    return new Promise((resolve, reject) => {
      database.select("view_livraison_commande", "*", `id_livraison = ${id_livraison}`)
      .then(res => resolve(res[0])).catch(err => reject(err));
    })
  }

  getLivraisonCommandeById(id_livraison) {
    return new Promise((resolve, reject) => {
      database.select("view_livraison_commande", "*", `id_livraison = ${id_livraison}`)
      .then(res => resolve(res[0])).catch(err => reject(err));
    })
  }

}

module.exports = Livraison;
