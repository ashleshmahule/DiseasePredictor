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
const router = require('express').Router();

var description, freq;

router.post('/getDiseaseInfo', (req, res) => {
    mongoClient.connect('mongodb+srv://ashlesh:admin@diseaseprediction-mltmf.mongodb.net/test', function (err, db) {
        if (err) {
            throw err;
        }

        console.log(req.query);

        var dbObject = db.db('DiseaseInfo');
        dbObject.collection('DiseasePrediction').findOne({ '_id': req.query.query }, function (err, result) {
            if (err) throw err;

            console.log(result.description);

            res.send({ description: result.description, freq: result.frequency, imgUrl: result.imgUrl });
            db.close();
        });

    });
});


router.post('/getDrugInfo', (req, res) => {
    mongoClient.connect('mongodb+srv://ashlesh:admin@diseaseprediction-mltmf.mongodb.net/test', function (err, db) {
        if (err) {
            throw err;
        }

        console.log(req.query);

        var dbObject = db.db('DiseaseInfo');
        dbObject.collection('DrugInformation').findOne({ '_id': req.query.query }, function (err, result) {
            if (err) throw err;

            console.log(result.description);

            res.send({ description: result.description, freq: result.frequency, imgUrl: result.imgUrl });
            db.close();
        });

    });
});



module.exports = router;