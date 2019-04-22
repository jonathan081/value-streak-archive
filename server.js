const express = require('express')
const bodyParser = require('body-parser')
const validator = require ('validator')
const http = require('http')
const path = require('path')
const PORT = Number(process.env.PORT) || 3000

const app = express();

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
  //res.header("Access-Control-Allow-Origin", "http://value-streak.herokuapp.com");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

app.post('/search', (req, res) => {
  var eBayData = "";
  var toSend;
  var minPrice = 1000.0;
  var minPriceDate = "";
  var maxPrice = 0.0;
  var maxPriceDate = "";
  var averagePrice = 0.0;
  var total = 0.0;
  var maxTitle = "";
  var minTitle = "";
  var minImage = "";
  var prices = [];
  if (req.body.hasOwnProperty('keywords')) {
    var key = validator.escape(req.body.keywords);
    url += "&keywords=" + key;
    http.get(url, (httpRes) => {
      httpRes.on('data', function(d){
        eBayData += d;
      });
      httpRes.on('end', () => {
        var parsed = JSON.parse(eBayData);
        if(parsed.findCompletedItemsResponse[0].searchResult[0].item != undefined) {
          parsed = parsed.findCompletedItemsResponse[0].searchResult[0].item;
          for(var i = 0; i < parsed.length; i++) {
            var price = parseFloat(parsed[i].sellingStatus[0].convertedCurrentPrice[0].__value__);
            var date = new Date(parsed[i].listingInfo[0].endTime[0]);
            prices[i] = {
                "price": price,
                "date": date,
            };
            if(price < minPrice) {
              minPrice = price;
              minPriceDate = date;
              minTitle = parsed[i].title[0];
              if(parsed[i].hasOwnProperty('galleryURL'))
                minImage = parsed[i].galleryURL[0];
            }
            if(price > maxPrice) {
              maxPrice = price;
              maxPriceDate = date;
              maxTitle = parsed[i].title[0];
            }
            total += price;
          }
          averagePrice = total / parsed.length;
          minImage = minImage.replace('http://', 'https://');
          toSend = {
            "minPrice": minPrice,
            "minPriceDate": minPriceDate,
            "minTitle": minTitle,
            "maxPrice": maxPrice,
            "maxPriceDate": maxPriceDate,
            "maxTitle": maxTitle,
            "averagePrice": averagePrice,
            "minImage": minImage,
            "prices": prices,
          };
          res.send(toSend);
        } else
          res.send({"error" : "Something is wrong with the data"});
      })
    })
  } else 
    res.send({"error" : "Something is wrong with the data"});
});

app.use((req, res, next) => {
    if(req.header('x-forwarded-proto') !== 'https') {
        res.redirect(`https://${req.header('host')}${req.url}`);
    } else {
        next();
    }
});
app.use(express.static("public"));

app.listen(PORT, (err)=> console.log("Listening on port " + PORT));