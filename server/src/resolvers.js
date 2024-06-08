const resolvers = {

    //? Entry point for all data-fetching operations.
    Query: {
      
      // Returns array of Tracks used to populate the homepage grid of the web client
      tracksForHome: (_, __, { dataSources }) => {
        return dataSources.trackAPI.getTracksForHome();
      },
  
      // Get a single track by its ID, for the track page
      track: (_, { id }, { dataSources }) => {
        return dataSources.trackAPI.getTrack(id);
      },
    },
  
    //? Defines resolvers for fields of the Track object type.
    Track: {
      
      // Get the author details for a specific track using the authorId
      author: ({ authorId }, _, { dataSources }) => {
        return dataSources.trackAPI.getAuthor(authorId);
      },

      // Get the module details for a specific track using the trackId
      modules: ({ id }, _, { dataSources }) => {
        return dataSources.trackAPI.getTrackModules(id)
      }
    },
  };
  
  module.exports = resolvers;
  