const express = require("express");//create web servers and handle HTTP requests.
const router = express.Router();//it is used in mini application for express
const { registerUser } = require("../controllers/authController");//controller keep the router files into separate logic

router.post("/register", registerUser);
//requested to routes
module.exports = router;
