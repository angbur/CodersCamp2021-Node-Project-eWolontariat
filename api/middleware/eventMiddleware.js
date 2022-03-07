const jwt = require('jsonwebtoken');

exports.isLoggedUser =  (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) return res.status(401).json({error:'Access Denied. You have to log in!'});

    try {
       const verified = jwt.verify(token, process.env.TOKEN_SECRET);
       req.user = verified;
       next();
    }
    catch (error) {
        res.status(400).json({error: "Invalid Token"});
    }
    
}