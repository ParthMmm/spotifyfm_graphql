require("dotenv").config();

const typeDefs = require("./schemas");
const resolvers = require("./resolvers");
const { ApolloServer, gql } = require("apollo-server");

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
  engine: {
    reportSchema: true,
    graphVariant: "current",
  },
});

// The `listen` method launches a web server.
server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
