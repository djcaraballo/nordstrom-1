'use strict';
 
const AWS = require('aws-sdk')
const dynamoDB = new AWS.DynamoDB.DocumentClient(); 
 
exports.createNote = function(event, context, callback){
  const params = {
    Item : {
      "id" : Date.now(),
      "note" : event.note,
      "tag" : event.tag
    },
    TableName : process.env.TABLE_NAME
  };
  return dynamoDB.put(params, function(err, data){
    callback(err, data);
  });
}