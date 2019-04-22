// javascript for ValueStreak index.html

var request = new XMLHttpRequest();
var searchBar = document.getElementById("searchBar");
var gameName = "";
var plat = "";
var results = document.getElementById("results");
var platform = document.getElementById('platform');
var returned_data;
var returned_items;
var server = "https://value-streak.herokuapp.com/search";
var param = "keywords=";
var data;

function search() {
    param = "keywords=";
    gameName = searchBar.value;
    gameName = gameName.replace(/\</g, '').replace(/\>/g, '');
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
            console.log(data);
            process(data);
        }
    }
    request.send(param);
}

////////////////////////////////////////////////////////////////////////////
///////////////////////  Response parsing  /////////////////////////////////
////////////////////////////////////////////////////////////////////////////

function process(items) {
    // check for valid response data
    if(items.hasOwnProperty('minPrice') && items.hasOwnProperty('minPriceDate')
        && items.hasOwnProperty('minTitle') && items.hasOwnProperty('minImage')
        && items.hasOwnProperty('maxPrice') && items.hasOwnProperty('maxPriceDate')
        && items.hasOwnProperty('maxTitle') && items.hasOwnProperty('averagePrice')) {

        var minPriceDate = new Date(items.minPriceDate);
        var maxPriceDate = new Date(items.maxPriceDate);
        results.innerHTML = '<h3>eBay sales for ' + gameName + ':</h3>';
        results.innerHTML += '<img src="' + items.minImage + '" alt = "Lowest priced item">';
        results.innerHTML += '<p>The lowest price was: $' + items.minPrice.toFixed(2)
                             + '<br>for "' + items.minTitle
                             + '"<br>on ' + minPriceDate.toString() + '.</p>';
        results.innerHTML += '<p>The highest price was: $' + items.maxPrice.toFixed(2)
                             + '<br>for "' + items.maxTitle
                             + '"<br>on ' + maxPriceDate.toString() + '.</p>';
        results.innerHTML += '<p>The average price was: $' + items.averagePrice.toFixed(2) + '.</p>';
    }
    else results.innerHTML = '<h3>Sorry, no items matched your search.</h3>';
}