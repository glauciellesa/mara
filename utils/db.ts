import mongoose from "mongoose";

const { MONGODB_URI } = process.env;

console.log({ MONGODB_URI });

const connection = {
  isConnected: false,
};

const connect = async () => {
  if (connection.isConnected) {
    console.log("Already connected");
    return;
  }
  if (mongoose.connections.length > 0) {
    connection.isConnected =
      mongoose.connections[0].readyState ===
      mongoose.ConnectionStates.connected;
    if (connection.isConnected) {
      console.log("Use previous connection");
      return;
    }
    await mongoose.disconnect();
  }
  if (MONGODB_URI) {
    const db = await mongoose.connect(MONGODB_URI);
    console.log("new connection");
    connection.isConnected =
      db.connections[0].readyState === mongoose.ConnectionStates.connected;
  }
};

const disconect = async () => {
  if (connection.isConnected) {
    if (process.env.NODE_ENV === "production") {
      await mongoose.disconnect();
      connection.isConnected = false;
    } else {
      console.log("not disconnected");
    }
  }
};

const db = { connect, disconect };

export default db;
