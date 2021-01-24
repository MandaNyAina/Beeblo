const route = require('express').Router();
const Aide = require('../controller/aide.controller');
const token = require('../middleware/tokenValidator');
const aide = new Aide;
const fn = require('../modules/custom_function');

route.post("/add", token.admin, (req, res) => {
  let data = {
    titre_aide: req.body.titre_aide,
    contenue_aide: req.body.contenue_aide
  }
  aide.create(data)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

route.post("/update/:id", token.admin, (req, res) => {
  let data = {
    titre_aide: req.body.titre_aide,
    contenue_aide: req.body.contenue_aide
  }
  aide.update(req.params.id, data)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

route.get("/getAll", token.admin, (req, res) => {
  aide.get()
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

route.get("/getById/:id", token.admin, (req, res) => {
  aide.getById(req.params.id)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

route.delete("/delete/:id", token.admin, (req, res) => {
  aide.delete(req.params.id)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

module.exports = route;
