const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');


const User = require('../../models/User');

//@route POST api/users
//@desc Test route
//@access Public

router.post(
    '/', [
    check('name', 'Name is required')
    .not()
    .isEmpty(),
    
    check('email', 
    'Please include a valid Email').isEmail(),

    check('password', 
    'Password with at least 6 characters please').isLength({ min:6 })
],  
    async (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array( )})
        }

        const {name, email, password, admin} = req.body;
        try{
            let user = await User.findOne({email});
            
            //see if user exist
            if (user){
                return res.status(400).json({errors: [ { msg:"user already exist"}]});
            }
            user = new User({
                name,
                email,
                password,
                admin
            });
            //encrypt password
            const salt = await bcrypt.genSalt(10);

            user.password = await bcrypt.hash(password, salt);

            await user.save();

            //return jsonwebtoken
            const payload ={
                user: {
                    id: user.id
                }
            }
            jwt.sign(
                payload,
                config.get('jwtSecret'),
                { expiresIn: 36000},(err, token) =>{
                    if(err) throw err;
                    res.json({token})
                })

        }catch(err){
            console.err(err.message);
            res.status(500).send('server error');
        }
        
    }
);

module.exports = router;