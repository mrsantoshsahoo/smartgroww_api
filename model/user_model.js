const mongoose = require("mongoose");
const user = mongoose.Schema({
    email: {
        type: String
    },
    name: {
        type: String
    },  
    number: {
        type: String
    },
    password: {
        type: String
    }
})
module.exports = mongoose.model("User", user);