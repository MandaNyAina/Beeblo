const route = require('express').Router();
const Admin = require('../controller/admin.controller');
const token = require('../middleware/tokenValidator');
const admin = new Admin;
const fn = require('../modules/custom_function');

route.post("/add", token, (req, res) => {
  let data = {
    nom_administrateur: req.body.nom_administrateur,
    prenom_administrateur: req.body.prenom_administrateur,
    nom_utilisateur: req.body.nom_utilisateur,
    mot_de_passe: req.body.mot_de_passe,
    id_groupe: req.body.id_groupe
  }
  admin.create(data)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

route.get("/listAll", token, (req, res) => {
  admin.get()
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

route.get("/getById/:id", token, (req, res) => {
  admin.getById(req.params.id)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

route.post("/update/:id", token, (req, res) => {
  let data = {
    nom_administrateur: req.body.nom_administrateur,
    prenom_administrateur: req.body.prenom_administrateur
  }
  admin.update(req.params.id, data)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

module.exports = route;
