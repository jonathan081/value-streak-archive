const express = require('express')
const bodyParser = require('body-parser');
const validator = require ('validator');
const http = require('http');
const path = require('path');
const PORT = process.env.PORT || 3000;

const app = express();
var eBayData = "";

var url = "http://svcs.ebay.com/services/search/FindingService/v1";
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


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

app.post('/search', (req, res) => {
  if (req.body.hasOwnProperty('keywords')) {
    url += "&keywords=" + req.body.keywords;
    http.get(url, (httpRes) => {
      httpRes.on('data', function(d){
        eBayData += d;
      });
      httpRes.on('end', () => {
        var parsed = JSON.parse(eBayData);
        res.send(parsed);
      })
    })
  } else 
    res.send({"error" : "Something is wrong with the data"});   
});

app.listen(PORT, (err)=> console.log("Listening on port " + PORT));




