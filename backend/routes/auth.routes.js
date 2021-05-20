const {Router} = require('express');
const bcrypt = require('bcryptjs');
const config = require('config');
const {check, validationResult} = require('express-validator');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = Router();

// api/auth/register
router.post(
    '/register',
    [
      check('login', 'Логин неправильный ').isEmail(),
      check('password', 'Минимальная длина 6 символов ало')
          .isLength({min: 6})
    ],
    async(req,res) => {
    try {
        const errors = validationResult(req)

        if(!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Данные неправильные, меняй'
            })
        }

      const {login, password} = req.body

        const candidate = await User.findOne({login})
        if (candidate) {
            return res.status(400).json({ message: 'Такой юзер уже есть'})
        }
        const hashedPassword = await bcrypt.hash(password, 12)
        const user = new User({login, password: hashedPassword})

        await user.save()

        res.status(201).json({ message: 'Пользователь создан'})

    } catch (e) {
        res.status(500).json({message: 'Что-то не так'})
    }
})
// api/auth/login
router.post(
    '/login',
    [
        check('login', 'Введите корректный логин').normalizeEmail().isEmail(),
        check('password', 'Введите пароль быра').exists()
    ],
    async(req,res) => {
        try {
            const errors = validationResult(req)

            if(!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Данные неправильные при входе, меняй'
                })
            }

            const {login, password} = req.body

            const user = await User.findOne(({ login }))

            if (!user) {
                return res.status(400).json({ message: 'Пользователь не найден'})
            }

            // совпадают ли пароли
            const isMatch = await bcrypt.compare(password, user.password)

            if (!isMatch) {
                return res.status(400).json({ message: 'Неверный пароль, заново'})
            }

            const token = jwt.sign(
                { userId: user.id },
                        config.get('jwtSecret'),
                { expiresIn: '1h'}
            )

            res.json({ token, userId: user.id})

        } catch (e) {
            res.status(500).json({message: 'Что-то не так'})
        }
})

module.exports = router