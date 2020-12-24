const Database = require('../database/database_manager')
const database = new Database;


class Panier {

    create(data) {
      return new Promise((resolve, reject) => {
        database.insert("panier", data).then(res => resolve(res)).catch(err => reject(err));
      })
    }

    getUserPanier(id_acheteur) {
      return new Promise((resolve, reject) => {
        database.select("view_panier", "*", `id_acheteur = ${id_acheteur}`)
        .then(res => resolve(res)).catch(err => reject(err));
      })
    }

    addToPanier(id_acheteur, data) {
      return new Promise((resolve, reject) => {
        this.getUserPanier(id_acheteur).then(res => {
          if (res.length == 0) {
            let new_panier = {
              prix_total_panier:0,
              id_acheteur,
              termine:0
            };
            this.create(new_panier).then(res => {
              try {
                this.getUserPanier(id_acheteur).then(res => {
                  let panier_produit = {
                    id_panier: res[0].id_panier,
                    id_produit: data.id_produit,
                    quantite: data.quantite
                  }
                  if (data.quantite < 0 || Number.isNaN(data.quantite)) reject(`Invalid quantite value`);
                  database.insert("panier_produit", panier_produit)
                  .then(res => resolve(res)).catch(err => reject(err));
                }).catch(err => reject(`Error when get panier after insert : ${err}`));
              } catch (error) {
                reject(`Error when get panier after insert : ${err}`)
              }
            }).catch(err => reject(`Error when create a new panier : ${err}`))
          } else {
            try {
              let panier_produit = {
                id_panier: res[0].id_panier,
                id_produit: data.id_produit,
                quantite: data.quantite
              }
              if (data.quantite < 0 || Number.isNaN(data.quantite)) reject(`Invalid quantite value`);
              database.insert("panier_produit", panier_produit)
              .then(res => resolve(res)).catch(err => reject(err));
            } catch (err) {
              reject(`Error when add on panier if panier exist : ${err}`);
            }
          }
        }).catch(err => reject(`Error when get user panier : ${err}`));
      })
    }

    update(id_panier, id_produit , data) {
      return new Promise((resolve, reject) => {
        database.update("panier_produit", data, `id_panier = ${id_panier} AND id_produit = ${id_produit}`)
        .then(res => resolve(res)).catch(err => reject(err));
      })
    }

    delete(id_panier, id_produit) {
      return new Promise((resolve, reject) => {
        database.delete("panier_produit", `id_panier = ${id_panier} AND id_produit = ${id_produit}`)
        .then(res => resolve(res)).catch(err => reject(err));
      })
    }

}

module.exports = Panier;
