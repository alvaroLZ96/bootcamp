const GamesRoutes = require("express").Router();
const upload = require("../../middlewares/file");
const {
  getGames,
  postGame,
  patchGame,
  deleteGame,
} = require("./game.controller");

const { isAuth } = require("../../middlewares/auth.middleware");

GamesRoutes.get("/", [isAuth], getGames);
GamesRoutes.post("/", [isAuth], upload.single("cover"), postGame);
GamesRoutes.patch("/:id", [isAuth], upload.single("cover"), patchGame);
GamesRoutes.delete("/:id", deleteGame);

module.exports = GamesRoutes;
