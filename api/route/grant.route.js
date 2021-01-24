const route = require('express').Router();
const Granter = require('../controller/grant.controller');
const token = require('../middleware/tokenValidator');
const grant = new Granter;
const fn = require('../modules/custom_function');

route.post("/setGrant", token.admin, (req, res) => {
  grant.setGroupUser(req.body.id_groupe, req.body.id_menu_admin)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

route.get("/getAll", token.admin, (req, res) => {
  grant.getAllMenu()
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

route.get("/getMenuByGroupe/:id_groupe", token.admin, (req, res) => {
  grant.getMenuByGroupe(req.params.id_groupe)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

route.get("/buildMenu/:id_groupe", token.admin, (req, res) => {
  grant.buildMenuByGroupe(req.params.id_groupe)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

route.post("/isAccess", token.admin, (req, res) => {
  grant.isAccess(req.body.id_groupe, req.body.id_menu_admin)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

route.delete("/deleteAccess", token.admin, (req, res) => {
  grant.deleteAccess(req.body.id_groupe, req.body.id_menu_admin)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

module.exports = route;
