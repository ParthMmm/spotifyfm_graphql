module.exports = `
    type Query {
        tracks(query: String, limit: Int): [Track]
        albums(query: String, limit: Int): [Album]
        artists(query: String, limit: Int): [Artist]
        topTracks(username: String, period: String): [Track]
        genres(limit: Int): [Tag]
        genre(name: String): Tag
    }
`
