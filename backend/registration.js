const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("./models/User"); //по модели пользователя в МонгоДБ
const registration = express.Router();

registration.post("/", async (req, res) => {
    // получение полей из фронта
    try {
        const { login, password } = req.body; // получаем мыло и пароль из бади
        const candidate = await User.findOne({ login }); // проверяем, есть ли такое мыло
        if (candidate) {
            // если да, то выкинем ошибку + смс
            return res
                .status(400)
                .json({ message: "Такой пользователь уже существует" });
        } // если if не отработал, то можем зарегистрировать нового пользователя
        const hashedPassword = await bcrypt.hash(password, 12); // хэшируем пароль с помощью bcryptjs (npm пакет), вторым параметром указываем соль, для еще большего шифрования пароля
        const user = new User({ login, password: hashedPassword }); // создаем нового пользователя

        await user.save(); // сохраняем нашего пользователя

        res.status(201).json({ message: "Registered" });
    } catch (e) {
        res.status(500).json({ message: "Bad request" });
    }
});

module.exports = registration;