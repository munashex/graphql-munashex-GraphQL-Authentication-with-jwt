const {myTaskLists} = require('./Query/allTask') 
const {signUp} = require('./Mutation/signUp')
const {signIn} = require('./Mutation/signIn') 
const {User} = require("../schema/customType")

const resolvers = {
Query: {
    myTaskLists
}, 

Mutation: {
signUp, 
signIn
}, 

//custom type for User schema
User

}

module.exports = {resolvers}