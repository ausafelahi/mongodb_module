const mongoose = require("mongoose");

const db_connect = async () => {
  try {
    const connnect = await mongoose.connect(
      "mongodb+srv://ausafelahi8:MKdfvtrhRoOhNgWU@cluster0.myifcln.mongodb.net/?retryWrites=true&w=majority",
      {
        dbName: "UIT_Module_2",
      }
    );
    const { port } = connnect.connection;
    console.log(port);
  } catch (error) {
    console.log(error);
  }
};
module.exports = db_connect;
