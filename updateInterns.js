const updateInterns = (db, callback) => {
        //  Get the myMovies collection
        const moviesCollection = db.collection('myMovies')

        moviesCollection.updateOne({ movie: "The Banker" }, {$set: { movie: "Avengers: Infinity War", year: '2019', rating: 8}}, () => {console.log("Done Updating")})

        moviesCollection.find({}).toArray((err, data) => console.log(data))

}

module.exports = updateInterns