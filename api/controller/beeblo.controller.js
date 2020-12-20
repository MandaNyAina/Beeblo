const Database = require('../database/database_manager');
const { encrypt } = require('../modules/custom_function');
const database = new Database;

class Beeblo {

  configure(data) {
    return new Promise((resolve, reject) => {
      database.select("beeblo").then((res) => {
        if (res.length == 0) {
          if (data.smtp_password) data.smtp_password = encrypt(data.smtp_password);
          database.insert("beeblo", data)
          .then(res => resolve(res)).catch(err => reject(err));
        } else {
          if (data.smtp_password) data.smtp_password = encrypt(data.smtp_password);
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
