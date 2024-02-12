const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProjectsAmenitiesSchema = new Schema({
    value: {
        type: String,
        required: true,
    },
    id: {
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

module.exports = mongoose.model("projects-amenities", ProjectsAmenitiesSchema);
