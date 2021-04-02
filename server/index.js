// import files.
const express = require("express");
const cors = require("cors");
// mongoose import for connect db
const mongoose = require("mongoose");
const app = express();
app.use(cors());
const FacebookModel = require("./models/facebook");

// use express to json.
app.use(express.json());

mongoose.connect(
  "mongodb+srv://administrator:administrator@cluster0.fpabj.mongodb.net/facebook?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// save information (db)

app.post("/insert", async (req, res) => {
  const username = req.body.username;
  const lastname = req.body.lastname;
  const email = req.body.email;
  const password = req.body.password;
  const facebook = new FacebookModel({
    username: username,
    lastname: lastname,
    email: email,
    password: password,
  });
  try {
    await facebook.save();
    res.send("hello");
  } catch (err) {
    console.log(err);
  }
});

let user = {};
app.post("/read", async (req, res) => {
  FacebookModel.findOne({ email: req.body.email }).then((result) => {
    if (result == null) {
      res.json({ message: "მომხმარებელი არ არსებობს", success: false });
      console.log(result);
    } else if (result.password == req.body.password) {
      user = result;
      res.json({ user: result, success: true });
    } else {
      res.json({ message: "პაროლი არასწორია", success: false });
    }
  });
});

// Run server
app.listen(3001, () => {
  console.log("Server running on port 3001");
});
