const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new User({
  name: {type: String, require: true},
  lastname: {type: String, require: true},
  email: {type: String, require: true},
  phoneNumber: String,
  birthDate: String,
  gender: String,
  userImage: {
    imgName: String,
    imgPath: String
    // default: //PENDIENTE URL
  },
  password: {type: String, require: true},
});

const User = mongoose.model('User', userSchema);
module.exports = User;