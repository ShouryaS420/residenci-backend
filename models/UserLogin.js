const mongoose = require("mongoose");
const { Schema } = mongoose;
const { jwt } = 'jsonwebtoken';

const UserLoginSchema = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        required: true,
    },
    city: {
        type: String,
    },
    mobile: {
        type: Number,
    },
    otp: {
        type: Number,
    },
    date: {
        type: String,
        default: Date.now,
    },
}, {
    supressReservedKeysWarning: true,
});

UserLoginSchema.methods.getJWTToken = function () {
  return jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000,
  });
};

module.exports = mongoose.model("user-residenci", UserLoginSchema);
