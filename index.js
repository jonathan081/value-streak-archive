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

function search() {
    gameName = searchBar.value;
    plat = platform.options[platform.selectedIndex].value;
    if(plat != '') plat = '+' + plat;
    results.innerHTML = "<p>Searching eBay for " + gameName + "...</p>";
    keywords = gameName.replace(" ", "+") + plat;
    param +=keywords;
    requestData();
}

function requestData() {
    request.open('Post', server, true);
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200){
            console.log(request.responseText);
        }
    }
    request.send(param);
}
