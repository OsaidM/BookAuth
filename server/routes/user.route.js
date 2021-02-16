const UserController = require("../controllers/user.controller");
const { authenticate } = require('../config/jwt.config');

module.exports = (app) =>{
    app.post("/api/register", UserController.registerUser);
    app.post("/api/login", UserController.logIn);
    app.get("/api/books",  UserController.getAllBooks);
    app.get("/api/users",  authenticate,UserController.getAllUsers);
    app.post("/api/createu", authenticate, UserController.createUser);

}