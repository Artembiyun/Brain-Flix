const express = require('express');
var bodyParser = require('body-parser')
const app = express();

//const qData = require('./data').questions;

const videoLinks = require('./videoLinks');
const videoData = require('./videos');

app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE');
    next();
  });

// express has built in middleware
app.use(express.static('public'));  
// we are passing a middleware function to app.use
app.use(express.urlencoded({ extended: false }));
// middleware functions end

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());


app.get('/videos/:id', (req, res) => {
    let output = videoData.find((video) => req.params.id == video.id);
    if (output == undefined){
        output = {
            message: "404 I'm so sorry :'("
        }
        res.json(output);
    }
    res.json(output);
});

app.post('/videos/:id', (req, res) => {
   // req.body
    let vidIndex = videoData.findIndex((vid) => req.params.id == vid.id);
    videoData[vidIndex].comments.push(req.body);  
    
    let response = {
        confirmed: "confirmed"
    }
    res.json(response);
})

app.get('/videoLinks', (req, res) => {
    res.json(videoLinks);
});

app.listen(8080, () => {
    console.log('server listening on 8080');
});
