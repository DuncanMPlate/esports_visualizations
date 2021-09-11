// Creating the map object
var myMap = L.map("map", {
  center: [39.5, -98.35],
  zoom: 4
});

// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

function getColor(d) {
    return d > 99 ? '#800026' :
           d > 85.71  ? '#BD0026' :
           d > 71.42  ? '#E31A1C' :
           d > 57.14  ? '#FC4E2A' :
           d > 42.85   ? '#FD8D3C' :
           d > 28.57   ? '#FEB24C' :
           d > 14.28   ? '#FED976' :
           d > 0       ? '#FFEDA0' :
                        '#fff9e2';
    
}

function style(feature) {
    return {
        fillColor: getColor(feature),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}

// data_two6 = L.layerGroup();
// data_two7 = L.layerGroup();
// data_two8 = L.layerGroup();
// data_two9 = L.layerGroup();
// data_two10 = L.layerGroup();
// data_two11 = L.layerGroup();
// data_two12 = L.layerGroup();
// data_two13 = L.layerGroup();
// data_two14 = L.layerGroup();
// data_two15 = L.layerGroup();
// data_two16 = L.layerGroup();
// data_two17 = L.layerGroup();
// data_two18 = L.layerGroup();
// data_two19 = L.layerGroup();
// data_two20 = L.layerGroup();
// data_two21 = L.layerGroup();



// Get the data with d3.
d3.json('/choropleth').then(function(data) {
    console.log(data);
    csgo6_layer = []
    for (var i = 0; i < data.length; i++) {
        for (const [key, value] of Object.entries(data[i].properties)) {
              console.log(`${key}: ${value}`);
        }
       temp_var = L.geoJson(data[i], {style: style(data[i].properties[0])})
        csgo6_layer.push(temp_var)
    }
    csgo2006_layer = L.layerGroup(csgo6_layer)
    console.log(csgo2006_layer)
    csgo2006_layer.addTo(myMap)
})


// // Get the data with d3.
// d3.json('/choropleth').then(function(data) {
//     console.log(data);
//     for (var i = 0; i < data.length; i++) {
//         data[i].properties.CENSUSAREA)
//         console.log(data[i].properties.CENSUSAREA);
//     }
// })

// data[i].properties["CounterStrike:(2006)"]

// Now create a legend and add it to the map
//     var legend = L.control({position: 'bottomright'});
//     legend.onAdd = function (map) {
//         var div = L.DomUtil.create('div', 'info legend'),
//             depths = [0, 10, 30, 50, 70, 90],
//             labels = [];
//     };
//     legend.addTo(myMap);