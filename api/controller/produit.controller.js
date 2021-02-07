const Database = require('../database/database_manager')
const database = new Database;

class Produit {

  create(data) {
    return new Promise((resolve, reject) => {
      database.insert("produit", data).then(res => resolve(res)).catch(err => reject(err));
    })
  }

  update(id_produit, data) {
    return new Promise((resolve, reject) => {
      database.update("produit", data, `id_produit = ${id_produit}`)
      .then(res => resolve(res)).catch(err => reject(err));
    })
  }

  setStatus(id_produit, id_status) {
    return new Promise((resolve, reject) => {
      database.update("produit", {id_status}, `id_produit = ${id_produit}`)
      .then(res => resolve(res)).catch(err => reject(err));
    })
  }

  getAll() {
    return new Promise((resolve, reject) => {
      database.select("view_produit").then(res => resolve(res)).catch(err => reject(err));
    })
  }

  get(page, block = 12) {
    return new Promise((resolve, reject) => {
      let begin = (page == 1 ? 0 : page - 1) * block;
      database.select("view_produit", "*", `1 LIMIT ${block} OFFSET ${begin}`)
      .then(async res => {
        if (res.length > 0) {
          let nombre_pagination = await database.select("view_produit", "COUNT(*) all")[0].all;
          let pagination = Math.ceil(nombre_pagination / 12);
          if (pagination % 12 != 0) pagination += pagination + (pagination % 12);
          resolve({
            page, pagination, nombre_pagination, data: res
          });
        } else {
          reject("No record");
        }
      })
      .catch(err => reject(err));
    })
  }

  getById(id_produit) {
    return new Promise((resolve, reject) => {
      database.select("view_produit", "*", `id_produit = ${id_produit}`)
      .then(res => resolve(res[0])).catch(err => reject(err));
    })
  }

  filterGet(type, value) {
    return new Promise((resolve, reject) => {
      let where_data = "";
      switch (type) {
        case "search":
          where_data = `nom_produit = '${value}' OR numero_produit = '${value}'`;
          break;

        case "taille":
          where_data = `taille = '${value}'`;
          break;

        case "color":
          where_data = `color = '${value}'`;
          break;

        case "prix":
          let data = value.split("-")
          where_data = `prix BETWEEN ${data[0]} AND ${data[1]}`;
          break;
      }
      database.select("view_produit", "*", where_data)
      .then(res => resolve(res)).catch(err => reject(err));
    })
  }

  createCategory(data) {
    return new Promise((resolve, reject) => {
      database.insert("categorie", data)
      .then(res => resolve(res)).catch(err => reject(err));
    })
  }

  getCategory() {
    return new Promise((resolve, reject) => {
      database.select("view_categorie")
      .then(res => resolve(res)).catch(err => reject(err));
    })
  }

  getCategoryById(id_categorie) {
    return new Promise((resolve, reject) => {
      database.select("view_categorie", "*", `id_categorie = ${id_categorie}`)
      .then(res => resolve(res[0])).catch(err => reject(err));
    })
  }

  updateCategory(id_categorie, data) {
    return new Promise((resolve, reject) => {
      database.update("categorie", data, `id_categorie = ${id_categorie}`)
      .then(res => resolve(res)).catch(err => reject(err));
    })
  }

  deleteCategorie(id_categorie) {
    return new Promise((resolve, reject) => {
      this.getCategoryById(id_categorie).then(res => {
        if (!res.can_delete) reject("La categorie ne peux plus être supprimé");
        database.delete("categorie", `id_categorie = ${id_categorie}`)
        .then(res => resolve(res)).catch(err => reject(err));
      }).catch(err => reject(`Error when get category by id : ${err}`));
    })
  }

}

module.exports = Produit;
