// import moongose
const mongoose = require("mongoose");

// db schema
const FacebookSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// export
const Facebook = mongoose.model("facebooks", FacebookSchema);
module.exports = Facebook;
