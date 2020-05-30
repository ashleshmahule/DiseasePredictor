const { createServer } = require("http");
const express = require("express");
const compression = require("compression");
const morgan = require("morgan");
const path = require("path");
const normalizePort = port => parseInt(port, 10);
const PORT = normalizePort(process.env.PORT || 5000);
const app = express();
var cors = require('cors');
const mongoClient = require('mongodb').MongoClient;

mongoClient.connect('mongodb+srv://ashlesh:admin@diseaseprediction-mltmf.mongodb.net/test', function(err, db) {
    if(err) {
        throw err;
    }

    var dbObject=db.db('DiseaseInfo');
    dbObject.collection('DiseasePrediction').findOne({'_id': 'AIDS'}, function(err, result) {
        if(err) throw err;

        console.log(result.description);
        db.close();
    });

});

