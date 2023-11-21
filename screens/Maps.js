export const embeddedHTML = () => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Navigation Route</title>

  <script src="https://api.mapbox.com/mapbox-gl/v2.11.0/mapbox-gl.js"></script>
  <link href="https://api.mapbox.com/mapbox-gl/v2.11.0/mapbox-gl.css" rel="stylesheet" />

  <script src="https://api.mapbox.com/plugins/directions/v6.5.1/mapbox-directions.js"></script>
  <link rel="stylesheet" href="https://api.mapbox.com/plugins/directions/v6.5.1/mapbox-directions.css" />

  <style>
    #map {
      width: 100%;
      height: 100vh;
    }

    #directions-panel {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 100;
      display: none;
    }

    #directions {
      position: relative;
      width: 500px;
      height: 300px;
      margin: 0 auto;
      background-color: white;
      padding: 10px;
    }
  </style>
</head>
<body>
  <div id="map"></div>

  <div id="directions-panel">
    <div id="directions"></div>
  </div>

  <script>
    // Access token for Mapbox GL JS
    mapboxgl.accessToken = 'pk.eyJ1Ijoic2lkZC1teXNlbGYiLCJhIjoiY2xvbjAzaWJiMnI5MzJscndpY2Z6bXR6bCJ9.lKz1JABBRflWy-jiZmQVvg';

    // Define the starting and ending points for the route
    const origin = {
      lng: -74.0060,
      lat: 40.7128
    };
    const destination = {
      lng: -77.0369,
      lat: 38.9072
    };

    // Create a map instance
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      zoom: 10,
      center: [(origin.lng + destination.lng) / 2, (origin.lat + destination.lat) / 2]
    });

    // Create a Mapbox Directions plugin instance
    const directions = new MapboxDirections({
      container: 'directions',
      origin: origin,
      destination: destination,
      profile: 'mapbox/driving'
    });

    // Add the directions to the map
    directions.addTo(map);

    // Display the directions panel when the 'Directions' button is clicked
    document.getElementById('directions-button').addEventListener('click', () => {
      document.getElementById('directions-panel').style.display = 'block';
    });
  </script>
</body>
</html>
`;