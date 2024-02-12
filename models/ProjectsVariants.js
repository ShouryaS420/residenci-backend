const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProjectsVariantsSchema = new Schema({
    projectID: {
        type: String,
        required: true,
    },
    variant: {
        type: String,
        required: true,
    },
    sqFt: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    img: {
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

module.exports = mongoose.model("projects-variants", ProjectsVariantsSchema);
