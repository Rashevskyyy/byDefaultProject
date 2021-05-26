const jwt = require('jsonwebtoken');

 function authToken (req, res, next)  {
    const token = req.headers.authorization;
    if (!token) return res.sendStatus(401).json({message: "Вы не авторизированы"});
    jwt.verify(token, "ByDef", (err, user) => {
        if (err) return res.sendStatus(401).json({message: "Вы не авторизированы"});
        req.user = user;
        next();
    });
}
module.exports = authToken