const express = require("express");
const mongoose = require("mongoose");

const menSchema = new mongoose.Schema({
  ranking: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
  event: {
    type: String,
    default: "100m",
  },
});
//we are creating new collection
const MensRanking = new mongoose.model("MenRanking", menSchema);

module.exports = MensRanking;
