const express = require('express');
const fs = require('fs');
const bodyParser = require("body-parser");
const app = express();

let stringifyFile 
app.use(bodyParser.json());

app.get('/getNote', function (req, res) {
	fs.readFile('./test.json', 'utf8', function(err, data) {
	    if (err) throw err;
	    stringifyFile = data
	    res.send(data);
	});
});

app.post('/updateNote/:note', function (req, res) {
	fs.readFile('./test.json', 'utf8', function(err, data) {
	    if (err) throw err;
	    stringifyFile = data;
	
		stringifyFile += req.params.note;
		
		fs.writeFile('./test.json', stringifyFile, function(err) {
		    if (err) throw err;
		    console.log('file updated');		 
		});
	});
});

app.listen(3000);