const findInterns = (db, callback) => {
    //  Get the myMovies collection
    const moviesCollection = db.collection('myMovies')

    // find documents

    const data = {
        firstDocument: moviesCollection.findOne().then(doc => console.log("first_document: ", doc)),
        ratingsEqualSeven: moviesCollection.find({"rating": 7}).toArray((err, data) => {
            console.log("Movies with rating equal 7: ", data)
        }),
        movieTitles: moviesCollection.find({}, { projection: {_id: 0,movie: 1 }}).toArray((err, data) => {
            console.log("Movie Titles: ", data)
        })
    }

    callback(data)
}

module.exports = findInterns