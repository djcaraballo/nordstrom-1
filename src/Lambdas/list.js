'use strict';
 
const AWS = require('aws-sdk')
const dynamoDB = new AWS.DynamoDB.DocumentClient(); 
 
exports.listNotes = () => dynamoDB.scan({ 
  TableName: process.env.TABLE_NAME 
}).promise()
    .then(r => r.Items);