const routes = require("express").Router();
const JobsController = require("../controllers/JobsController");
const UserController = require("../controllers/UserController");

routes.post("/login", UserController.login);
routes.post("/register", UserController.register);
routes.get("/", JobsController.getJobList);
routes.get("/detail/:id", JobsController.getJobDetail);
routes.get("/positions", JobsController.getJobByFilter);

module.exports = routes;
