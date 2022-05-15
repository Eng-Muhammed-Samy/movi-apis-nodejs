const { MongoClient } = require("mongodb");
const _uri = process.env.MONGODB_URI;

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
