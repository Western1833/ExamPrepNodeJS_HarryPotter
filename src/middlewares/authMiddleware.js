const jwt = require('../lib/jwt.js');

exports.auth = async (req, res, next) => {
    const token = req.cookies['auth'];

    if(token){
        try{
            const decodedToken = await jwt.verify(token, SECRET);
            req.user = decodedToken;
            req.locals.user = decodedToken;
            res.locals.isAuthenticated = true;
            next();
        }catch(err){
            console.log({err});
            res.clearCookie('token');
            res.redirect('/users/login');
        }

        return;
    }

    next();
}