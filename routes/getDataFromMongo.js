const { createServer } = require("http");
const express = require("express");
const compression = require("compression");
const morgan = require("morgan");
const path = require("path");
const normalizePort = port => parseInt(port, 10);
const PORT = normalizePort(process.env.PORT || 5000);
const app = express();
var cors = require('cors');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ashlesh:admin@diseaseprediction-mltmf.mongodb.net/test', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

var database=mongoose.connection;

var disease=mongoose.model('DiseasePrediction','DiseaseInfo');

disease.find('AIDS', '_id', function(err, info) {
    if(err) {
        return 'error occured';
    }
    console.log(info);
});

