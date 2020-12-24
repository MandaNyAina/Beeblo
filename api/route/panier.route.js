const route = require('express').Router();
const Panier = require('../controller/panier.controller');
const token = require('../middleware/tokenValidator');
const panier = new Panier;
const fn = require('../modules/custom_function');

route.post("/addToPanier", token, (req,res) => {
  let data = {
    id_produit: req.body.id_produit,
    quantite: req.body.quantite
  }
  panier.addToPanier(req.body.id_acheteur, data)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

route.post("/update/:id_panier/:id_produit", token, (req, res) => {
  let data = {
    id_produit: req.body.id_produit,
    quantite: req.body.quantite
  }
  panier.update(req.params.id_panier, req.params.id_produit, data)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

route.get("getUserPanier/:id_acheteur", token, (req, res) => {
  panier.getUserPanier(req.params.id_acheteur)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

route.delete("/delete/:id_panier/:id_produit", token, (req, res) => {
  panier.delete(req.params.id_panier, req.params.id_produit)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

module.exports = route;
