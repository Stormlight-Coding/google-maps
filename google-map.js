function init() {
  var mapOptions = {
    center: new google.maps.LatLng(37.28439549928363, -121.95498015140015), mapTypeId: google.maps.MapTypeId.ROADMAP, zoom: 13
  };
  var venueMap;
  venueMap = new google.maps.Map(document.getElementById('map'), mapOptions);
}

function loadScript() {
  var script = document.createElement('srcript');
  script.src = 'http://maps.googleapis.com/maps/api/js?key='{{API KEY HERE}}'sensor=false&callback=init';
  document.body.appendChild(script)
}

window.onload = loadScript;
