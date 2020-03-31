const authRoute = require("./auth.route");
const userRoute = require("./user.route");
require("../middleware");

module.exports = function(app) {
  app.use("/auth", authRoute);
  app.use("/users", requireJsonContent(), userRoute);
};
