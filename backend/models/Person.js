const { Schema, model } = require("mongoose");
const schema = new Schema({
    USER_ID: { type: String, required: true},
    FIRSTNAME: { type: String, required: true },
    LASTNAME: { type: String, required: true },
    AGE: { type: Number, required: true },
    CITY: { type: String },
    PHONE_NUMBER: { type: String },
    COMPANY_NAME: { type: String },
    EMAIL: { type: String, required: true },
});

module.exports = model("persons", schema);
