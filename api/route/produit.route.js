const route = require('express').Router();
const Produit = require('../controller/produit.controller');
const token = require('../middleware/tokenValidator');
const produit = new Produit;
const fn = require('../modules/custom_function');
const C = require('../modules/constante');
const multer = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `${__dirname}/../assets/produit`);
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now());
  }
})

var upload = multer({ storage: storage })

route.post("/add", (req, res) => {
  let image_produit = "";
  // if (res.files.length > 0) {
  //   res.files.map(img => {
  //     image_produit += `${img.name},`;
  //   })
  //   image_produit.slice(0, -1);
  // }
  let data = {
    nom_produit: req.body.nom_produit,
    numero_produit: fn.generateNumber(),
    stock_produit: req.body.stock_produit,
    image_produit,
    prix: req.body.prix,
    description_produit: req.body.description_produit,
    caracteristique: req.body.caracteristique,
    id_categorie: req.body.id_categorie,
    id_status: req.body.stock_produit > 0 ? C.status.PRODUIT_STOCK_OK : C.status.PRODUIT_STOCK_KO
  }
  produit.create(data)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

route.post("/update/:id", token.admin, (req, res) => {
  let image_produit = "";
  // if (res.files.length > 0) {
  //   res.files.map(img => {
  //     image_produit += `${img.name},`;
  //   })
  //   image_produit.slice(0, -1);
  // }
  let data = {
    nom_produit: req.body.nom_produit,
    numero_produit: fn.generateNumber(),
    stock_produit: req.body.stock_produit,
    image_produit,
    prix: req.body.prix,
    description_produit: req.body.description_produit,
    couleur: req.body.couleur,
    id_taille: req.body.id_taille,
    id_categorie: req.body.id_categorie
  }
  if (image_produit != "") data.image_produit = image_produit;
  produit.update(req.params.id, data)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

route.post("/setStatus/:id/:status", token.admin, (req, res) => {
  produit.setStatus(req.params.id, req.params.status)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

route.get("/getAll", token.admin, (req, res) => {
  produit.getAll()
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

route.get("/getAll/:page/:block", token, (req, res) => {
  produit.get(req.params.page, req.params.block)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

route.get("/filterBy/:type", token, (req, res) => {
  produit.filterGet(req.params.type, req.body.value)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

route.get("/getById/:id", token, (req, res) => {
  produit.getById(req.params.id)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

route.route("/category").post(token.admin, (req, res) => {
  let data = {
    nom_categorie: req.body.nom_categorie,
    id_status: C.status.CATEGORIE_ACTIVE
  }
  produit.createCategory(data)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
}).get((req, res) => {
  produit.getCategory()
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

route.route("/category/:id").post(token.admin, (req, res) => {
  let data = {
    nom_categorie: req.body.nom_categorie,
    id_status: req.body.id_status
  }
  produit.updateCategory(req.params.id, data)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
}).get(token, (req, res) => {
  produit.getCategoryById(req.params.id)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
}).delete(token.admin, (req, res) => {
  produit.deleteCategorie(req.params.id)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})


module.exports = route;
