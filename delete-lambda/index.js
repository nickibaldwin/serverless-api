'use strict';

const uuid = require('uuid').v4;
const dynamoose = require('dynamoose');
const PeopleModel = require('./peopleSchema.js');

exports.handler = async (event) => {
  try {
    // new technique!  the && here is called short circuting
    const id = event.pathParameters && event.pathParameters.id;

      // PeopleModel is our DB table
      // .scan traverses the DB table and gets all records
      // .exec allows this to be handed back off to us
      // the below is the same as Mongoose -> .find({})
    await PeopleModel.delete(id);

    return {
      statusCode: 200,
      response: "Delete Complete"
    }

  } catch (e) {
    return {
      statusCode: 500,
      response: e.message
    }
  }
}