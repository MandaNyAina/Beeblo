const Database = require('../database/database_manager')
const database = new Database;
const fn = require('../modules/custom_function');
const C = require('../modules/constante');
require('dotenv').config();

class Livraison {

  create(table, data) {
    return new Promise((resolve, reject) => {
      database.insert(table, data)
      .then(res => resolve(res)).catch(err => reject(err));
    })
  }

  changeStatus(id_livraison, id_status) {
    return new Promise((resolve, reject) => {
      database.update("livraison", {id_status}, `id_livraison = ${id_livraison}`)
      .then(res => resolve(res)).catch(err => reject(err));
    })
  }

  get(table) {
    return new Promise((resolve, reject) => {
      database.select(table)
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

  changeStatusTypeLivraison(id_type_livraison, id_status) {
    return new Promise((resolve, reject) => {
      database.update("livraison_type", {id_status}, `id_type_livraison = ${id_type_livraison}`)
      .then(res => resolve(res)).catch(err => reject(err));
    })
  }

  getByIdTypeLivraison(id_type_livraison) {
    return new Promise((resolve, reject) => {
      database.select("view_type_livraison", "*", `id_type_livraison = ${id_type_livraison}`)
      .then(res => resolve(res[0])).catch(err => reject(err));
    })
  }

  changeStatusLivreur(id_livreur, id_status) {
    return new Promise((resolve, reject) => {
      database.update("livreur", {id_status}, `id_livreur = ${id_livreur}`)
      .then(res => resolve(res)).catch(err => reject(err));
    })
  }

  getByIdLivreur(id_livreur) {
    return new Promise((resolve, reject) => {
      database.select("view_livreur", "*", `id_livreur = ${id_livreur}`)
      .then(res => resolve(res[0])).catch(err => reject(err));
    })
  }

}

module.exports = Livraison;
