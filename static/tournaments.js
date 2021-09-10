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

  var SCBW_tournaments=fulfilled_response.filter(tournament=>tournament['Game']=='StarCraft: Brood War')
  console.log(SCBW_tournaments)
  var WC3_tournaments=fulfilled_response.filter(tournament=>tournament['Game']=='WarCraft III')
  console.log(WC3_tournaments)
  var SSBM_tournaments=fulfilled_response.filter(tournament=>tournament['Game']=='Super Smash Bros. Melee')
  console.log(SSBM_tournaments)
  var AoE2_tournaments=fulfilled_response.filter(tournament=>tournament['Game']=='Age of Empires II')
  console.log(AoE2_tournaments)
  var CS_tournaments=fulfilled_response.filter(tournament=>tournament['Game']=='Counter-Strike')
  console.log(CS_tournaments)
  var SC2_tournaments=fulfilled_response.filter(tournament=>tournament['Game']=='StarCraft II')
  console.log(SC2_tournaments)
  var LOL_tournaments=fulfilled_response.filter(tournament=>tournament['Game']=='League of Legends')
  console.log(LOL_tournaments)
  var Dota2_tournaments=fulfilled_response.filter(tournament=>tournament['Game']=='Dota 2')
  console.log(Dota2_tournaments)
  var CSGO_tournaments=fulfilled_response.filter(tournament=>tournament['Game']=='Counter-Strike: Global Offensive')
  console.log(CSGO_tournaments)
  var FN_tournaments=fulfilled_response.filter(tournament=>tournament['Game']=='Fortnite')
  console.log(FN_tournaments)

  var SCBW_tournaments={
    x: fulfilled_response.map(tournament=>tournament['Date']), 
    y: fulfilled_response.map(tournament=>parseFloat(tournament['Earnings'])),
    text: fulfilled_response.map(tournament=>tournament['Game']),
    name: 'StarCraft: Brood War',
    type: 'scatter',
    mode: 'markers'
  }
  var WC3_tournaments={
    x: fulfilled_response.map(tournament=>tournament['Date']), 
    y: fulfilled_response.map(tournament=>parseFloat(tournament['Earnings'])),
    text: fulfilled_response.map(tournament=>tournament['Game']),
    name: 'WarCraft III',
    type: 'scatter',
    mode: 'markers'
  }
  var SSBM_tournaments={
    x: fulfilled_response.map(tournament=>tournament['Date']), 
    y: fulfilled_response.map(tournament=>parseFloat(tournament['Earnings'])),
    text: fulfilled_response.map(tournament=>tournament['Game']),
    name: 'Super Smash Bros. Melee',
    type: 'scatter',
    mode: 'markers'
  }
  var AoE2_tournaments={
    x: fulfilled_response.map(tournament=>tournament['Date']), 
    y: fulfilled_response.map(tournament=>parseFloat(tournament['Earnings'])),
    text: fulfilled_response.map(tournament=>tournament['Game']),
    name: 'Age of Empires II',
    type: 'scatter',
    mode: 'markers'
  }
  var CS_tournaments={
    x: fulfilled_response.map(tournament=>tournament['Date']), 
    y: fulfilled_response.map(tournament=>parseFloat(tournament['Earnings'])),
    text: fulfilled_response.map(tournament=>tournament['Game']),
    name: 'Counter-Strike',
    type: 'scatter',
    mode: 'markers'
  }
  var SC2_tournaments={
    x: fulfilled_response.map(tournament=>tournament['Date']), 
    y: fulfilled_response.map(tournament=>parseFloat(tournament['Earnings'])),
    text: fulfilled_response.map(tournament=>tournament['Game']),
    name: 'StarCraft II',
    type: 'scatter',
    mode: 'markers'
  }
  var LOL_tournaments={
    x: fulfilled_response.map(tournament=>tournament['Date']), 
    y: fulfilled_response.map(tournament=>parseFloat(tournament['Earnings'])),
    text: fulfilled_response.map(tournament=>tournament['Game']),
    name: 'League of Legends',
    type: 'scatter',
    mode: 'markers'
  }
  var Dota2_tournaments={
    x: fulfilled_response.map(tournament=>tournament['Date']), 
    y: fulfilled_response.map(tournament=>parseFloat(tournament['Earnings'])),
    text: fulfilled_response.map(tournament=>tournament['Game']),
    name: 'Dota 2',
    type: 'scatter',
    mode: 'markers'
  }
  var CSGO_tournaments={
    x: fulfilled_response.map(tournament=>tournament['Date']), 
    y: fulfilled_response.map(tournament=>parseFloat(tournament['Earnings'])),
    text: fulfilled_response.map(tournament=>tournament['Game']),
    name: 'Counter-Strike: Global Offensive',
    type: 'scatter',
    mode: 'markers'
  }
  var FN_tournaments={
    x: fulfilled_response.map(tournament=>tournament['Date']), 
    y: fulfilled_response.map(tournament=>parseFloat(tournament['Earnings'])),
    text: fulfilled_response.map(tournament=>tournament['Game']),
    name: 'Fortnite',
    type: 'scatter',
    mode: 'markers'
  }

  // var trace={
  //   x: fulfilled_response.map(tournament=>tournament['Date']), 
  //   y: fulfilled_response.map(tournament=>parseFloat(tournament['Earnings'])), 
  //   text: fulfilled_response.map(tournament=>tournament['Game']),
  //   type: 'scatter', 
  //   mode: 'markers'
  // }

  Plotly.newPlot('myDiv', [SCBW_tournaments, WC3_tournaments, SSBM_tournaments, AoE2_tournaments, CS_tournaments, SC2_tournaments, LOL_tournaments, Dota2_tournaments, CSGO_tournaments, FN_tournaments])
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
