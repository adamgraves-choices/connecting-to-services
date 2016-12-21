// TODO: code tidy! done quickly as a POC

if (navigator.geolocation) {

  $('.find-location').show(); // show the use your location button

  $('.button--uselocation').click(function(e) {
    e.preventDefault();
    var startPos;
    var geoSuccess = function(position) {
      url = 'https://api.postcodes.io/postcodes?lon=' + position.coords.longitude + '&lat=' + position.coords.latitude;
      $.get((url)).
        done(function (data) {
          postcode = data.result[0].postcode;
          $('#location').val(postcode);
          $('.submit-search').click();
        })
        .fail(function (error) {
          $('.location-error').show();
          console.log(error.code);
        });
    };
    var geoError = function(error) {
      $('.location-error').show();
      console.log(error.code);
    };
    navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
  });

}
