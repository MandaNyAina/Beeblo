const route = require('express').Router();
const Acheteur = require('../controller/acheteur.controller');
const token = require('../middleware/tokenValidator');
const acheteur = new Acheteur;
const fn = require('../modules/custom_function');
const C = require('../modules/constante');

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
    etat_acheteur: 1,
    id_status: C.status.COMPTE_OK,
    id_type_acheteur: req.body.id_type_acheteur
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
    etat_acheteur: 1,
    id_status: req.body.id_status,
    id_type_acheteur: req.body.id_type_acheteur
  }
  acheteur.update(req.params.id, data)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

route.post("/sendNewPassword/:email_acheteur", token, (req, res) => {
  acheteur.sendNewPassword(req.params.email_acheteur)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

route.delete("/deleteAcheteur/:id", token.admin, (req, res) => {
  acheteur.deleteAccount(req.params.id)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

route.post("/typeAcheteur/add", token.admin, (req, res) => {
  let data = {
    libelle_type_acheteur: req.body.libelle_type_acheteur
  }
  acheteur.addTypeAcheteur(data)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

route.post("/typeAcheteur/update/:id_type_acheteur", token.admin, (req, res) => {
  let data = {
    libelle_type_acheteur: req.body.libelle_type_acheteur
  }
  acheteur.updateTypeAcheteur(req.params.id_type_acheteur ,data)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

route.get("/typeAcheteur", token.admin, (req, res) => {
  acheteur.getAllTypeAcheteur()
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

route.route("/typeAcheteur/:id_type_acheteur").get(token.admin, (req, res) => {
  acheteur.getByIdTypeAcheteur(req.params.id_type_acheteur)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
}).delete(token.admin, (req, res) => {
  acheteur.deleteTypeAcheteur(req.params.id_type_acheteur)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})


module.exports = route;
