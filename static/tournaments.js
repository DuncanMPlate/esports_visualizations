// Plotly.d3.csv('../Resouces/HistoricalEsportData.csv')

// d3.json('/scatter').then(fulfilled_response=>{
//      {'data': []}
// })

d3.csv('../static/HistoricalEsportData.csv').then(fulfilled_response=>{
//   [[a, b, c, ], 
//   [d, e, f, ]]
  console.log(fulfilled_response)
  //quakeworld=[]
  //quake_ii=[]
  //starcraft=[]
  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
  var all_tournaments=fulfilled_response.map(tournament=>tournament['Game'])
  console.log(all_tournaments.filter(onlyUnique).length)

  var dota_tournaments=fulfilled_response.filter(tournament=>tournament['Game']=='Dota 2')
  console.log(dota_tournaments)
  var trace1={
    x: fulfilled_response.map(tournament=>tournament['Date']), 
    y: fulfilled_response.map(tournament=>parseFloat(tournament['Earnings'])),
    text: fulfilled_response.map(tournament=>tournament['Game']),
    name: 'StarCraft: Brood War'
    type: 'scatter', 
    mode: 'markers'
  }
  var trace={
    x: fulfilled_response.map(tournament=>tournament['Date']), 
    y: fulfilled_response.map(tournament=>parseFloat(tournament['Earnings'])), 
    text: fulfilled_response.map(tournament=>tournament['Game']),
    type: 'scatter', 
    mode: 'markers'
  }

  Plotly.newPlot('myDiv', [trace])
})
// StarCraft: Brood War                215
// WarCraft III                        198
// Super Smash Bros. Melee             192
// Age of Empires II                   177
// Counter-Strike                      140
// StarCraft II                        139
// League of Legends                   132
// Dota 2                              118
// Counter-Strike: Global Offensive    111
// Team Fortress 2                     101
