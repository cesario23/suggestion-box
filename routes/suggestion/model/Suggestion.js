const mongoose = require ("mongoose");

const suggestionSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true
     },
     author: {
         type: String
     },
     suggestion: {
         type: String
     },
     likes: {
         type: Number
     },
     anonymous:{
         type: Boolean
     },
     timeCreated:{
         type: String
     }
});

module.exports = mongoose.model ("suggestion", suggestionSchema);