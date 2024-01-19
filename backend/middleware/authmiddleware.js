const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/user.model");

const protect = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization 
  ) {
    try {
      // get token from header
      // token = req.headers.authorization.split(" ")[1];
      
      token = req.headers.authorization;

      // virefy token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // get user from token
      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      res.status(405);
      throw new Error("n'est pas autorisé");
    }
  } else {
    res.status(401);
    throw new Error("n'est pas autorisé,manque de token");
  }
});

module.exports = { protect };
