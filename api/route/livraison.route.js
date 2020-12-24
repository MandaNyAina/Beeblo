const route = require('express').Router();
const Livraison = require('../controller/livraison.controller');
const token = require('../middleware/tokenValidator');
const livraison = new Livraison;
const fn = require('../modules/custom_function');
const C = require('../modules/constante');

route.post("/add", token, (req, res) => {
  let data = {
    numero_livraison: fn.generateNumber(),
    observation_livraison: req.body.observation ? req.body.observation : "",
    id_acheteur: req.body.id_acheteur,
    id_status: C.status.LIVRAISON_EN
  }
  livraison.create(data)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

route.post("/updateStatus/:id", token, (req, res) => {
  livraison.changeStatus(req.params.id, req.body.id_status)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

route.get("/getAll", token, (req, res) => {
  livraison.get()
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

route.get("/getById/:id", token, (req, res) => {
  livraison.getById(req.params.id)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

route.get("/getAllByCommande", token, (req, res) => {
  livraison.getLivraisonCommande()
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

route.get("/getByCommande/:id", token, (req, res) => {
  livraison.getLivraisonCommandeById(req.params.id)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

module.exports = route;
