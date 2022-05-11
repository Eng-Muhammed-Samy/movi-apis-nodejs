const { MongoClient } = require("mongodb");
const _uri =
  "mongodb+srv://mohamed:medo1995@cluster0.br4w0.mongodb.net/sample_mflix?retryWrites=true&w=majority";

const dbConn = (coll, cb) => {
  MongoClient.connect(_uri)
    .then(async (client) => {
      const db = client.db("sample_mflix").collection(coll);
      await cb(db);
      client.close();
    })
    .catch((err) => console.log(err));
};

module.exports = dbConn;
