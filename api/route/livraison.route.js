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
    id_type_livraison: req.body.id_type_livraison,
    id_livreur: req.body.id_livreur,
    id_status: C.status.LIVRAISON_EN
  }
  livraison.create("livraison", data)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

route.post("/updateStatus/:id", token, (req, res) => {
  livraison.changeStatus(req.params.id, req.body.id_status)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

route.get("/getAll", token, (req, res) => {
  livraison.get("livraison")
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

route.post("/addType", token, (req, res) => {
  let data = {
    type_livraison: req.body.type_livraison,
    caracteristique_livraison: req.body.caracteristique_livraison,
    id_type_livraison: req.body.id_type_livraison,
    id_status: C.status.TYPE_LIVRAISON_ACTIVE
  }
  livraison.create("livraison_type", data)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

route.post("/updateStatusType/:id", token, (req, res) => {
  livraison.changeStatusTypeLivraison(req.params.id, req.body.id_status)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

route.get("/getAllType", token, (req, res) => {
  livraison.get("view_type_livraison")
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

route.get("/getByIdType/:id", token, (req, res) => {
  livraison.getByIdTypeLivraison(req.params.id)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

route.post("/addLivreur", token, (req, res) => {
  let data = {
    nom_livreur: req.body.nom_livreur,
    description_livreur: req.body.description_livreur,
    telephone_livreur: req.body.telephone_livreur ? req.body.telephone_livreur : "",
    email_livreur: req.body.email_livreur ? req.body.email_livreur : "",
    id_status: C.status.LIVREUR_DISPO
  }
  livraison.create("livreur", data)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

route.post("/updateStatusLivreur/:id", token, (req, res) => {
  livraison.changeStatusLivreur(req.params.id, req.body.id_status)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

route.get("/getAllType", token, (req, res) => {
  livraison.get("view_livreur")
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

route.get("/getByIdType/:id", token, (req, res) => {
  livraison.getByIdLivreur(req.params.id)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

module.exports = route;
