const route = require('express').Router();
const Produit = require('../controller/produit.controller');
const token = require('../middleware/tokenValidator');
const produit = new Produit;
const fn = require('../modules/custom_function');

route.post("/add", token, (req, res) => {
  let data = {
    nom_produit: req.body.nom_produit,
    prix_produit: req.body.prix_produit,
    numero_produit: req.body.numero_produit,
    stock_produit: req.body.stock_produit,
    image_produit: req.body.image_produit,
    description_produit: req.body.description_produit,
    id_status: req.body.id_status,
    id_categorie: req.body.id_categorie
  }
  produit.create(data)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

route.post("/update/:id", token, (req, res) => {
  let data = {
    nom_produit: req.body.nom_produit,
    prix_produit: req.body.prix_produit,
    numero_produit: req.body.numero_produit,
    stock_produit: req.body.stock_produit,
    image_produit: req.body.image_produit,
    description_produit: req.body.description_produit,
    id_status: req.body.id_status,
    id_categorie: req.body.id_categorie
  }
  produit.update(req.params.id, data)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

route.post("/setStatus/:id/:status", token, (req, res) => {
  produit.setStatus(req.params.id, req.params.status)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

route.get("/getAll/:page/:block", token, (req, res) => {
  produit.get(req.params.page, req.params.block)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

route.get("/filterBy/:type", token, (req, res) => {
  produit.filterGet(req.params.type, req.body.value)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

route.get("/getById/:id", token, (req, res) => {
  produit.getById(req.params.id)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

route.route("/category").post(token, (req, res) => {
  produit.createCategory(req.body.nom_categorie)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
}).get(token, (req, res) => {
  produit.getCategory()
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

route.route("/category/:id").post(token, (req, res) => {
  produit.updateCategory(req.params.id, req.body.nom_categorie)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
}).get(token, (req, res) => {
  produit.getCategoryById(req.params.id)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
}).delete(token, (req, res) => {
  produit.deleteCategorie(req.params.id)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

module.exports = route;
