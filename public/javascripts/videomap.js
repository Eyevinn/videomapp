var APIKEY = 'AIzaSyA_mHreA0XwHoNmtOcqp0oX-qF-HIueWpM';

function initialize() {
    var mapOptions = {
        zoom: 8,
        center: { lat: -34.397, lng: 150.644}
    };

    var c = document.getElementById('videomap-canvas');
    var m = new google.maps.Map(c, mapOptions);
}

function plotVideos(playlistId) {
    var reqItems = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&id='+playlistId+'&key=' + APIKEY;
    $.get(reqItems, function (playlistItems) {
        console.log(playlistItems);
    });
}

function loadDeps() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?key='+APIKEY+'&callback=initialize';
    document.body.appendChild(script);
}

window.onload = loadDeps;