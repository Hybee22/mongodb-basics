const internsDocuments = (db, callback) => {

  const moviesCollection = db.collection('myMovies')

  const movies = [
    {
      movie: "The Banker",
      year: "2020",
      rating: 8
    },
    {
      movie: "Bad Boys",
      year: "2020",
      rating: 7
    },
    {
      movie: "The Hunt",
      year: "2020",
      rating: 7
    },
    {
      movie: "Bloodshot",
      year: "2020",
      rating: 7.5
    },
    {
      movie: "First Cow",
      year: "2020",
      rating: 6.5
    }
  ];

  moviesCollection.insertMany(movies, (err, data) => {
    if (err) console.log(err)

    // console.log("5 documents inserted into the movies collection")
    // console.log(data)
    callback(data)
  })
};

module.exports = internsDocuments;
