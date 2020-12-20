const Database = require('../database/database_manager')
const database = new Database;
const fn = require('../modules/custom_function');
const C = require('../modules/constante');
require('dotenv').config();

class Beeblo {

  configure(data) {
    return new Promise((resolve, reject) => {
      database.select("beeblo").then((res) => {
        if (res.length == 0) {
          database.insert("beeblo", data)
          .then(res => resolve(res)).catch(err => reject(err));
        } else {
          database.update("beeblo", data)
          .then(res => resolve(res)).catch(err => reject(err));
        }
      }).catch(err => reject(err));
    })
  }

  get() {
    return new Promise((resolve, reject) => {
      database.select("beeblo", "*", "1 LIMIT 1").then(res => resolve(res[0])).catch(err => reject(err));
    })
  }

}

module.exports = Beeblo;
