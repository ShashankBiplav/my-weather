function weather() {
  var location = document.getElementById("temp");
  var apiKey = "0a5f48350bc389a4de94b1811685a102";
  var url = "https://api.forecast.io/forecast/";

  navigator.geolocation.getCurrentPosition(success, error);

  function success(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;

    $.getJSON(
      url + apiKey + "/" + latitude + "," + longitude + "?callback=?",
      function (data) {
        $("#temp").html(Math.floor((data.currently.temperature - 32) * 100 * 5/9) / 100 + "° C");
      }
    );
  }

  function error() {
    location.innerHTML = "Unable to retrieve your location";
  }

  location.innerHTML = "Locating...";
}

weather();
