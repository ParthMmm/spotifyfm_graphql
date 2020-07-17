module.exports = {
    
    getRoot() {
        return 'http://ws.audioscrobbler.com/2.0/?format=json&api_key=' + process.env.API_KEY
    }
}