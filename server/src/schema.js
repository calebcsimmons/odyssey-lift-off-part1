const gql = require("graphql-tag"); // Used to wrap GraphQL strings that Apollo libraries expect

const typeDefs = gql`

    "Query to get tracks array for the homepage grid"
    type Query {
        tracksForHome: [Track!]!
    }

    "A track is a group of Modules that teaches about a specific topic"
    type Track {

        "the track's ID number"
        id: ID!
        "the tracks title"
        title: String!
        "the track's main author"
        author: Author!
        "the track's main illustration to display in the track card or track page detail"
        thumbnail: String
        "the track's approximate length to complete, in minutes"
        length: Int
        "the number of modules this track contains"
        modulesCount: Int 
    }

    "Author of a complete track"
    type Author {
        id: ID!
        "Name of the author"
        name: String!
        "Photo of the author via URL"
        photo: String
    }
`;
module.exports = typeDefs;
