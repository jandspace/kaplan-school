// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// CSS set background-image by data-image attr 
//
var list = document.querySelectorAll("div[data-image]");

for (var i = 0; i < list.length; i++) {
  var url = list[i].getAttribute('data-image');
  list[i].style.backgroundImage="url('" + url + "')";
}