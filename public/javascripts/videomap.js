function initialize() {
    var mapOptions = {
        zoom: 8,
        center: { lat: -34.397, lng: 150.644}
    };

    var c = document.getElementById('videomap-canvas');
    var m = new google.maps.Map(c, mapOptions);
}

function plotVideos(ytPlaylist) {
    console.log(ytPlaylist);
}

function loadDeps() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyA_mHreA0XwHoNmtOcqp0oX-qF-HIueWpM&callback=initialize';
    document.body.appendChild(script);
}

window.onload = loadDeps;