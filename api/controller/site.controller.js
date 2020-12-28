const Database = require("../database/database_manager");
const database = new Database;
const C = require("../modules/constante");

class Site {

  constructor() {}

  create(table, data) {
    return new Promise((resolve, reject) => {
      database.insert(table, data).then(res => resolve(res)).catch(err => reject(err));
    })
  }

  update(table, id, data) {
    return new Promise((resolve, reject) => {
      database.update(table, data, `id_${table} = ${id}`)
      then(res => resolve(res)).catch(err => reject(err));
    })
  }

  changeStatus(table, id, id_status) {
    return new Promise((resolve, reject) => {
      database.update(table, {id_status}, `id_${table} = ${id}`)
      then(res => resolve(res)).catch(err => reject(err));
    })
  }

  delete(table, id) {
    return new Promise((resolve, reject) => {
      database.delete(table, `id_${table} = ${id}`)
      then(res => resolve(res)).catch(err => reject(err));
    })
  }

  get(table) {
    return new Promise((resolve, reject) => {
      database.select(table)
      then(res => resolve(res)).catch(err => reject(err));
    })
  }

  getById(id, table) {
    return new Promise((resolve, reject) => {
      database.select(table, "*", `id_${table} = ${id}`)
      then(res => resolve(res[0])).catch(err => reject(err));
    })
  }

  activeMenu(lien_menu) {
    return new Promise((resolve, reject) => {
      database.select("menu", "*", `menu = '${link}'`)
      then(res => {
        let response = null;
        if (res[0].id_status == C.status.MENU_DESACTIVE || res[0].id_status == C.status.MENU_MAINTENANCE) response = res[0].id_status;
        resolve(response);
      }).catch(err => reject(err));
    })
  }

}

module.exports = Site;
