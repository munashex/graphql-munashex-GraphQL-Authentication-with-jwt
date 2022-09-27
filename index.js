const { ApolloServer } = require('apollo-server');
const { MongoClient} = require('mongodb');
const dotenv = require('dotenv');
const {typeDefs} = require('./schema/typeDefs')
dotenv.config();
const {resolvers} = require('./resolvers/resolvers')
const {GetUserFromToken} = require("./auth/VerifyUser")


const { DB_URI, DB_NAME } = process.env;


const start = async () => {
  const client = new MongoClient(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  await client.connect();
  const db = client.db(DB_NAME);

  // The ApolloServer constructor requires two parameters: your schema
  // definition and your set of resolvers.
  const server = new ApolloServer({ 
    typeDefs, 
    resolvers, 
    context: async({req}) => {
    let user = await GetUserFromToken(req.headers.authorization, db) 

    return {
      user, 
      db
    }
    }
  
  });

  // The `listen` method launches a web server.
  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
}

start();


  


  


  


  


  
