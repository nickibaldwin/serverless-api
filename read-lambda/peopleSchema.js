'use strict';

const dynamoose = require('dynamoose');

const peopleSchema = new dynamoose.Schema({
  'id': String, //from the primary key in the setup for DB table
  'name': String,
  'phone': String
});

module.exports = dynamoose.model('labTable', peopleSchema);
//'labTable' is the table name in the db