// javascript for ValueStreak index.html

var request = new XMLHttpRequest();
var searchBar = document.getElementById("searchBar");
var gameName = "";
var results = document.getElementById("results");

function search() {
    gameName = searchBar.value;
    fetch();
    results.innerHTML = "<p>Searched for " + gameName + ".</p>";
}



//https://developer.ebay.com/devzone/finding/CallRef/findCompletedItems.html

// request URL
var url = "http://svcs.ebay.com/services/search/FindingService/v1" + "?";

// filters
url += "OPERATION-NAME=findCompletedItems";
url += "&SERVICE-VERSION=1.13.0";
url += "&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD";
url += "&keywords=Garmin+nuvi+1300+Automotive+GPS+Receiver";
url += "&categoryId=156955&itemFilter(0).name=Condition&itemFilter(0).value=3000&itemFilter(1).name=FreeShippingOnly&itemFilter(1).value=true&itemFilter(2).name=SoldItemsOnly&itemFilter(2).value=true&sortOrder=PricePlusShippingLowest&paginationInput.entriesPerPage=2";

// ebay access key
url += "&SECURITY-APPNAME=ZiyuSong-ValueStr-PRD-279703086-b2b1a6a0";

// callback function name
url += "&callback=fetch";
function fetch(data) {
    console.log(data);
}

s = document.createElement('script'); // create script element
s.src= url;
document.body.appendChild(s);
