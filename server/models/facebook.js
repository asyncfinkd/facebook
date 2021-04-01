// import moongose
const mongoose = require("mongoose");

// db schema
const FacebookSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    test: {
        type: Number,
        required: true,
    },
});

// export
const Facebook = mongoose.model("facebooks", FacebookSchema);
module.exports = Facebook;