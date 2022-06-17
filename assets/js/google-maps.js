function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 10.515139, lng: -66.952269};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Emisael Kisler, WD' // Title Location
    });
}
