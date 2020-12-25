const jwt = require("jsonwebtoken");

module.exports.super_admin = (req, res, next) => {
    try {
        let header = req.headers.authorization.split(" ");
        let token = header[1];
        let now = new Date();
        now = String(now.getFullYear())+String(now.getMonth())+String(now.getDate());
        if (header[0] != now && header[3] != "super_admin_request") {
          throw "Not authorized";
        } else {
          jwt.verify(token, process.env.TOKEN_KEY);
          next();
        }
    } catch (e) {
        res.status(403).json("Not authorized");
    }
};

module.exports.admin = (req, res, next) => {
  try {
      let header = req.headers.authorization.split(" ");
      let token = header[1];
      let now = new Date();
      now = String(now.getFullYear())+String(now.getMonth())+String(now.getDate());
      if ((header[0] != "beebloAdminToken" || header[0] == now) && header[3] != "admin_request") {
        throw "Not authorized";
      } else {
        jwt.verify(token, process.env.TOKEN_KEY);
        next();
      }
  } catch (e) {
      res.status(403).json("Not authorized");
  }
};

module.exports.user = (req, res, next) => {
  try {
      let header = req.headers.authorization.split(" ");
      let token = header[1];
      let now = new Date();
      now = String(now.getFullYear())+String(now.getMonth())+String(now.getDate());
      if ((header[0] != `beebloUserToken${now}` || header[0] == now) && header[3] != "user_request") {
        throw "Not authorized";
      } else {
        jwt.verify(token, process.env.TOKEN_KEY);
        next();
      }
  } catch (e) {
      res.status(403).json("Not authorized");
  }
};
