const internsCollection = require("./internCollection");

const MongoClient = require("mongodb").MongoClient;

// Connection URL for Database
const url = "mongodb://localhost:27017";

// Database name
const dbName = "Ibrahim_Adekunle";

// Connecting to Server
MongoClient.connect(url, (err, client) => {
  console.log("Database created by Ibrahim Adekunle");

  // Creating the database
  const db = client.db(dbName);

  // Inserting a collection
  internsCollection(db);

  client.close();
});
