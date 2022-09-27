const {jwt} = require('jsonwebtoken') 
const dotenv = require('dotenv') 
dotenv.config() 
const {JWT_SECRET} = process.env 
const {objectId} = require('mongodb')


const GetUserFromToken = async(token, db) => {
if(!token) {return } 

let payloadData = jwt.verify(token, JWT_SECRET) 
if(!payloadData.id) {return } 

return await db.collection("Users").findOne({_id: objectId(payloadData.id) })
}


module.exports = {GetUserFromToken}