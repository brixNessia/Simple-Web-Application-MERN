require("../middleware/RouterMiddleware");
const authRoute = require("./auth.route");
const userRoute = require("./user.route");
const postRoute = require("./post.route");

module.exports = function(app) {
  app.use("/auth", authRoute);
  app.use("/users", requireToken(), userRoute);
  app.use("/posts", requireToken(), postRoute);
};
