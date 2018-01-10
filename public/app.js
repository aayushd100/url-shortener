/* global $ */
$( "#formInput" ).on( "submit", function( event ) {
  event.preventDefault();
   var data = $( this ).serialize() ;
  $.post("/api/", data);
  $( "#info" ).text("Done! Access your URL at https://node-aayushd100.c9users.io/"+ $( "#givenName" ).val());
  $( "#givenName" ).val("");
  $( "#givenUrl" ).val("");
});



