"use strict";

// Part 1

$('#get-fortune-button').on('click', () => {
  $.get('/fortune', (response) => {
    //
    // This is the body of the callback function for $.get!
    // TODO: use `response` to update the text in `div#fortune-text`
    //
    $('div#fortune-text').append(response);
  });
});


// Part 2

$('#weather-form').on('submit', (evt) => {
  evt.preventDefault();
  
  $("div#weather-info").empty();

  const formData = {
    // TODO: select the zipcode input
    zipcode: $('#zipcode-field').val()
  };
  
  // TODO: choose a request method (GET or POST) by uncommenting one of
  // these blocks of code

  $.get('/weather', formData, (response) => {
    // Fill in the callback function
    $("div#weather-info").append(response['forecast']);
    
  });

  // $.post('/replaceMe', formData, (response) => {
  //   // Fill in the callback function
  // });
});


// Part 3

$("#order-form").on('submit', (evt) => {
  evt.preventDefault();

  // TODO: create an object to store key-value pairs that'll be sent to
  // the server
  const formData = {
  // TODO: select the zipcode input
    melon_type: $('#melon-type-field').val(),
    qty: $('#qty-field').val()
    };
  
  // post melon data on flask route; get appropriate responses
  $.post('/order-melons', formData, (response) => {
    // Fill in the callback function
    $("div#order-status").empty();

    if (response['code'] != 'OK'){
      $("div#order-status").addClass("order-error");
      $("div#order-status").append(response['msg']);
      }
    else {
      alert("You order has been confirmed");
      $("div#order-status").append(response['msg']);

      }
    
    });
    
  // };

  // TODO: make a request to /order-melons
  //
  // In the callback function, use the response from the server to
  // update #order-status. IMPORTANT: if the result code is 'ERROR',
  // make it show up in red.
});
