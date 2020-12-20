const Login = require('../controller/login.controller');
const route = require('express').Router();
const login = new Login;
const token = require('../middleware/tokenValidator');
const fn = require('../modules/custom_function');

route.post("/auth/asAdmin", (req, res) => {
  login.authAsAdmin(req.body)
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ko(res, err));
})

route.post("/reset_password/admin/:id", token, (req, res) => {
  login.resetPassword(req.params.id, req.body.mot_de_passe)
    .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ko(res, err));
})

route.post("/disable/admin/:id", token, (req, res) => {
  login.disableAccount(req.params.id)
  .then(res => fn.response_ok(res, rep)).catch(err => fn.response_ko(res, err));
})

module.exports = route;
