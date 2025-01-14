
function initMap() {
    const mapOptions = {
        center: { lat: 37.7749, lng: -122.4194 }, // Initial center (San Francisco)
        zoom: 12,
        gestureHandling: 'greedy', // allows for both scrolling and dragging
    };

    const map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
