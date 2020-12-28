const Database = require("../database/database_manager");
const database = new Database;
const C = require("../modules/constante")

class Aide {

  create(data) {
    return new Promise((resolve, reject) => {
      database.insert("aide", data).then(res => resolve(res)).catch(err => reject(err));
    })
  }

  update(id_aide, data) {
    return new Promise((resolve, reject) => {
      database.update("aide", data, `id_aide = ${id_aide}`)
      .then(res => resolve(res)).catch(err => reject(err));
    })
  }

  get() {
    return new Promise((resolve, reject) => {
      database.select("aide")
      .then(res => resolve(res)).catch(err => reject(err));
    })
  }

  getById(id_aide) {
    return new Promise((resolve, reject) => {
      database.select("aide", "*", `id_aide = ${id_aide}`)
      .then(res => resolve(res[0])).catch(err => reject(err));
    })
  }

  delete(id_aide) {
    return new Promise((resolve, reject) => {
      database.delete("aide", `id_aide = ${id_aide}`)
      .then(res => resolve(res)).catch(err => reject(err));
    })
  }

}

module.exports = Aide;
