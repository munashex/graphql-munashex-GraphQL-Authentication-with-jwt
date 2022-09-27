const bcrypt = require('bcryptjs')
const {getToken} = require('../../auth/jwtToken')


let signIn = async(_, {input}, {db}) => { 

    const user = await db.collection("Users").findOne({email: input.email}) 
    let checkPassword = bcrypt.compareSync(input.password , user.password) 
    
    if(!user|| !checkPassword) {
        throw new Error("wrong password or email")
    } 

    return {
        user, 
        token: getToken(user)
    } 
}


module.exports = {signIn}