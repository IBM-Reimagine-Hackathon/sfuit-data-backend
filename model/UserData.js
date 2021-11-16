const mongoose = require("mongoose");

const UserData = mongoose.Schema({
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
  UserData: mongoose.model("UserData", UserData),
};
