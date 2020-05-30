// const mongodb = require("mongodb").MongoClient;
const mongodb = require("mongodb").MongoClient;
const csvtojson = require("csvtojson");

let mongourl = "mongodb://localhost:27017/";

const csvtoArray = async () => {
  return await csvtojson().fromFile("car_ownsers_data.csv");
};

export const populate = async (url = mongourl) => {
  const array = await csvtoArray();
  mongodb.connect(
    url,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err, client) => {
      if (err) throw err;

      client
        .db("mern")
        .collection("owners")
        .insertMany(array, (err, res) => {
          if (err) throw err;

          console.log(`Inserted: ${res.insertedCount} rows`);
          client.close();
        });
    }
  );
};
populate();
