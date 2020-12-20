const route = require('express').Router();
const Promotion = require('../controller/promotion.controller');
const token = require('../middleware/tokenValidator');
const promotion = new Promotion;
const fn = require('../modules/custom_function');

route.post("/add", token, (req, res) => {
  let data = {
    reduction_promotion: req.body.reduction_promotion,
    date_expiration_promotion: req.body.date_expiration_promotion,
    type_promotion: req.body.type_promotion,
    code_promotion: req.body.code_promotion ? req.body.code_promotion : null
  }
  promotion.create(data)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

route.post("/update/:id", token, (req, res) => {
  let data = {
    reduction_promotion: req.body.reduction_promotion,
    date_expiration_promotion: req.body.date_expiration_promotion,
    type_promotion: req.body.type_promotion,
    code_promotion: req.body.code_promotion ? req.body.code_promotion : null
  }
  promotion.update(req.params.id, data)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

route.delete("/delete/:id", token, (req, res) => {
  promotion.delete(req.params.id)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

route.post("/update/:id", token, (req, res) => {
  promotion.update(req.params.id, req.body)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

route.post("/attachProduitPromo", token, (req, res) => {
  let data = {
    id_produit: req.body.id_produit,
    id_promotion: req.body.id_promotion,
    est_active: req.body.est_active
  }
  promotion.attachProduitPromotion(data)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

route.post("/attachCommandePromo", token, (req, res) => {
  let data = {
    id_commande: req.body.id_commande,
    id_promotion: req.body.id_promotion
  }
  promotion.attachCommandePromotion(data)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

route.post("/verifyCode", token, (req, res) => {
  promotion.verifyCodePromo(req.body.code)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

module.exports = route;
