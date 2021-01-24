const route = require('express').Router();
const Beeblo = require('../controller/beeblo.controller');
const token = require('../middleware/tokenValidator');
const beeblo = new Beeblo;
const fn = require('../modules/custom_function');

route.route("/siteInfo").post(token.admin, (req, res) => {
  let data = {
    site_beeblo: req.body.site_beeblo,
    raison_social_beeblo: req.body.raison_social_beeblo,
    contact_phone_beeblo: req.body.contact_phone_beeblo,
    contact_email_beeblo: req.body.contact_email_beeblo,
    apropos_beeblo1: req.body.apropos_beeblo1,
    apropos_beeblo2: req.body.apropos_beeblo2,
    home_title: req.body.home_title,
    home_beeblo1: req.body.home_beeblo1,
    home_beeblo2: req.body.home_beeblo2,
    home_beeblo3: req.body.home_beeblo3,
    condition_utilisation_beeblo1: req.body.condition_utilisation_beeblo1,
    condition_utilisation_beeblo2: req.body.condition_utilisation_beeblo2,
    condition_utilisation_beeblo3: req.body.condition_beeblo3,
    mention_legale_beeblo: req.body.mention_legale_beeblo,
    condition_vente: req.body.condition_vente,
    siege_beeblo: req.body.siege_beeblo
  }
  beeblo.configure(data)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
}).get((req, res) => {
  beeblo.get(`
  raison_social_beeblo, contact_phone_beeblo, contact_email_beeblo apropos_beeblo1,
  apropos_beeblo2, home_title, home_beeblo1, home_beeblo2, home_beeblo3, condition_utilisation_beeblo1,
  condition_utilisation_beeblo2, condition_utilisation_beeblo3, mention_legale_beeblo,
  condition_vente, siege_beeblo, site_beeblo`
  )
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

route.route("/reseaux").post(token.admin, (req, res) => {
  let data = {
    link_facebook: req.body.link_facebook,
    link_tumblr: req.body.link_tumblr,
    link_tweet: req.body.link_tweet,
    link_pinterest: req.body.link_pinterest,
    link_instagram: req.body.link_instagram
  }
  beeblo.configure(data)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
}).get((req, res) => {
  beeblo.get(`
  link_facebook, link_tumblr, link_tweet, link_pinterest, link_instagram`
  )
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

route.route("/mailConfig").post(token.admin, (req, res) => {
  let data = {
    smtp_host: req.body.smtp_host,
    smtp_email: req.body.smtp_email,
    smtp_password: req.body.smtp_password,
    smtp_port: req.body.smtp_port
  }
  beeblo.configure(data)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
}).get(token.admin, (req, res) => {
  beeblo.get(`
  smtp_host, smtp_email, smtp_password, smtp_port`
  )
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

module.exports = route;
