const route = require('express').Router();
const Dashboard = require('../controller/dashboard.controller');
const token = require('../middleware/tokenValidator');
const dashboard = new Dashboard;
const fn = require('../modules/custom_function');

route.get("/", (req, res) => {
  dashboard.getData()
  .then(rep => fn.response_ok(res, rep)).catch(err => fn.response_ko(res, err));
})

module.exports = route;
