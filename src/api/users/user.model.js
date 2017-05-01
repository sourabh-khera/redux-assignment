/**
 * Created by sourabh on 6/4/17.
 */

var mongoose = require("mongoose");

var usersSchema = new mongoose.Schema({


    userName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
    },
}, { versionKey: false });

module.exports = mongoose.model('User', usersSchema);