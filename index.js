/* global process */ 
var json2xls = require('json2xls'),
    fs = require("fs");

var args = process.argv;
var iterations = args[2];
var outFile = args[3];
var model = args[4];

if (iterations && outFile) {
    if (/.xlsx$/.test(outFile)) {
        var modelConstructor;
        try {
            modelConstructor = require("./models/" + model);            
        }
        catch (e) {
            throw 'Please specify the filename of an existing model in the ./models directory';
        }
        
        var testData = [];

        for (var i = 0; i < iterations; i++) {
            testData.push(modelConstructor());
        }

        var xls = json2xls(testData);


        fs.writeFileSync(outFile, xls, 'binary');

        console.log(JSON.stringify(testData, null, 2));        
            
    } else {
        throw 'Please include the .xlsx extension on your outfile';
    }
} else {
    throw 'Please specify a number of interations and an outfile';
}

