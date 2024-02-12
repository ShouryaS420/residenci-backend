const mongoose = require("mongoose");
const { Schema } = mongoose;

const SiteVisitSchema = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        required: true,
    },
    mobile: {
        type: Number,
        required: true,
    },
    date: {
        type: String,
        default: Date.now,
    },
}, {
    supressReservedKeysWarning: true,
});

module.exports = mongoose.model("site-visit", SiteVisitSchema);
