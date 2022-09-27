const jwt = require('jsonwebtoken')  
const dotenv = require('dotenv') 
dotenv.config() 
const {JWT_SECRET} = process.env



const getToken = (user) => jwt.sign({id: user._id}, JWT_SECRET, {expiresIn: '3 days'}) 


module.exports = {getToken}