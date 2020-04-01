const jwt = require("jsonwebtoken");

module.exports = requireToken = () => {
  return (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
      const token = req.headers.authorization.split(" ")[1];
      if (token) {
        jwt.verify(token, process.env.REACT_APP_ACCESS_TOKEN, (err, user) => {
          if (err) {
            return res.sendStatus(403);
          }
          req.user = user;
          next();
        });
      }
    } else {
      res.sendStatus(401);
    }
  };
};
