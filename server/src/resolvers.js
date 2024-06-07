const resolvers = {
    Query: {

        // Returns array of Tracks that will be used to populate
        // the homepage grid of web client
        tracksForHome: (_, __, {dataSources}) => {
            return dataSources.trackAPI.getTracksForHome();
        },
    },

    Track: {
        author: ({authorId}, _, {dataSources}) => {
            return dataSources.trackAPI.getAuthor(authorId);
        },
    },
};

module.exports = resolvers;