const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const locationSchema = new Location({
  name: {type: String, require: true},
  address: {type: String, require: true},
  type: {
    type: String,
    enum: ['coffeeShop', 'bookStore']
  },
  coordinates: [Number],
});

schemaName.index({lcoation: '2dsphere'})

const Location = mongoose.model('Location', locationSchema);
module.exports = Location;