const mongoose = require("mongoose");
const blogs = mongoose.Schema({
    image: {
        type: String
    },
    title: {
        type: String
    },  
    subTitle: {
        type: String
    },
    decryption: {
        type: String
    }
})
module.exports = mongoose.model("blogs", blogs);