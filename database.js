const MongoClient = require("mongodb").MongoClient;
const internsCollection = require("./internCollection");

// Database name
const dbName = "Ibrahim_Adekunle";

// Connection URL for Database
const url = `mongodb://localhost:27017/${dbName}`;

// Connecting to Server
MongoClient.connect(url, (err, client) => {
  if (err) throw err;

  console.log("Database created by Ibrahim Adekunle");

  // Creating the database
  const db = client.db(dbName);

  // Inserting a collection
  internsCollection(db);

  client.close();
});
