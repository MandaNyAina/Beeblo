const Acheteur = require('../controller/acheteur.controller');
const Login = require('../controller/login.controller');
const route = require('express').Router();
const login = new Login;
const token = require('../middleware/tokenValidator');
const fn = require('../modules/custom_function');
const acheteur = new Acheteur;

route.post("/auth/asAdmin", (req, res) => {
  let data = {
    nom_utilisateur: req.body.nom_utilisateur,
    mot_de_passe: req.body.mot_de_passe
  }
  login.authAsAdmin(data)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ko(res, err));
})

route.post("/auth/asAcheteur", (req, res) => {
  let data = {
    nom_utilisateur: req.body.nom_utilisateur,
    mot_de_passe: req.body.mot_de_passe
  }
  login.authAsAcheteur(data)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ko(res, err));
})

route.post("/reset_password/admin/:id", token, (req, res) => {
  login.resetPassword(req.params.id, req.body.mot_de_passe)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ko(res, err));
})

route.post("/send_new_password/:email", token, (req, res) => {
  acheteur.sendNewPassword(req.params.email)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ko(res, err));
})

route.post("/reset_password/acheteur/:id", token, (req, res) => {
  acheteur.changePassword(req.params.id)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ko(res, err));
})

route.post("/disable/admin/:id", token, (req, res) => {
  login.disableAccount(req.params.id)
  .then(res => fn.response_ok(res, rep)).catch(err => fn.response_ko(res, err));
})

route.post("/disable/acheteur/:id", token, (req, res) => {
  acheteur.disableAccount(req.params.id)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ko(res, err));
})

module.exports = route;
