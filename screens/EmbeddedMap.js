export const embeddedHTML = () => `
// <!DOCTYPE html>
// <html>
// <head>
//   <title>Map with Markers and Route</title>
//   <meta name="viewport" content="initial-scale=1.0">
//   <meta charset="utf-8">
//   <style>
//     html,
//     body,
//     #map {
//       margin: 0;
//       padding: 0;
//       width: 100%;
//       height: 100vh;
//     }
//   </style>
//   <script src="https://apis.mappls.com/advancedmaps/api/5e98d1f926bbc5cc784fe133192db144/map_sdk?layer=vector&v=3.0&callback=initMap1" defer async></script>
// </head>
// <body>
//   <div id="map"></div>
//   <script>
//     var map, Marker1, Marker2;
//     function initMap1() {
//       const latMap = ${latitude.toFixed(1)};
//       const lonMap = ${longitude.toFixed(1)};
//       map = new mappls.Map('map', { center: [latMap, lonMap], zoomControl: true, location: true});
//       map.zoomOut(10)

//       Marker2 = new mappls.Marker({ map: map, position: {"lat": ${bbLat},"lng": ${bbLon}},fitbounds: true, icon_url: 'https://apis.mapmyindia.com/map_v3/1.png'});
//       Marker1 = new mappls.Marker({ map: map, position: {"lat": ${latitude},"lng": ${longitude}},fitbounds: true, icon_url: 'https://apis.mapmyindia.com/map_v3/2.png'});

//       const route = getRoute(
//         ${latitude},
//         ${longitude},
//         ${bbLat},
//         ${bbLon},
//         "driving"
//       );

//       var routeCoordinates = route.routes[0].geometry.coordinates;
//       var routeLine = new mappls.Polyline({
//         map: map,
//         path: routeCoordinates,
//         strokeColor: "red",
//         strokeOpacity: 1,
//         strokeWeight: 3,
//       });
//       map.addLayer(routeLine);

//     }
//   </script>
// </body>
// </html>

`;