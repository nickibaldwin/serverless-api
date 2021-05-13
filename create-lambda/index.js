'use strict';

//create a lambda in the index.js

const uuid = require('uuid').v4;
const dynamoose = require('dynamoose');
const peopleModel = require('./peopleSchema.js');

exports.handler = async (event) => {
  try {
    //first we get the data from the req.body and in our case request is the event
    const {name, phone} = JSON.parse(event.body); //object destructuring
    //make a unique id for this record
    const id = uuid();

    //make the record based on our Dynamoose Schema
    const record = new peopleModel({ id, name, phone })
    //save the record to the DynamoDB
    const data = await record.save();

    //return the newly saved record and the status code of 200
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }
  } catch (e) {
    return {
      statusCode: 500,
      response: e.message
    }
  }
}

