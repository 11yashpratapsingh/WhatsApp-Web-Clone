import mongoose from "mongoose";

const Connection = async (username, password) => {
  const URL = `mongodb://${username}:${password}@chatapp-shard-00-00.4iern.mongodb.net:27017,chatapp-shard-00-01.4iern.mongodb.net:27017,chatapp-shard-00-02.4iern.mongodb.net:27017/WHATSAPPCLONE?ssl=true&replicaSet=atlas-f3hd3q-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database Connected Succesfully");
  } catch (error) {
    console.log("Error while connecting to mongodb ", error);
  }
};

export default Connection;
