function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
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

var css = 0;

function change() {
  if (css == 0) {
    document.getElementById("nstyle").href = "style.css";
    setCookie("mode", "jour", 365);
    css++;
  }
  else {
    document.getElementById("nstyle").href = "style1.css";
    setCookie("mode", "nuit", 365);
    css = 0;
  }
}

function cookie(){
  if(getCookie("mode")=="jour"){
    css=0; 
  }
  else if(getCookie("mode")=="nuit"){
    css=1;
  }
  change();
}

cookie();