const express = require('express')
const app = express()

const cors = require("cors");
const morgan = require("morgan");
const { Sequelize } = require("sequelize");

const { port } = require("./config");
const PORT = process.env.PORT || port;

const UserModel = require("./models/User");

app.use(morgan("tiny"));
app.use(cors());

// Middleware that parses the body payloads as JSON to be consumed next set
// of middlewares and controllers.
app.use(express.json());

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./storage/data.db", // Path to the file that will store the SQLite DB.
});

const routes = require('./routes/route');
const userRoutes = require('./routes/user');


UserModel.initialise(sequelize);

sequelize
  .sync()
  .then(() => {
    console.log("Sequelize Initialised!!");

    app.use("/", routes);
    app.use("/user", userRoutes);

    app.listen(PORT, () => {
      console.log("Server Listening on PORT:", port);
    });
  })
  .catch((err) => {
    console.error("Sequelize Initialisation threw an error:", err);
  });

