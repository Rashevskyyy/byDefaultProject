const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require('./models/User');
const secret = "ByDef";
const login = express.Router();

login.post("/", async (req, res) => {
    try {
        const { login, password } = req.body;
        const user = await User.findOne({ login });
        if (!user) {
            return res.status(400).json({ message: "User is not found" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Wrong Password" });
        }
        const token = jwt.sign({ userId: user.id }, secret, { expiresIn: "8h" });
        res.json({ token });
    } catch (e) {
        res.status(500).json({ message: "Something wrong. Please try again." });
    }
});

module.exports = login;