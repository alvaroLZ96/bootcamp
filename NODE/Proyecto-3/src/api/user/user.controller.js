const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("./user.model"); //User aquí es el modelo
const { setError } = require("../../helpers/error/handle.error");

const register = async (req, res, next) => {
  try {
    const newUser = new User(req.body); //aqui User es el usuario
    const userDuplicate = await User.findOne({ username: newUser.username }); //aquí User es la colección
    //aqui arriba comparamos si el nuevo usuario tiene en la key username una clave igual a una existente en la DB?
    if (userDuplicate) return next("User already exists");

    const newUserDB = newUser.save();
    return res.json({
      //es esta la respuesta que recibimos en el thunder?
      status: 201,
      message: "user registered",
      data: newUserDB,
    });
  } catch (error) {
    return next(setError(500, "User registered fail"));
  }
};

const login = async (req, res, next) => {
  try {
    const userInfo = await User.findOne({ username: req.body.username }); //aquí estas trayendo el objeto User entero?
    if (bcrypt.compareSync(req.body.password, userInfo.password)) {
      //aquí arriba utilizamos bcrypt para que compare si son las mismas passwords sin desencriptar?
      userInfo.password = null;
      const token = jwt.sign(
        //Aquí generamos el token y en el res.json lo asignamos?
        {
          id: userInfo._id, //pasandole el id o el username se le asigna un token?
          username: userInfo.username,
        },
        req.app.get("secretKey"),
        { expiresIn: "1h" } //que pasa cuando transcurre 1h?
      );
      return res.json({
        status: 200,
        message: "welcome User",
        user: userInfo,
        token: token,
      });
    } else {
      return next("Incorrect password");
    }
  } catch (error) {
    return next(setError(500, "User login fail"));
  }
};
const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    return res.json({
      status: 200,
      message: "Recovered all users",
      data: { users },
    });
  } catch (error) {
    return next(setError(500, "Fail to recover users"));
  }
};
module.exports = { register, login, getUsers };
