const route = require('express').Router();
const Site = require('../controller/site.controller');
const token = require('../middleware/tokenValidator');
const site = new Site;
const fn = require('../modules/custom_function');
const C = require('../modules/constante');

route.post("/add", token.admin, (req, res) => {
  let data = {
    nom_menu: req.body.nom_menu,
    lien_menu: req.body.lien_menu,
    in_sidebar: req.body.in_sidebar,
    id_status: C.status.MENU_ACTIVE
  }
  site.create("menu", data)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

route.post("/updateMenu/:id", token.admin, (req, res) => {
  let data = {
    nom_menu: req.body.nom_menu,
    lien_menu: req.body.lien_menu,
    in_sidebar: req.body.in_sidebar,
    id_status: C.status.MENU_ACTIVE
  }
  site.update("menu", req.params.id, data)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

route.get("/getAllMenu", token.admin, (req, res) => {
  site.get("menu")
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

route.get("/getMenu/:id", token.admin, (req, res) => {
  site.getById(req.params.id, "menu")
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

route.get("/checkMenu/:url", token.admin, (req, res) => {
  site.activeMenu(req.params.url)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

route.delete("/deleteMenu/:id", token.admin, (req, res) => {
  site.delete("menu", req.params.id)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

route.post("/addFilter", token.admin, (req, res) => {
  let data = {
    nom_filtre: req.body.nom_filtre,
    valeur_filtre: req.body.valeur_filtre,
    proprietaire_filtre: req.body.proprietaire_filtre,
  }
  site.create("filtre", data)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

route.get("/getAllFiltre", token, (req, res) => {
  site.get("filtre")
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

route.get("/getFiltre/:id", token, (req, res) => {
  site.getById(req.params.id, "filtre")
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

route.delete("/deleteFiltre/:id", token.admin, (req, res) => {
  site.delete("filtre", req.params.id)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

module.exports = route;
