var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var savedpoemsSchema = new mongoose.Schema({
created_at: { type: Date, default: Date.now },
title: {type: String},
inputone: {type: String},
inputtwo: {type: String},
inputthree: {type: String},
inputfour: {type: String},
inputfive: {type: String},
shared: {type: Number, default: 0}
});

mongoose.model('savedPoem', savedpoemsSchema);
