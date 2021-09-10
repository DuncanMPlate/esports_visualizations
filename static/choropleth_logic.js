// Creating the map object
var myMap = L.map("map", {
    center: [39.50, -98.35],
    zoom: 5,
    zoomControl: false,
    dragging: false,
    doubleClickZoom: false
  });

  // Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Load the GeoJSON data.


var geojson;

// Get the data with d3.
d3.json('/choropleth').then(function(data) {
  console.log(data)
  // Create a new choropleth layer.
  geojson = L.choropleth(data, {

    // Define which property in the features to use.
    valueProperty: "Counter Strike: (2006)",

    // Set the color scale.
    scale: ["white", "green"],

    // The number of breaks in the step range
    steps: 25,

    // q for quartile, e for equidistant, k for k-means
    mode: "q",
    style: {
      // Border color
      color: "black",
      weight: 1,
      fillOpacity: 0.8
    },

    // Binding a popup to each layer
    onEachFeature: function(feature, layer) {
      layer.bindPopup(feature.properties.NAME + "<br>CounterStrike:" + feature.properties.Counter0Strike + "<br>Fortnite" + feature.properties.Fortnite);
    }
  }).addTo(myMap);
  

  // Set up the legend.
  var legend = L.control({ position: "bottomright" });
  legend.onAdd = function() {
    var div = L.DomUtil.create("div", "info legend");
    var limits = geojson.options.limits;
    var colors = geojson.options.colors;
    var labels = [];

    // Add the minimum and maximum.
    var legendInfo = "<h1>Latino % of Population</h1>" +
      "<div class=\"labels\">" +
        "<div class=\"min\">" + limits[0] + "</div>" +
        "<div class=\"max\">" + limits[limits.length - 1] + "</div>" +
      "</div>";

    div.innerHTML = legendInfo;

    limits.forEach(function(limit, index) {
      labels.push("<li style=\"background-color: " + colors[index] + "\"></li>");
    });

    div.innerHTML += "<ul>" + labels.join("") + "</ul>";
    return div;
  };

  // Adding the legend to the map
  legend.addTo(map);

});
