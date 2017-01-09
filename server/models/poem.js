var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var poemSchema = new mongoose.Schema({
  name: {
   type: String,
   required: true,
   trim: true,
  },
  created_at: { type: Date, default: Date.now },
title: { type: String},
first: { type: String, required: true},
second: { type: String, required: true},
third: { type: String, required: true},
fourth: { type: String, required: true},
fifth: { type: String, required: true}
});

mongoose.model('Poem', poemSchema);
