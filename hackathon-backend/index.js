const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const helmet = require("helmet");
const path = require("path");
const server = require("http").createServer(app);
const usersRoutes = require("./src/router/user");

dotenv.config();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.set("trust proxy", true);
app.use("/layers", express.static(path.join(__dirname, "layers")));
app.use("/build", express.static(path.join(__dirname, "build")));

// Routes
app.use("/user", usersRoutes);
app.get("/", (req, res) =>
  res.send(`Welcome to AnimaDao SERVER! ENV: ${process.env.ENVIROMENT}`)
);

// Server
server.listen(process.env.PORT | 3333, () => {
  console.log(
    `AnimaDao listening at ${process.env.SERVER_URL} || ENV: ${process.env.ENVIROMENT}`
  );
});
