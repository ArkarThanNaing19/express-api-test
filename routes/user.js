const router = require("express").Router();

const SchemaMiddleware = require("./../middleware/SchemaMiddleware");
const AuthMiddleware = require("../middleware/AuthMiddleware");


const UserController = require("./../controller/UserController")
const UserMiddleware = require("./../middleware/UserMiddleware")

const updateUserPayload = require("./../payload/users/update");

router.get("/", 
  [AuthMiddleware.check],
  UserController.getUser
);

router.patch(
  "/",
  [
    AuthMiddleware.check,
    SchemaMiddleware.verify(updateUserPayload),
  ],
  UserController.updateUser
);


module.exports = router;