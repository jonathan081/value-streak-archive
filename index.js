// javascript for ValueStreak index.html

var searchBar = document.getElementById("searchBar");
var gameName = "";
var results = document.getElementById("results");

function search() {
    gameName = searchBar.value;
    results.innerHTML = "<p>You searched for " + gameName + ".</p>";
}