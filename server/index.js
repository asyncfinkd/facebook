// import files.
const express = require("express");
const cors = require("cors");
// mongoose import for connect db
const mongoose = require("mongoose");
const app = express();

const FacebookModel = require("./models/facebook");

// use express to json.
app.use(express.json());

mongoose.connect("mongodb+srv://administrator:administrator@cluster0.fpabj.mongodb.net/facebook?retryWrites=true&w=majority", {
    useNewUrlParser: true, useUnifiedTopology: true
});

// save information (db)

app.post('/insert', async (req, res) => {
    const username = req.body.username;
    const test = req.body.test;
    const facebook = new FacebookModel({username: username, test: test});
    try {
        await facebook.save();
        res.send("hello");
    } catch (err) {
        console.log(err);
    }
})

// Run server
app.listen(3001, () => {
    console.log("Server running on port 3001");
});