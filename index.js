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

function fetch() {
	// get JSON from ebay
	// https://developer.ebay.com/devzone/finding/CallRef/findCompletedItems.html

	request.open("POST", "http://svcs.ebay.com/services/search/FindingService/v1", true);
	request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200) {
            data = JSON.parse(request.responseText);
            console.log(data);
        }
        else if (request.readyState == 4 && request.status != 200) {
        	console.log(request.responseText);
            alert("Server responded with a bad status code!")
        }
	};
    request.send("OPERATION-NAME=findCompletedItems&" + 
   	             	"SERVICE-VERSION=1.7.0&" +
   			     	"SECURITY-APPNAME=YourAppID&" + 
					"RESPONSE-DATA-FORMAT=XML&" +
					"REST-PAYLOAD&"+
					"keywords=Garmin+nuvi+1300+Automotive+GPS+Receiver&"+
					"categoryId=156955&"+
					"itemFilter(0).name=Condition&"+
					"itemFilter(0).value=3000&"+
					"itemFilter(1).name=FreeShippingOnly&"+
					"itemFilter(1).value=true&"+
					"itemFilter(2).name=SoldItemsOnly&"+
					"itemFilter(2).value=true&"+
					"sortOrder=PricePlusShippingLowest&"+
					"paginationInput.entriesPerPage=2");
}