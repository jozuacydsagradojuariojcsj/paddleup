require("dotenv").config();
const jwt = require("jsonwebtoken");

const secretKey = process.env.ACCESS_SECRET;

const authenticateJWT = (req, res, next) => {
    const token = req.headers.accesstoken;
    console.log("token from frontend:",token);

    if(!token) {
        res.status(401).json({error:"Unauthorized"});
        return;
    }

    jwt.verify(token,secretKey, (err, user) => {
        if(err){
            console.log(token)
            console.log(err)
            res.status(403).json({error:"Forbidden"});
            return;
        }
        next();
    });
};

module.exports = { authenticateJWT };