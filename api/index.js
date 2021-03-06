const express = require('express'),
      app = express(),
      cors = require('cors'),
      bodyParser = require('body-parser'),
      db = require('./config/database'),
      Mailing = require('./mailing/mailing');

require('dotenv').config()
const prefix = process.env.PREFIX;

// check database
db.getConnection((err, d) => {
  if (err) console.log(`Error on database connexion : ${err}`);
})

// check server mail
try {
  let mailing = new Mailing();
} catch (error) {
  console.log(error);
}

// middleware
app.use(cors({
    origin: 'http://localhost:4200',
    methods: "POST, GET, DELETE"
}));
app.use(bodyParser.json({limit: '25mb'}));
app.use(bodyParser.urlencoded({limit: '25mb', extended: true}));

// route declare
const acheteur = require('./route/acheteur.route'),
      admin = require('./route/admin.route'),
      login = require('./route/login.route'),
      produit = require('./route/produit.route'),
      promotion = require('./route/promotion.route'),
      livraison = require('./route/livraison.route'),
      commandes = require('./route/commande.route'),
      panier = require('./route/panier.route'),
      beeblo = require('./route/beeblo.route'),
      site = require('./route/site.route'),
      aide = require('./route/aide.route'),
      grant = require('./route/grant.route'),
      dashboard = require('./route/dashboard.route');

app.use(`${prefix}/acheteur`, acheteur);
app.use(`${prefix}/admin`, admin);
app.use(`${prefix}/siteConfig`, beeblo)
app.use(`${prefix}/login`, login);
app.use(`${prefix}/produit`, produit);
app.use(`${prefix}/promotion`, promotion);
app.use(`${prefix}/livraison`, livraison);
app.use(`${prefix}/commandes`, commandes);
app.use(`${prefix}/panier`, panier);
app.use(`${prefix}/site`, site);
app.use(`${prefix}/aide`, aide);
app.use(`${prefix}/grant`, grant);
app.use(`${prefix}/dashboard`, dashboard);


// static route
app.use(`${prefix}/produit`, express.static(__dirname + '/assets/produit'));

// run server
app.listen(process.env.PORT, () => {
  console.log(`Success to connect in server on port ${process.env.PORT}`);
})
