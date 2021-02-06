const Database = require('../database/database_manager')
const database = new Database;

class Promotion {

  create(data) {
    return new Promise((resolve, reject) => {
      database.insert("promotion", data).then(res => resolve(res)).catch(err => reject(err));
    })
  }

  update(id_promotion, data) {
    return new Promise((resolve, reject) => {
      database.update("promotion", data, `id_promotion = ${id_promotion}`)
      .then(res => resolve(res)).catch(err => reject(err));
    })
  }

  delete(id_promotion) {
    return new Promise((resolve, reject) => {
      database.select("view_promotion", "*", `id_promotion = ${id_promotion}`)
      .then(res => {
        if (res[0].used) reject("Ne peux plus être supprimé");
        database.delete("promotion", `id_promotion = ${id_promotion}`)
        .then(res => resolve(res)).catch(err => reject(err));
      }).catch(err => reject(err));
    })
  }

  attachProduitPromotion(data) {
    return new Promise((resolve, reject) => {
      let id_produit = data.id_produit;
      database.select("promotion_produit", "*", `id_produit = ${id_produit} AND est_active > 0`)
      .then(res => {
        if (res.length > 0) reject("Une promotion pour ce produit existe déjà");
        database.insert("promotion_produit", data).then(res => resolve(res)).catch(err => reject(err));
      }).catch(err => reject(err));
    })
  }

  attachCommandePromotion(data) {
    return new Promise((resolve, reject) => {
      database.insert("promotion_commande", data).then(res => resolve(res)).catch(err => reject(err));
    })
  }

  verifyCodePromo(code) {
    return new Promise((resolve, reject) => {
      database.select("view_promotion", "id_promotion, reduction_promotion, type_promotion", `code_promotion = upper('${code}') AND used = 0 AND date_expiration_promotion > NOW()`)
      .then(res => {
        if (res.length == 0) reject("Code promo inexistant ou expiré");
        resolve({
          id_promotion: res[0].id_promotion,
          reduction: res[0].reduction_promotion,
          type_promotion: res[0].type_promotion
        });
      }).catch(err => reject(err));
    })
  }

  get(type) {
    return new Promise((resolve, reject) => {
      let where = "";
      switch (type) {
        case "all":
          where = "1";
          break;

        case "unused":
          where = "used = 0";
          break;

        case "used_produit":
          where = "used = 1 AND promo_for_produit > 0";
          break;

        case "used_commande":
          where = "used = 1 AND promo_for_commande > 0";
          break;
      }
      database.select("view_promotion", "*", where).then(res =>resolve(res)).catch(err => reject(err));
    })
  }

  getById(id_promotion) {
    return new Promise((resolve, reject) => {
      database.select("view_promotion", "*", `id_promotion = ${id_promotion}`)
      .then(res => resolve(res[0])).catch(err => reject(err));
    })
  }

  getProduitInPromotion(id_promotion) {
    return new Promise((resolve, reject) => {
      database.select("view_promotion_produit", "*", `id_promotion = ${id_promotion}`)
      .then(res => resolve(res)).catch(err => reject(err));
    })
  }

}

module.exports = Promotion;
