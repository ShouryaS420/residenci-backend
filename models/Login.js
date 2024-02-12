const mongoose = require("mongoose");
const { Schema } = mongoose;

const LoginSchema = new Schema({
    mobileNumber: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        default: Date.now,
    },
}, {
    supressReservedKeysWarning: true,
});

module.exports = mongoose.model("user-login", LoginSchema);
