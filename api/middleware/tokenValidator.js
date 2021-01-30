const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    try {
        let header = req.headers.authorization.split(" ");
        let token = header[1];
        let now = new Date();
        now = String(now.getFullYear())+String(now.getMonth())+String(now.getDate());
        if (header[0] == now && (header[2] == "user_fan_request" || header[2] == "beebloAdminToken")) {
          jwt.verify(token, process.env.TOKEN_KEY);
          next();
        } else {
          throw "Not authorized";
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
      if (header[0] == now && header[2] == "beebloAdminToken") {
        jwt.verify(token, process.env.TOKEN_KEY);
        next();
      } else {
        throw "Not authorized";
      }
  } catch (e) {
      res.status(403).json("Not authorized");
  }
};
