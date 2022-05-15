const { MongoClient } = require("mongodb");
const _uri =
  "mongodb+srv://mohamed:medo1995@cluster0.br4w0.mongodb.net/my_movi_api?retryWrites=true&w=majority";

const dbConn = (coll, cb) => {
  MongoClient.connect(_uri)
    .then(async (client) => {
      const db = client.db("my_movi_api").collection(coll);
      await cb(db);
      client.close();
    })
    .catch((err) => console.log(err));
};

module.exports = dbConn;
