const vault_info = document.getElementById('vault');
const signin_info = document.getElementById('signin?');
const vaultServer = "https://value-streak.herokuapp.com/vault";
var data;
const request = new XMLHttpRequest();


var user = getCookie("username");
user = getCookie("username");
if (user != "") {
    signin_info.innerHTML = "<h1>Welcome to your vault!</h1>";
    signin_info.innerHTML += "<h2> User " + user + "</h2>";
    requestVaultData();
    vault_info.innerHTML = "<p>But your vault is empty. Pity.</p>";
} else {
    signin_info.innerHTML = "<h3>You need to sign in before you can acess your vault.</h3>";
    vault_info.innerHTML = "<p>Go to home page to sign in with Google if you want.</p>";
}


function requestVaultData() {
    request.open('POST', vaultServer, true);
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200){
            data = JSON.parse(request.responseText);
            console.log(data);
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

