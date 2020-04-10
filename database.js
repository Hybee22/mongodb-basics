const MongoClient = require("mongodb").MongoClient;
const internsDocuments = require("./interns");  // Adds a collection to the database
const findDocuments = require('./findInterns') // Queries the database with the find() and findOne() methods
const updateDocuments = require('./updateInterns') // Updates the database entry using the updateOne() query method

// Database name
const dbName = "Ibrahim_Adekunle";

// Connection URL for Database
const url = `mongodb://localhost:27017/`;
// const url = `mongodb://localhost:27017/${dbName}`;

// Connecting to Server
MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
  if (err) throw err;

  console.log("Database created by Ibrahim Adekunle");

  // Creating the database
  const db = client.db(dbName);

  // Inserting a collection -- myMovies
  internsDocuments(db, () => {

    // This function is used to query the database collection using variants of the find() query method
    findDocuments(db, () => {
      console.log('Documents Found')
    })

    // This function updates the document where it matches 'movie': 'The Banker'
    // updateDocuments(db, () => console.log('Update completed'))
  });

});
