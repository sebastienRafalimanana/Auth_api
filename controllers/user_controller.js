const  user_model  = require("../models/user_model");
const auth = require("./auth");

const user_controller = {
    OnCreateUser:async (req,res)=>{
        let name = req.body.name;
        let last_name = req.body.last_name;
        let email = req.body.email;
        let password = req.body.password;
        try {
            let verify = await user_model.getVerify(email)
            console.log(verify);
            if (verify ===null && password !="" &&  name !=""){
                let user = await user_model.createUser(name,last_name,email,password)
                let token = auth.generate_first_token(email)
                return res.status(200).json({success:true, user,autorization:token})
            }
            else if(verify.email === email) {
                return res.status(412).json({message:"email already in use"})
            }
            else{
                return res.status(400).json({error: true,message:"invalid information"})
                  }
        } catch (error) {
            res.status(500).json({error:true,message:"Server error"})
        }
    },
    onGetUser:async (req, res) => {
        if(auth.verify_token(req.headers.authorization)){
            try {
                users = await user_model.getUsers();
                return res.status(200).json({success:true, users})
            } catch (error) {    
                res.status(500).json({error:true,message:"Server error"})
            }
        }else{
            return res.status(403).json({message:"invalid token"})
        }
        
    }
}
module.exports = user_controller;