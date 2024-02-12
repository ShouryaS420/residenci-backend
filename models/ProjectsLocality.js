const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProjectsLocalitySchema = new Schema({
    projectID: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    area: {
        type: String,
        required: true,
    },
    KM: {
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


module.exports = mongoose.model("projects-nearby-localities", ProjectsLocalitySchema);
