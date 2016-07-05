/**
 *  Geolocation - feature that lets your browser determine where you are in the worlds.
 */
var geo = document.getElementById("geo");

// do geolocation
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(geoSuccess, geoFailed);
}
else {
    geo.textContent = "Sorry - your browser does not support geolocation.";
}

// geolocation successful
function geoSuccess(position) {
    /*
     latitude = position.coords.latitude
     longitude = position.coords.longitude
     accuracy (meter radius) = position.coords.accuracy
     */

    var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    var mapOpts = {
        zoom: 13,
        center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
        mapTypeControl: false,
        navigationControlOptions: { style: google.maps.NavigationControlStyle.SMALL },
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(geo, mapOpts);

}

// geolocation failed
function geoFailed() {
    geo.textContent = "Sorry - geolocation failed.";
}