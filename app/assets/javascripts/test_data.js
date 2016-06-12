console.log("loaded");

function sendData(test_data_js) {
  // Using the core $.ajax() method
  $.ajax({
   
      // The URL for the request
      url: "/test_data_js_call",
   
      // The data to send (will be converted to a query string)
      data: test_data_js,
   
      // Whether this is a POST or GET request
      type: "POST",
   
      // The type of data we expect back
      dataType : "json",
  })
    // Code to run if the request succeeds (is done);
    // The response is passed to the function
    .success(function( json ) {
       $( "<h2>" ).text( json['message'] ).appendTo( "body" );
    })
    // Code to run if the request fails; the raw request and
    // status codes are passed to the function
    .error(function( xhr, status, errorThrown ) {
      alert( "Sorry, there was a problem!" );
      console.log( "Error: " + errorThrown );
      console.log( "Status: " + status );
      console.dir( xhr );
    })
}

$( "#test_data_js_button" ).on( "click", function() {
  console.log("clicked");
  var test_data_js = {
     name: 'Jeff',
     rank: 1,
  };
  sendData(test_data_js);
});