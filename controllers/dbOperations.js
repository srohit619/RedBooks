// crudOperations.js
const { connectToServer, getDb } = require("../utility/dbConnection");

// Create
const createDocument = async (doc) => {
  try {
    await connectToServer();
    const db = getDb();
    const collection = db.collection("test1");
    const result = await collection.insertOne(doc);
    db.close();
    console.log("Document created:", result.insertedId);
  } catch (err) {
    console.error("Error creating document:", err);
  }
};

// Read
const readDocuments = async (query) => {
  try {
    await connectToServer();
    const db = getDb();
    const collection = db.collection("abcd");
    // const documents = await collection.find(query).toArray();
    const documents = await collection.find(query).toArray();
    // console.log("Documents found:", documents);
    return documents;
  } catch (err) {
    console.error("Error reading documents:", err);
    return [];
  }
};

// Update
const updateDocument = async (query, update) => {
  try {
    await connectToServer();
    const db = getDb();
    const collection = db.collection("abcd");
    const result = await collection.updateOne(query, { $set: update });
    console.log("Document updated:", result.modifiedCount);
  } catch (err) {
    console.error("Error updating document:", err);
  }
};

// Delete
const deleteDocument = async (query) => {
  try {
    await connectToServer();
    const db = getDb();
    const collection = db.collection("abcd");
    const result = await collection.deleteOne(query);
    console.log("Document deleted:", result.deletedCount);
  } catch (err) {
    console.error("Error deleting document:", err);
  }
};

module.exports = {
  createDocument,
  updateDocument,
  deleteDocument,
  readDocuments,
};
