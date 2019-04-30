const vault_info = document.getElementById('vault');
const signin_info = document.getElementById('signin?');
const vaultServer = "https://value-streak.herokuapp.com/vault";
var data;
var user;
var gameValue;
const request = new XMLHttpRequest();

function load_vault() {
    user = getCookie("username");
    user = getCookie("username");
    if (user != "") {
        signin_info.innerHTML = "<h1>Welcome to your vault!</h1>";
        signin_info.innerHTML += "<h2> User " + user + "</h2>";
        requestVaultData();
    } else {
        signin_info.innerHTML = "<h3>You need to sign in before you can acess your vault.</h3>";
        vault_info.innerHTML = "<p>Go to home page to sign in with Google if you want.</p>";
    }
}

function requestVaultData() {
    request.open('POST', vaultServer, true);
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200){
            data = JSON.parse(request.responseText);
            if (data.result.length == 0)
                vault_info.innerHTML = "<br><br><p>But your vault is empty. Pity.</p>";
            else {
                gameValue = 0;
                for (i = 0; i < data.result.length; i++) {
                    gameValue += parseInt(data.result[i].price);
                }
                vault_info.innerHTML = "<br><br><p>You vault worths " +  gameValue + " dollars. </p>";
                for (i = 0; i < data.result.length; i++) {
                    vault_info.innerHTML += "<p>You added " + data.result[i].game + ", which worths " + data.result[i].price + ".</p>";
                }
                vault_info.innerHTML += "<h4> Vault never forgets. So you don't get to delete the games in your vault, for now...</h4>";
            }
        }
    }
    request.send("user=" + user);
}






















































function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue + ";path=/";
}

