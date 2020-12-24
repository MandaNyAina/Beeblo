const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    try {
        let header = req.headers.authorization.split(" ");
        let token = header[1];
        if (header[0] != "BeebloAPI" && header[3] != "SecureAPI.mada") {
          throw "Not authorized";
        } else {
          jwt.verify(token, process.env.TOKEN_KEY);
          next();
        }
    } catch (e) {
        res.status(403).json("Not authorized");
    }
};
