const route = require('express').Router();
const Acheteur = require('../controller/acheteur.controller');
const token = require('../middleware/tokenValidator');
const acheteur = new Acheteur;
const fn = require('../modules/custom_function');

route.post("/add", (req, res) => {
  let data = {
    nom_acheteur: req.body.nom_acheteur,
    prenom_acheteur: req.body.prenom_acheteur ? req.body.prenom_acheteur : null,
    email_acheteur: req.body.email_acheteur,
    mot_de_passe_acheteur: req.body.mot_de_passe_acheteur,
    numero_client_acheteur: req.body.numero_client_acheteur,
    adresse_acheteur: req.body.adresse_acheteur,
    code_postal: req.body.code_postal,
    ville_acheteur: req.body.ville_acheteur,
    pays_acheteur: req.body.pays_acheteur,
    etat_acheteur: req.body.etat_acheteur,
    id_status: req.body.id_status
  }
  acheteur.create(data)
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
  let data = {
    nom_acheteur: req.body.nom_acheteur,
    prenom_acheteur: req.body.prenom_acheteur ? req.body.prenom_acheteur : null,
    email_acheteur: req.body.email_acheteur,
    numero_client_acheteur: req.body.numero_client_acheteur,
    adresse_acheteur: req.body.adresse_acheteur,
    code_postal: req.body.code_postal,
    ville_acheteur: req.body.ville_acheteur,
    pays_acheteur: req.body.pays_acheteur,
    etat_acheteur: req.body.etat_acheteur,
    id_status: req.body.id_status
  }
  acheteur.update(req.params.id, data)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})


module.exports = route;
