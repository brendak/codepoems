var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// build your user schema and add it to the mongoose.models
var poemSchema = new mongoose.Schema({
  name: {
   type: String,
   required: true,
   trim: true,
  },
// timestamps: {
//   createdAt: 'created_at',
//   updatedAt: 'updated_at'
// },
title: { type: String},
first: { type: String, required: true,},
second: { type: String, required: true,},
third: { type: String},
fourth: { type: String},
fifth: { type: String}
});

mongoose.model('Poem', poemSchema);
