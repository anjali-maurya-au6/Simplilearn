const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  content: String,
  from: Object,
  socketid: String,
  time: String,
  date: String,
  to: String,
});

const Message = mongoose.node("Message", MessageSchema);

module.exports = Message;
