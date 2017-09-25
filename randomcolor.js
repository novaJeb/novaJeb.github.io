var hex = Math.floor(Math.random() * 0xFFFFFF);
var stringo = "#" + ("000000" + hex.toString(16)).substr(-6);
document.body.style.backgroundColor = stringo;
document.getElementById("page-color-tag").innerHTML = stringo;
var thingo = document.getElementsByName('theme-color');
var allMetaElements = document.getElementsByTagName('meta');
//loop through and find the element you want
for (var i = 0; i < allMetaElements.length; i++) {
  if (allMetaElements[i].getAttribute("name") == "theme-color") {
    //make necessary changes
    allMetaElements[i].setAttribute("content", stringo);
    break;
  }
}
