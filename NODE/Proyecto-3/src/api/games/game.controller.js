const Game = require("./game.model");
const { deleteFile } = require("../../middlewares/delete-file");
const { setError } = require("../../helpers/error/handle.error");

const getGames = async (req, res, next) => {
  try {
    const games = await Game.find();
    return res.json({
      status: 200,
      message: "Recovered all Books",
      data: { games },
    });
  } catch (error) {
    return next(setError(500, "Fail to recover games"));
  }
};

const postGame = async (req, res, next) => {
  try {
    const newGame = new Game(req.body);
    if (req.file) {
      newGame.cover = req.file.path;
    }
    const newGameInDB = await newGame.save();
    return res.json({
      status: 201,
      message: "Created Game",
      data: { newGameInDB },
    });
  } catch (error) {}
};

const patchGame = async (req, res, next) => {
  try {
    const { id } = req.params;
    const patchGame = new Game(req.body);
    patchGame._id = id;
    const gameDB = await Game.findByIdAndUpdate(id, patchGame);
    if (req.file) {
      deleteFile(gameDB.cover);
      patchGame.cover = req.file.path;
    }
    if (!gameDB) {
      return next("Dish not found");
    }
    return res.status(200).json({
      new: patchGame,
      old: gameDB,
    });
  } catch (error) {
    return next(setError(500, error.message | "Failed in dish update"));
  }
};

const deleteGame = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedGame = await Game.findByIdAndDelete(id);
    if (deletedGame.cover) {
      deleteFile(deletedGame.cover);
    }
    if (!deletedGame) {
      return next(setError(404, "Game not found"));
    }
    return res.status(200).json({
      message: "Dish deleted",
      deletedDish,
    });
  } catch (error) {
    return next(setError(500, error.message | "Failed in game deletion"));
  }
};

module.exports = { getGames, postGame, patchGame, deleteGame };
