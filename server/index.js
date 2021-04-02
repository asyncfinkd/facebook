// import files.
const express = require("express");
const cors = require("cors");
// mongoose import for connect db
const mongoose = require("mongoose");
const app = express();
app.use(cors());

// use express to json.
app.use(express.json());

mongoose.connect(
  "mongodb+srv://administrator:administrator@cluster0.fpabj.mongodb.net/facebook?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const InsertSignUp = require("./router/signup/insert/insertSignUp");
app.use("/authInsert", InsertSignUp);

const ReadSignUp = require("./router/signup/readSignup");
app.use("/auth", ReadSignUp);

// Run server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
