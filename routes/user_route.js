/**
 * api du user
 * @autor Rafalimanana jean sebastien
 */
 var express = require('express');
 const user_controller = require('../controllers/user_controller');
 const auth = require('../controllers/auth');
 const ROUTER = express.Router();
 
 
 // route pour user
 const user_route = (APP) => {
    ROUTER.route('/user')
         .get(user_controller.onGetUser)
         .post(user_controller.OnCreateUser)
     ROUTER.route('/user/auth')
         .post(auth.generate_token)
     
     return ROUTER;
 }
 
 module.exports = user_route;