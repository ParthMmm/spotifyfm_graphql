require("dotenv").config();

//Import libraries
const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

// Make executable schema
const typeDefs = require("./schemas")
const resolvers = require("./resolvers")

// Initialize Express middlewares
const app = express()
const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

// Start app
app.listen({ port: process.env.PORT || 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)