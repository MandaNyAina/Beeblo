const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    try {
        let token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, process.env.TOKEN_KEY);
        next();
    } catch (e) {
        res.status(403).json("Not authorized");
    }
};
