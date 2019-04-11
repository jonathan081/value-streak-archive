const express = require('express')
const bodyParser = require('body-parser');
var validator = require ('validator');
var app = express();
const path = require('path');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var url = "https://svcs.ebay.com/services/search/FindingService/v1";
url += "?OPERATION-NAME=findCompletedItems";
url += "&SERVICE-VERSION=1.13.0";
url += "&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD";

// video games category id : 139973
url += "&categoryId=139973";

// item filers
url += "&itemFilter(0).name=FreeShippingOnly&itemFilter(0).value=true&itemFilter(1).name=SoldItemsOnly&itemFilter(1).value=true";
url += "&itemFilter(2).name=TopRatedSellerOnly&itemFilter(2).value=true";
// sort order

url += "&sortOrder=BestMatch";

// ebay access key
url += "&SECURITY-APPNAME=ZiyuSong-ValueStr-PRD-279703086-b2b1a6a0";

const PORT = process.env.PORT || 3000;
const https = require('https');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

app.post('/search', function(req, res){
  if (req.body.hasOwnProperty('keywords')) {
    url += "&keywords=" + req.body.keywords;
    https.get(url, function(httpRes){
      res.send({"findCompletedItemsResponse" : httpRes.findCompletedItemsResponse});
    })
  } else 
    res.send({"error" : "Something is wrong with the data"});   
});

app.listen(PORT);