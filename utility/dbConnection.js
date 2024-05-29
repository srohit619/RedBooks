const { MongoClient } = require("mongodb");

// Connection URL
const uri = process.env.MONGO_URL; //"mongodb://127.0.0.1:27017/";

// Database name
const dbName = process.env.MONGO_DBNAME; //"abcd"; // Replace with your database name

const connectToServer = async (callback) => {
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    _db = client.db(dbName); // Replace with your database name
    console.log("Successfully connected to MongoDB.");
    if (callback) callback(null);
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    if (callback) callback(err);
  }
};

const getDb = () => {
  if (!_db) {
    throw new Error("Database not initialized. Call connectToServer first.");
  }
  return _db;
};

module.exports = {
  connectToServer,
  getDb,
};

// Create a new MongoClient
// const client = new MongoClient(url, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// async function main() {
//   try {
//     // Connect to the MongoDB server
//     await client.connect();
//     console.log("Connected successfully to MongoDB server");

//     // Select the database
//     const db = client.db(dbName);

//     // Select the collection
//     const collection = db.collection("test1"); // Replace with your collection name

//     // Example operation: Insert a document
//     // const insertResult = await collection.insertOne({
//     //   bookTitle: "aa sick",
//     //   bookAuthor: "Herman Melville",
//     //   bookGenre: "Adventure",
//     //   bookYear: "1851",
//     //   bookPublisher: "Harper & Brothers",
//     //   bookPages: "635",
//     //   bookLanguage: "English",
//     // });
//     // console.log("Inserted document:", insertResult.insertedId);

//     // Example operation: Find a document
//     // const findResult = await collection.findOne({ bookTitle: "aa sick" });
//     // console.log("Found document:", findResult);
//   } finally {
//     // Ensure that the client will close when you finish/error
//     await client.close();
//   }
// }

// main().catch(console.error);
