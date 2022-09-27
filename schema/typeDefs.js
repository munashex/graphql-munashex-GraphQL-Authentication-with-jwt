const {gql} = require('apollo-server')

const typeDefs = gql`
  type Query {
    myTaskLists: [TaskList!]!
    getTaskList(id: ID!): TaskList
  }

  type Mutation {
    signUp(input: SignUpInput!): AuthUser!
    signIn(input: SignInInput!): AuthUser!
    createTaskList(input: createTaskListInput!): TaskList!
    updateTaskList(id: ID!, title: String!): TaskList!
   deleteTaskList(id: ID!): Boolean!
   addUserToTaskList(taskListId: ID!, userId: ID!): TaskList!
  
  }

  

  input createTaskListInput{
  title: String!
  }

  input SignUpInput {
    email: String!
    password: String!
    name: String!
    avatar: String
  }

  input SignInInput {
    email: String!
    password: String!
  }

  type AuthUser {
    user: User!
    token: String!
  }

  type User {
    id: ID!
    name: String!
    email: String!
    avatar: String
  }

  type TaskList {
    id: ID!
    createdAt: String!
    title: String!
    progress: Float!
    users: [User!]!
  }
 
`;


module.exports = {typeDefs}