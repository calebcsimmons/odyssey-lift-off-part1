// Import the ApolloServer class from the @apollo/server package
const { ApolloServer } = require("@apollo/server");

// Import the startStandaloneServer function from the @apollo/server/standalone package
const { startStandaloneServer } = require("@apollo/server/standalone");

// Import addMocksToSchema and makeExecutableSchema for mock data trials
const { addMocksToSchema } = require("@graphql-tools/mock");
const { makeExecutableSchema } = require("@graphql-tools/schema");

// Import the GraphQL schema definitions from the local schema file
const typeDefs = require("./schema");

// Defining a mock object and functions that provide mocked data for server to return
const mocks = {
    Query: () => ({
      tracksForHome: () => [...new Array(6)],
    }),
    Track: () => ({
      id: () => "track_01",
      title: () => "Astro Kitty, Space Explorer",
      author: () => {
        return {
          name: "Grumpy Cat",
          photo:
            "https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg",
        };
      },
      thumbnail: () =>
        "https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg",
      length: () => 1210,
      modulesCount: () => 6,
    }),
  };

// Define an asynchronous function to start the Apollo Server
async function startApolloServer() {
    const server = new ApolloServer({
        schema: addMocksToSchema({
            schema: makeExecutableSchema ({ typeDefs }),
            mocks, 
        }),
    }); 
    
    // Creat new instance of ApolloServer with provided schema definitions
    const { url } = await startStandaloneServer(server); // Define the url for sever and start server

    // Verify server is running
    console.log(`
        Server is Running!
        Query at ${url}
        `);
}

// Call function to start the Apollo server
startApolloServer();
