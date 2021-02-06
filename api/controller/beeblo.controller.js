const Database = require('../database/database_manager');
const { encrypt, decrypt } = require('../modules/custom_function');
const database = new Database;

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

  get(rows) {
    return new Promise((resolve, reject) => {
      database.select("beeblo", rows, "1 LIMIT 1").then(res => {
        resolve(res[0]);
      }).catch(err => reject(err));
    })
  }

}

module.exports = Beeblo;
