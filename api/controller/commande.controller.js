const Database = require('../database/database_manager')
const database = new Database;

class Commande {

  passeCommande(data) {
    return new Promise((resolve, reject) => {
      database.insert("commande", data)
      .then(res => resolve(res)).catch(err => reject(err));
    })
  }

  changeStatus(id_commande, id_status) {
    return new Promise((resolve, reject) => {
      database.update("commande", {id_status}, `id_commande = ${id_commande}`)
      .then(res => resolve(res)).catch(err => reject(err));
    })
  }

  get() {
    return new Promise((resolve, reject) => {
      database.select("view_commande")
      .then(res => resolve(res)).catch(err => reject(err));
    })
  }

  getById(id_commande) {
    return new Promise((resolve, reject) => {
      database.select("view_commande", "*", `id_commande = ${id_commande}`)
      .then(res => resolve(res[0])).catch(err => reject(err));
    })
  }

  getUserCommande(id_acheteur) {
    return new Promise((resolve, reject) => {
      database.select("view_commande", "*", `id_acheteur = ${id_acheteur}`)
      .then(res => resolve(res[0])).catch(err => reject(err));
    })
  }

  getCommandeProduit(id_commande) {
    return new Promise((resolve, reject) => {
      database.select("view_commande_produit", "*", `id_commande = ${id_commande}`)
      .then(res => resolve(res)).catch(err => reject(err));
    })
  }

  getFacture() {
    return new Promise((resolve, reject) => {
      database.select("facture").then(res => resolve(res)).catch(err => reject(err));
    })
  }

  getUserFacture(id_acheteur) {
    return new Promise((resolve, reject) => {
      database.select("facture", "*", `id_acheteur = ${id_acheteur}`)
      .then(res => resolve(res)).catch(err => reject(err));
    })
  }

  getUserDetailFacture(numero_facture) {
    return new Promise((resolve, reject) => {
      database.select("view_facture", "*", `numero_facture = ${numero_facture}`)
      .then(res => resolve(res)).catch(err => reject(err));
    })
  }

  generateFacture(numero_facture) {
    return new Promise((resolve, reject) => {
      this.getUserDetailFacture(numero_facture).then(res => {
        // traitement pdf
        resolve("En attente");
      }).catch(err => reject(err));
    })
  }

}

module.exports = Commande;
