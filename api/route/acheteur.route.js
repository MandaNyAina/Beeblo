const route = require('express').Router();
const Acheteur = require('../controller/acheteur.controller');
const token = require('../middleware/tokenValidator');
const acheteur = new Acheteur;
const fn = require('../modules/custom_function');

route.post("/add", (req, res) => {
  acheteur.create(req.body)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

route.get("/listAll", token, (req, res) => {
  acheteur.get()
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

route.get("/getById/:id", token, (req, res) => {
  acheteur.getById(req.params.id)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

route.post("/update/:id", token, (req, res) => {
  acheteur.update(req.params.id, req.body)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})


module.exports = route;
