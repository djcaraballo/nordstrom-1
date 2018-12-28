'use strict';

const AWS = require('aws-sdk')
const dynamoDB = new AWS.DynamoDB.DocumentClient(); 
const TABLE_NAME = 'notes-gql'
 
module.exports.createNote = (event, context, callback) => {
  const params = {
    Item : {
      "id" : Date.now(),
      "note" : event.note,
      "tag" : event.tag
    },
    TableName : process.env.TABLE_NAME
  };
  const response = {
    statusCode: 200,
    message: `Item with id: ${params.Item.id} successfully added to database!`
  }
  callback(null, response)
  return dynamoDB.put(params, (error, response) => {
    callback(error, response);
  });
}

module.exports.listNotes = async (event, context, callback) => {
  const result = await dynamoDB.scan({ TableName: process.env.TABLE_NAME }).promise()
  const notes = result.Items
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    },
    body: {
      notes: notes
    }
  }
  callback(null, response)
};

