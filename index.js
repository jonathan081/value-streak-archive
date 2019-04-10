// javascript for ValueStreak index.html

var request = new XMLHttpRequest();
var searchBar = document.getElementById("searchBar");
var gameName = "";
var results = document.getElementById("results");
var returned_data;
var returned_items;

function search() {
    gameName = searchBar.value;
    results.innerHTML = "<p>Searching ebay for " + gameName + "...</p>";
    keywords = gameName.replace(" ", "+");
    url += "&keywords=" + keywords;

	//create script element
 	s = document.createElement('script'); 
 	s.src = url;
	document.body.appendChild(s);
}


////////////////////////////////////////////////////////////////////////////
///////////////////////  eBay API Search Filters ///////////////////////////
////////////////////////////////////////////////////////////////////////////

//https://developer.ebay.com/devzone/finding/CallRef/findCompletedItems.html

// request URL
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

// callback function name
url += "&callback=fetch";
function fetch(data) {
	returned_items = data.findCompletedItemsResponse[0].searchResult[0].item;
    process(returned_items);
	console.log(returned_items);
}

////////////////////////////////////////////////////////////////////////////
///////////////////////  Response parsing  /////////////////////////////////
////////////////////////////////////////////////////////////////////////////

var minPrice;
var minPriceDate;
var maxPrice;
var maxPriceDate;
var averagePrice;

function process(items) {
    minPrice = 1000.0;
    minPriceDate = "";
    maxPrice = 0.0;
    maxPriceDate = "";
    averagePrice = 0.0;
    var total = 0.0;
    for(var i = 0; i < items.length; i++) {
        var price = parseFloat(items[i].sellingStatus[0].convertedCurrentPrice[0].__value__);
        var date  = new Date(items[i].listingInfo[0].endTime[0]);
        if(price < minPrice) {
            minPrice = price;
            minPriceDate = date;
        }
        if(price > maxPrice) {
            maxPrice = price;
            maxPriceDate = date;
        }
        total += price;
    }
    averagePrice = total / items.length;
    results.innerHTML = '<h3>ebay sales for ' + gameName + ':</h3>';
    results.innerHTML += '<p>The best price was: $' + minPrice + ' on ' + minPriceDate.toString() + '.</p>';
    results.innerHTML += '<p>The highest price was: $' + maxPrice + ' on ' + maxPriceDate.toString() + '.</p>';
    results.innerHTML += '<p>The average price was: $' + averagePrice.toFixed(2) + '.</p>';
}