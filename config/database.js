const mongoose = require("mongoose");

// 127.0.01 ip address is the same as localhost
mongoose.connect("mongodb://127.0.0.1/players", {
  useNewUrlParser: true,
});

// shortcut to mongoose.connection
const db = mongoose.connection;

db.on("connected", function () {
  console.log("connected to MongoDB at " + db.host + ":" + db.port);
});
