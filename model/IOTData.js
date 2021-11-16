const mongoose = require("mongoose");

const SfuitData = mongoose.Schema({
  device_id: String,
  data: {
    type: Object,
    default: {},
  },
  macAddr: String,
  timestamp: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = {
  SfuitData: mongoose.model("SfuitData", SfuitData),
};
