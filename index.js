// javascript for ValueStreak index.html

var request = new XMLHttpRequest();
var searchBar = document.getElementById("searchBar");
var gameName = "";
var results = document.getElementById("results");
var returned_data;
var returned_items;

function search() {
    gameName = searchBar.value;
    results.innerHTML = "<p>Searched for " + gameName + ".</p>";
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
	console.log(returned_items);
}

