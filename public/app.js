/* global $ */
var windowLocation = window.location.href;
$("#baseurl").text(windowLocation)
$( "#formInput" ).on( "submit", function( event ) {
  event.preventDefault();
   var data = $( this ).serialize() ;
  $.post("/api/", data);
  $( "#doneSpan" ).html('Done! Use <a id="windowLocation" href=""></a> to access the url.');
  var finalurl = windowLocation + $( "#givenName" ).val();
  $('#windowLocation').text(finalurl);
  $("a").attr("href", finalurl);
  $( "#givenName" ).val("");
  $( "#givenUrl" ).val("");
});



