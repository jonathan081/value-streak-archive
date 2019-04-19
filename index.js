// javascript for ValueStreak index.html

var request = new XMLHttpRequest();
var searchBar = document.getElementById("searchBar");
var gameName = "";
var plat = "";
var results = document.getElementById("results");
var platform = document.getElementById('platform');
var returned_data;
var returned_items;
var server = "https://valuestack-server.herokuapp.com/search";
var param = "keywords=";
var data;

function search() {
    gameName = searchBar.value;
    plat = platform.options[platform.selectedIndex].value;
    if(plat != '') plat = '+' + plat;
    results.innerHTML = "<p>Searching eBay for " + gameName + "...</p>";
    keywords = gameName.replace(" ", "+") + plat;
    param += keywords;
    requestData();
}

function requestData() {
    request.open('Post', server, true);
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200){
            data = JSON.parse(request.responseText);
            check(data);
        }
    }
    request.send(param);
}

function check(data) {
    // check for valid response data
    if (data.findCompletedItemsResponse[0].searchResult[0].item != undefined) {
	    returned_items = data.findCompletedItemsResponse[0].searchResult[0].item;
        process(returned_items);
	    console.log(returned_items);
    }
    else results.innerHTML = '<h3>Sorry, no items matched your search.</h3>';
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
    // initialize price range variables
    minPrice = 1000.0;
    minPriceDate = "";
    maxPrice = 0.0;
    maxPriceDate = "";
    averagePrice = 0.0;
    var total = 0.0;
    var maxTitle = "";
    var minTitle = "";

    // doublecheck for valid response data
    if(items != undefined) {
        if(items.length != 0) {
            for(var i = 0; i < items.length; i++) {
                var price = parseFloat(items[i].sellingStatus[0].convertedCurrentPrice[0].__value__);
                if(price < minPrice) {
                    minPrice = price;
                    minPriceDate = new Date(items[i].listingInfo[0].endTime[0]);
                    minTitle = items[i].title[0];
                }
                if(price > maxPrice) {
                    maxPrice = price;
                    maxPriceDate = new Date(items[i].listingInfo[0].endTime[0]);
                    maxTitle = items[i].title[0];
                }
                total += price;
            }
            averagePrice = total / items.length;
            results.innerHTML = '<h3>eBay sales for ' + gameName + ':</h3>';
            results.innerHTML += '<p>The lowest price was: $' + minPrice.toFixed(2)
                                 + '<br>for "' + minTitle
                                 + '"<br>on ' + minPriceDate.toString() + '.</p>';
            results.innerHTML += '<p>The highest price was: $' + maxPrice.toFixed(2)
                                 + '<br>for "' + maxTitle
                                 + '"<br>on ' + maxPriceDate.toString() + '.</p>';
            results.innerHTML += '<p>The average price was: $' + averagePrice.toFixed(2) + '.</p>';
        }
        else results.innerHTML = '<h3>Sorry, no items matched your search.</h3>';
    }
    else results.innerHTML = '<h3>Sorry, no items matched your search.</h3>';
}