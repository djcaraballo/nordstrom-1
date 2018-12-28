'use strict';

const AWS = require('aws-sdk')
const dynamoDB = new AWS.DynamoDB.DocumentClient(); 
const TABLE_NAME = 'notes-gql'
 
module.exports.addNote = (event, context, callback) =>{
  const params = {
    Item : {
      "id" : Date.now(),
      "note" : event.note,
      "tag" : event.tag
    },
    TableName : process.env.TABLE_NAME
  };

  return dynamoDB.put(params, (error, data) =>{
    callback(error, data);
  });
}

module.exports.getNotes = () => dynamoDB.scan({ 
  TableName: process.env.TABLE_NAME 
}).promise()
    .then(r => r.Items);

