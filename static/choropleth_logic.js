// Adding the tile layer
streetmap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
})

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



// Get the data with d3.
d3.json('/choropleth').then(function(data) {
    csgo_layer = []
    for (var i = 0; i < data.length; i++) {
       temp_var = L.geoJson(data[i], {style: style(data[i].properties["CounterStrike:(2017)"])})
       csgo_layer.push(temp_var)
    }
    cs_layer = L.layerGroup(csgo_layer)
    

    dota_layer = []
    for (var i = 0; i < data.length; i++) {
       temp_var = L.geoJson(data[i], {style: style(data[i].properties["Dota2:(2017)"])})
       dota_layer.push(temp_var)
    }
    dota2_layer = L.layerGroup(dota_layer)
   
    fort_layer = []
    for (var i = 0; i < data.length; i++) {
       temp_var = L.geoJson(data[i], {style: style(data[i].properties["Fortnite:(2017)"])})
       fort_layer.push(temp_var)
    }
    frtnite_layer = L.layerGroup(fort_layer)
    
    l_layer = []
    for (var i = 0; i < data.length; i++) {
       temp_var = L.geoJson(data[i], {style: style(data[i].properties["LeagueofLegends:(2017)"])})
       l_layer.push(temp_var)
    }
    lol_layer = L.layerGroup(l_layer)
    
    p_layer = []
    for (var i = 0; i < data.length; i++) {
       temp_var = L.geoJson(data[i], {style: style(data[i].properties["PUBG:(2017)"])})
       p_layer.push(temp_var)
    }
    pubg_layer = L.layerGroup(p_layer)
    
    var baseMaps = {
    "Streets": streetmap
};

var overlayMaps = {
    "CS:GO": cs_layer,
    "Dota 2" : dota2_layer,
    "Fortnite" : frtnite_layer,
    "LoL" : lol_layer,
    "PUBG" : pubg_layer
};
    
// Creating the map object
var myMap = L.map("map", {
  center: [39.5, -98.35],
  zoom: 4,
    layers : [streetmap, cs_layer]
});


L.control.layers(baseMaps).addTo(myMap);
L.control.layers(overlayMaps).addTo(myMap);
    
    
    var legend = L.control({position: 'bottomright'});

    legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
        grades = [0, 14.28, 28.57, 42.85, 57.14, 71.42, 85.71, 99],
        labels = [];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    }

    return div;
    }
        
    legend.addTo(myMap);
        
});