const Database = require("../database/database_manager");
const database = new Database;

class Granter {

  setGroupUser(id_groupe, id_menu_admin) {
    return new Promise((resolve, reject) => {
      database.select("groupe_user_grant_menu", "COUNT(*)", `id_groupe = ${id_groupe} AND id_menu_admin = ${id_menu_admin}`)
      .then(res => {
        if(res) {
          database.update("groupe_user_grant_menu", `id_groupe = ${id_groupe} AND id_menu_admin = ${id_menu_admin}`)
          .then(res => resolve(res)).catch(err => reject(err));
        } else {
          database.insert("groupe_user_grant_menu", {id_groupe, id_menu_admin})
          .then(res => resolve(res)).catch(err => reject(err));
        }
      }).catch(err => reject(err));
    })
  }

  getAllMenu() {
    return new Promise((resolve, reject) => {
      database.select("admin_menu")
      .then(res => {
        let all = [];
        res.map(elements => {
          if (!elements.submenu) {
            all[elements.id_admin_menu] = elements;
            all[elements.id_admin_menu].children = [];
          }
          if (elements.submenu) all[elements.main_menu].children.push(elements);
        })
        resolve(all.filter(item => item !== null));
      }).catch(err => reject(err));
    })
  }

  getMenuByGroupe(id_groupe) {
    return new Promise((resolve, reject) => {
      database.select("view_groupe_grant", "id_admin_menu, name, url, icon, submenu, main_menu", `id_groupe = ${id_groupe}`)
      .then(async res => {
        try {
          let all = [];
          let data = [];
          let all_menu = await database.select("admin_menu");
          all_menu.map(element => {
            element.active = false;
            res.map(view => {
              if (view.id_admin_menu == element.id_admin_menu) {
                element.active = true;
              }
            })
            data.push(element);
          })
          data.map(elements => {
            if (!elements.submenu) {
              all[elements.id_admin_menu] = elements;
              all[elements.id_admin_menu].children = [];
            }
            if (elements.submenu) all[elements.main_menu].children.push(elements);
          })
          resolve(all.filter(item => item !== null));
        } catch (error) {
          reject(error);
        }
      }).catch(err => reject(err));
    })
  }

  buildMenuByGroupe(id_groupe) {
    return new Promise((resolve, reject) => {
      database.select("view_groupe_grant", "*", `id_groupe = ${id_groupe}`)
      .then(res => {
        let all = [], data = [];
        res.map(elements => {
          if (!elements.submenu) {
            all[elements.id_admin_menu] = {
              name: elements.name,
              url: elements.url,
              icon: elements.icon
            };
            all[elements.id_admin_menu].children = [];
          }
          if (elements.submenu) all[elements.main_menu].children.push({
            name: elements.name,
            url: elements.url,
            icon: elements.icon
          });
        })
        all.map(el => {
          if (el) data.push(el.children.length == 0 ? {
            name: el.name,
            url: el.url,
            icon: el.icon
          } : el);
        })
        resolve(data);
      }).catch(err => reject(err));
    })
  }

  isAccess(id_groupe, id_menu_admin) {
    return new Promise((resolve, reject) => {
      database.select("groupe_user_grant_menu", "COUNT(*) rep", `id_groupe = ${id_groupe} AND id_menu_admin = ${id_menu_admin}`)
      .then(res => {
        let response = false;
        if (res[0].rep) response = true;
        resolve(response);
      }).catch(err => reject(err));
    })
  }

  deleteAccess(id_groupe, id_menu_admin) {
    return new Promise((resolve, reject) => {
      database.delete("groupe_user_grant_menu", `id_groupe = ${id_groupe} AND id_menu_admin = ${id_menu_admin}`)
      .then(res => resolve(res)).catch(err => reject(err));
    })
  }

}

module.exports = Granter;
