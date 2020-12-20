const route = require('express').Router();
const Admin = require('../controller/admin.controller');
const token = require('../middleware/tokenValidator');
const admin = new Admin;
const fn = require('../modules/custom_function');

route.post("/add", token, (req, res) => {
  admin.create(req.body)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ok(res, err));
})

