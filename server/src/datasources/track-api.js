// the data source in charge of calling the REST API and retrieving the data

const { RESTDataSource } = require('@apollo/datasource-rest');

class TrackAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://odyssey-lift-off-rest-api.herokuapp.com/';
  }

  async getTracksForHome() {
    return this.get('tracks');
  }

  async getAuthor(authorId) {
    return this.get(`author/${authorId}`);
  }

  // Method to get a single track
  async getTrack(trackId) {
    return this.get(`track/${trackId}`)

  }
}

module.exports = TrackAPI;
