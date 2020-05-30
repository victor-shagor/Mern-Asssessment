// const mongodb = require("mongodb").MongoClient;
const mongodb = require("mongodb").MongoClient;
const csvtojson = require("csvtojson");
require("dotenv").config();

const csvtoArray = async () => {
  return await csvtojson().fromFile("car_ownsers_data.csv");
};

export const populate = async () => {
  const array = await csvtoArray();
  mongodb.connect(
    process.env.MONGODB_URI,
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
