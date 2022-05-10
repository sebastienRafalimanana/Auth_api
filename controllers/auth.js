var mongoose = require('mongoose'),
    jwt = require('jsonwebtoken'),
    jwt_expired = require("../config").JWT_EXPIRED,
    jwt_key = require("../config").JWT_KEY;
const  user_model  = require("../models/user_model");

const Auth = {
    generate_token: async function(req, res) {
        let email = req.body.email;
        let password = req.body.password;
        let user_auth = await user_model.getOneUsers(email,password)
        if (user_auth == null) {
            return res.status(401).json({message: 'Invalid password or email'});
        } else {
            let token = jwt.sign({ email }, jwt_key, {
                algorithm: "HS256",
                expiresIn: jwt_expired,
            })
            return res.status(201).json({message:"user authenticated",user:user_auth,autorization:token});
        }
    },
    generate_first_token: function(email) {
        let token = jwt.sign({ email }, jwt_key, {
            algorithm: "HS256",
            expiresIn: jwt_expired,
        })
        return token;
    }
    ,
    verify_token: function(auth) {
        try {
            data = jwt.verify(auth, jwt_key)
            return true;
        } catch (err) {
            return false;
        } 
       
    },
}

module.exports = Auth;