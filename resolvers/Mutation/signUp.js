const bcrypt = require('bcryptjs')
const {getToken} = require('../../auth/jwtToken')

let signUp = async(_, {input}, {db}) => {
let hashedPassword = bcrypt.hashSync(input.password) 

const savedUser = {
    ...input, 
    password: hashedPassword
} 

let result = db.collection("Users").insertOne(savedUser) 
console.log(result) 
let user = await db.collection("Users").findOne({email: input.email}) 

return {
    user, 
    token: getToken(user)
}
}


module.exports = {signUp}