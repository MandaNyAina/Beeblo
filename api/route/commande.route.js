const route = require('express').Router();
const Commande = require('../controller/commande.controller');
const token = require('../middleware/tokenValidator');
const commande = new Commande;
const fn = require('../modules/custom_function');

route.post("/passeCommande", token, (req, res) => {
  let data = {
    numero_commande: fn.generateNumber(),
    date_commande: fn.getCurrentDateAndTime(),
    id_panier: req.body.id_panier,
    id_status: req.body.id_status,
    id_moyen_paiement: req.body.id_moyen_paiement,
    id_livraison: req.body.id_livraison,
  }
  commande.passeCommande(data)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

route.post("/changeStatus/:id", token, (req, res) => {
  commande.changeStatus(req.params.id, req.body.id_status)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

route.get("/getAll", token, (req, res) => {
  commande.get()
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

route.get("getById/:id", token, (req, res) => {
  commande.getById(req.params.id)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

route.get("/getUserCommande/:id_acheteur", token, (req, res) => {
  commande.getUserCommande(req.params.id_acheteur)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

route.get("/getCommandeProduit/:id_commande", token, (req, res) => {
  commande.getCommandeProduit(req.params.id_commande)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

route.get("/getFacture", token, (req, res) => {
  commande.getFacture()
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

route.get("/getUserFacture/:id_acheteur", token, (req, res) => {
  commande.getCommandeProduit(req.params.id_acheteur)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

route.get("/getUserDetailFacture/:numero_facture", token, (req, res) => {
  commande.getCommandeProduit(req.params.numero_facture)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

route.post("/generateFacture/:numero_facture", token, (req, res) => {
  commande.generateFacture(req.params.numero_facture)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

module.exports = route;
