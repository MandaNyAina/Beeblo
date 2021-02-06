const Database = require("../database/database_manager");
const database = new Database;
const C = require("../modules/constante")

class Dashboard {

  getData() {
    return new Promise(async (resolve, reject) => {
      const reporting_graph = (await database.select("view_dashboard"))[0];
      const reporting_date = [];
      let reporting_resume = {
        nouveau_client: 0,
        nombre_acheteur: 0
      };
      let nowtime = new Date().getTime();
      let last_seven_date = [];
      let nouveau_client = '', nombre_acheteur = '';
      const format_date = (time) => {
        let day = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
        let date = new Date(time);
        return {
          'string': `${day[date.getDay()]} ${date.getDate()  < 10 ? '0' + date.getDate() : date.getDate()}/${date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)}`,
          date
        }
      }
      for (let i = 6; i > 0; i--) {
        last_seven_date.push({id: i, value: format_date(nowtime - (i * 86400000))});
      }
      last_seven_date.push({id: 0, value: format_date(nowtime)});

      last_seven_date.filter(async (el) => {
        nouveau_client = (await database.select("acheteur", "COUNT(*) AS nouveau_client", `date_inscription_acheteur = '${el.value.date}'`))[0].nouveau_client;
        nombre_acheteur = (await database.select("commande", "COUNT(*) AS nombre_acheteur", `date_commande = '${el.value.date}'`))[0].nombre_acheteur;

        reporting_date.push({ id: el.id, label: el.value.string, nouveau_client, nombre_acheteur });

        reporting_resume.nouveau_client += nouveau_client;
        reporting_resume.nombre_acheteur += nombre_acheteur;

        if (reporting_date.length === last_seven_date.length) {
          let reporting = { reporting_graph, reporting_resume };
          reporting.reporting_date = reporting_date.reduce(function (r,v) {
            r[v.id] = v;
            return r;
          }, []).reverse();
          resolve(reporting);
        }

      });

    })
  }

}

module.exports = Dashboard;
