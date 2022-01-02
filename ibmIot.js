const connectOptions = {
  port: 443,
  host: "dt9z6d.messaging.internetofthings.ibmcloud.com",
  rejectUnauthorized: false,
  protocol: "mqtts",
  username: "a-dt9z6d-rapiisy2hw",
  password: "@Ogv9GCKyBWmVYyBga",
  clientId: "a:dt9z6d:backend-data",
  ca: "messaging.pem",
};

var mqtt = require("mqtt");
const WebSocket = require("ws");
const { SfuitData } = require("./model/IOTData");
const { UserData } = require("./model/UserData");

const IbmIot = (io) => {
  var client = mqtt.connect(connectOptions);
  client.on("connect", () => {
    client.subscribe("iot-2/type/+/id/+/evt/+/fmt/json");
  });
  io.on("connection", (socket) => {
    client.on("message", async function (topic, message) {
      const _Data = JSON.parse(message);
      socket.emit(_Data.data.device_id, _Data);
    });
  });

  client.on("message", async function (topic, message) {
    const _Data = JSON.parse(message);
    if (await UserData.exists({ device_id: _Data.data.device_id })) {
      await UserData.findOneAndUpdate(
        { device_id: _Data.data.device_id },
        { data: _Data },
        { new: true }
      );
    } else {
      const user_data = new UserData({
        device_id: _Data.data.device_id,
        macAddr: _Data.data.device_id,
        data: _Data,
      });
      await user_data.save();
    }
    const data = new SfuitData({
      device_id: _Data.data.device_id,
      macAddr: _Data.data.device_id,
      data: _Data,
    });
    await data.save();
  });
};

module.exports = {
  IbmIot: IbmIot,
};
