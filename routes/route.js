const router = require("express").Router();

// router.get("/", [UserMiddleware.check], UserController.getUser);


// Controller Imports
const AuthorizationController = require("./../controller/AuthController");

// Middleware Imports
const SchemaMiddleware = require("./../middleware/SchemaMiddleware");
const AuthMiddleware = require("../middleware/AuthMiddleware");

// JSON Schema Imports for payload verification
const register = require("./../payload/register");
const login = require("./../payload/login");


router.post(
  "/signup",
  [SchemaMiddleware.verify(register)],
  AuthorizationController.register
);

router.post(
  "/login",
  [SchemaMiddleware.verify(login)],
  AuthorizationController.login
);

router.get('/logout',
  [AuthMiddleware.check],
   AuthorizationController.logout);

module.exports = router;