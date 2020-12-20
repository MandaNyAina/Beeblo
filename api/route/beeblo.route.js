const route = require('express').Router();
const Beeblo = require('../controller/beeblo.controller');
const token = require('../middleware/tokenValidator');
const beeblo = new Beeblo;
const fn = require('../modules/custom_function');

route.post("/config", token, (req, res) => {
  let data = {
    raison_social_beeblo: req.body.raison_social_beeblo,
    contact_phone_beeblo: req.body.contact_phone_beeblo,
    contact_email_beeblo: req.body.contact_email_beeblo,
    apropos_beeblo: req.body.apropos_beeblo,
    mention_legale_beeblo: req.body.mention_legale_beeblo,
    condition_generale_beeblo: req.body.condition_generale_beeblo,
    siege_beeblo: req.body.siege_beeblo,
    site_beeblo: req.body.site_beeblo,
    smtp_host: req.body.smtp_host,
    smtp_email: req.body.smtp_email,
    smtp_password: req.body.smtp_password,
    smtp_port: req.body.smtp_port
  }
  beeblo.configure(data)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

route.get("/get", token, (req, res) => {
  beeblo.get()
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

module.exports = route;
