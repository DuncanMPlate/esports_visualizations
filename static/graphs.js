

  d3.csv(“HistoricalEsportData.csv”).then(function(gameData) {
    console.log(gameData);

    // Arrays to hold earnings by game
    var CS:GO = [];
    var Dota2 = [];
    var Fortnite = [];
    var LeagueofLegends = [];
    var PUBG = [];
    var other = [];
    
    // For loop to go through all games
    for (let i = 0; i < gameData.length; i++) {
      // Variable to hold current movie in loop
      //let game = games[i]
    
      // Conditional statement to determine array assignment
      if (data.game = "Counter-Strike: Global Offensive") {
        CS:GO.push(game);
      } else if (data.game = "Dota 2") {
        Dota2.push(game);
      } else if (data.game = "Fortnite") {
        Fortnite.push(game);
      } else if (data.game = "League of Legends") {
        LeagueofLegends.push(game);
      } else if (data.game = "PLAYERUNKNOWN’S BATTLEGROUNDS") {
        PUBG.push(game);
      } else
        other.push(game);
    }

    gameData.forEach(function(d) {d.date = parseTime(d.date);
    }); 
