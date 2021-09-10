// sourced scripts from https://codesandbox.io/s/bar-chart-race-eop0s?file=/src/BarChartRace.js:0-6654

const games = [
  'QuakeWorld', 'Quake II', 'StarCraft: Brood War', 'Age of Empires',
  'Descent 3', 'Quake III Arena', 'Age of Empires II',
  'Marvel vs. Capcom 2', 'Street Fighter Alpha 2',
  'Street Fighter Alpha 3', 'Street Fighter III: 3rd Strike',
  'Super Street Fighter II Turbo', 'FIFA 2000',
  'Doom II: Hell on Earth', 'Counter-Strike', 'Capcom vs. SNK',
  'FIFA 2001', 'Unreal Tournament', 'Aliens versus Predator 2',
  'Super Smash Bros. Melee', 'Return to Castle Wolfenstein',
  'Capcom vs. SNK 2', 'FIFA 2002 World Cup', 'Halo: Combat Evolved',
  'Unreal Tournament 2003', 'WarCraft III', 'NASCAR Thunder 2002',
  'Star Wars Jedi Knight II: Jedi Outcast', 'Tekken 4',
  'NASCAR Thunder 2003', 'FIFA 03', 'Guilty Gear XX',
  'Soul Calibur II', 'Tekken Tag Tournament',
  'Virtua Fighter 4: Evolution', 'Age of Mythology',
  'Gran Turismo 3: A-Spec', 'Madden NFL 2004', 'Live for Speed',
  'FIFA 04', 'Counter-Strike: Condition Zero',
  'Pro Evolution Soccer 3', 'Painkiller', 'Unreal Tournament 2004',
  'Doom 3', 'Call of Duty', 'Need for Speed: Underground',
  'Project Gotham Racing 2', 'Day of Defeat', 'FIFA 05', 'Halo 2',
  'Counter-Strike: Source', 'Need for Speed: Underground 2',
  'Pro Evolution Soccer 4', 'Gran Turismo 4',
  'Wolfenstein: Enemy Territory', 'Quake 4', 'Battlefield 2',
  'Guilty Gear XX #Reload', 'Tekken 5',
  'Warhammer 40,000: Dawn of War', 'Dead or Alive Ultimate',
  'Defense of the Ancients', 'FIFA 06',
  'Need for Speed: Most Wanted', 'Madden NFL 2006', 'Call of Duty 2',
  'Pro Evolution Soccer 5', 'TrackMania Nations', 'Dead or Alive 4',
  'Forza Motorsport 2', 'Project Gotham Racing 3',
  'Ghost Recon Advanced Warfighter', 'Guilty Gear XX Slash',
  'Hyper Street Fighter II', 'FIFA 07', 'Madden NFL 2007',
  'Rise of Nations: Rise of Legends', 'Need for Speed Carbon',
  'World of WarCraft', 'Battlefield 2142', 'Rainbow Six: Vegas',
  'Command & Conquer 3', 'S.T.A.L.K.E.R.: Shadow of Chernobyl',
  'Supreme Commander', 'Day of Defeat: Source', 'F.E.A.R.',
  'World in Conflict', 'Pro Evolution Soccer 6', 'Super Smash Bros.',
  'Gears of War', 'Enemy Territory: Quake Wars',
  'Guilty Gear XX Accent Core', 'Tekken 5: Dark Resurrection',
  'Virtua Fighter 5', 'Shadowrun', 'Madden NFL 2008',
  'Age of Empires III', 'Carom 3D', 'Crysis',
  'Call of Duty 4: Modern Warfare', 'Team Fortress 2', 'FIFA 08',
  'Trackmania United', 'Halo 3', 'Unreal Tournament 3',
  'Need for Speed: ProStreet', 'Project Gotham Racing 4',
  'Pro Evolution Soccer 2008', 'Supreme Commander: Forged Alliance',
  'TrackMania Nations Forever', 'Super Smash Bros. Brawl',
  'Guitar Hero III: Legends of Rock', 'Rainbow Six: Vegas 2',
  'Quake Live', 'Madden NFL 2009', 'Red Stone', 'Asphalt 4',
  'FIFA 09', 'Resistance 2', 'Gears of War 2', 'King of Fighters XI',
  'Street Fighter IV', 'Super Street Fighter II Turbo HD Remix',
  'Guilty Gear XX Accent Core Plus', 'Pro Evolution Soccer 2009',
  'BlazBlue: Calamity Trigger', 'Magic: The Gathering Online',
  'Wise Star 2', 'Call of Duty: Modern Warfare 2', 'Special Force',
  'FIFA 10', 'StarCraft II',
  'Tatsunoko vs. Capcom: Ultimate All-Stars', 'Tekken 6',
  'Heroes of Newerth', 'KartRider', 'Super Street Fighter IV',
  'Guitar Hero 5', 'Need for Speed: Shift',
  'Melty Blood: Actress Again', 'League of Legends', 'FIFA 11',
  'Multigaming', 'iRacing.com', 'Forza Motorsport 3', 'rFactor',
  'CrossFire', 'Halo: Reach', 'Call of Duty: Black Ops',
  'Mortal Kombat vs. DC Universe', 'Ultimate Mortal Kombat 3',
  'Mortal Kombat 9', 'Marvel vs. Capcom 3',
  'Super Street Fighter IV Arcade Edition', 'Bloodline Champions',
  'BlazBlue: Continuum Shift II', 'TrackMania 2: Canyon',
  'Arcana Heart 3', 'Soul Calibur IV', 'Project M',
  'Age of Empires Online', 'Dota 2',
  'Call of Duty: Modern Warfare 3', 'FIFA 12',
  'Ultimate Marvel vs. Capcom 3', 'World of Tanks', 'NHL 12',
  'Tekken Tag Tournament 2', 'Forza Motorsport 4', 'Soul Calibur V',
  'King of Fighters XIII', 'Street Fighter X Tekken',
  'Battlefield 3', 'Point Blank', 'Gears of War 3',
  'Counter-Strike: Global Offensive', 'Counter-Strike Online',
  'Persona 4 Arena', 'FIFA 13', 'Call of Duty: Black Ops 2',
  'Dead or Alive 5', 'Halo 4', 'ShootMania Storm', 'Madden NFL 2013',
  'NHL 13', 'TrackMania 2: Stadium', 'Injustice: Gods Among Us',
  'Turbo Racing League', 'BlazBlue: Continuum Shift Extend',
  'Divekick', 'Skullgirls', 'SMITE', 'S.K.I.L.L. - Special Force 2',
  'Dragon Ball Z: Budokai 3', 'FIFA 14', 'Dead or Alive 5 Ultimate',
  'Trackmania 2: Valley', 'Hearthstone', 'Call of Duty: Ghosts',
  'Battlefield 4', 'Killer Instinct (2013)', 'NHL 14',
  'BlazBlue: Chronophantasma', 'Guilty Gear XX Accent Core Plus R',
  'Attack on Titan Tribute Game', 'Skullgirls Encore',
  'Soul Calibur II HD Online', 'Ultra Street Fighter IV',
  'Virtua Fighter 5 Final Showdown', 'Pro Evolution Soccer 2014',
  'Halo 2 Anniversary', 'Under Night In-Birth EXE: Late', 'FIFA 15',
  'rFactor 2', 'Chess.com', 'Xonotic', 'Super Smash Bros. for Wii U',
  'Persona 4 Arena Ultimax', 'Call of Duty: Advanced Warfare',
  'Guild Wars 2', 'Heroes of the Storm', 'Just Dance 2014',
  'Guilty Gear Xrd -SIGN-', 'Dead or Alive 5: Last Round', 'NHL 15',
  'Evolve', 'FIFA Online 3', 'Mortal Kombat X',
  'Battlefield Hardline', 'Legend of Glory', 'Reflex',
  'Pro Evolution Soccer 2015', 'BlazBlue: Chronophantasma Extend',
  'Tekken 7', 'Brawlhalla', 'Vainglory', 'Halo 5: Guardians',
  'Rocket League', 'Splatoon', 'H1Z1', "NHL '94", 'Grey Goo',
  'FIFA 16', 'Shards of War', 'Rising Thunder', 'Tetris',
  'Project Cars', 'Nitroplus Blasterz: Heroines Infinite Duel',
  'Dengeki Bunko: Fighting Climax', 'Blade & Soul',
  'Call of Duty: Black Ops III', 'Overwatch',
  'Unreal Tournament (2016)', 'osu!',
  'Gears of War: Ultimate Edition', 'Metal Gear Online',
  'Rainbow Six Siege', 'Street Fighter V', 'Old School Runescape',
  'Pokk<U+00E9>n Tournament', 'Clash Royale',
  'Naruto Shippuden: Ultimate Ninja Storm 4', 'Trackmania Turbo',
  'Rivals of Aether', 'Guilty Gear Xrd -REVELATOR-',
  'Pro Evolution Soccer 2016', 'Vampire Savior',
  'King of Fighters 2002 Unlimited Match',
  'Dengeki Bunko: Fighting Climax Ignition', 'Paladins',
  'Madden NFL 2016', 'Mortal Kombat XL',
  "Uncharted 4: A Thief's End", 'King of Fighters XIV', 'Battlerite',
  'Gears of War 4', 'FIFA 17', 'BlazBlue: Central Fiction',
  'Pro Evolution Soccer 2017', 'Skullgirls 2nd Encore',
  'Melty Blood: Actress Again Current Code', 'Catherine',
  'Koihime Enbu', 'Arcana Heart 3: LOVE MAX!!!!!',
  'Aquapazza: Aquaplus Dream Match', 'Forza Motorsport 6',
  'MechWarrior Online', 'Call of Duty: Infinite Warfare',
  'Madden NFL 2017', 'MOBA Legends', 'Mad Skills Motocross 2',
  'ComPet', 'Mystery Game Tournament', 'Tetris Ultimate',
  'Critical Ops', 'Yu-Gi-Oh! Duel Links', 'Gwent', 'Injustice 2',
  'Guilty Gear Xrd REV 2', 'Quake Champions', 'Heavy Metal Machines',
  'Hand of the Gods', 'Company of Heroes 2', 'ARMS',
  'PLAYERUNKNOWN’S BATTLEGROUNDS', 'Pok<U+00E9>mon VGC',
  'Doom (2016)', 'Rage', 'The Elder Scrolls: Legends',
  'Under Night In-Birth EXE: Late[st]', 'Splatoon 2',
  'Marvel vs. Capcom: Infinite', 'Pokk<U+00E9>n Tournament DX',
  'Gundam Versus', 'Puyo Puyo Tetris',
  'Chaos Code: New Sign of Catastrophe', 'Clash of Clans',
  'Windjammers', 'Arena of Valor', 'Call of Duty: World War II',
  'World of Tanks Blitz', 'FIFA 18', 'Madden NFL 2018',
  'Shadowverse', 'Power Rangers: Legacy Wars',
  'Street Fighter V: Arcade Edition', 'Lichess',
  'Arcana Heart 3: Love Max Six Stars!!!!!', 'Fortnite', 'NHL 18',
  'Faeria', 'Dragon Ball FighterZ', 'BlazBlue: Cross Tag Battle',
  'Warsow', 'Zula', 'Project Cars 2', 'Battalion 1944',
  'Radical Heights', 'NBA 2K18', 'RaceRoom Racing Experience',
  'Sailor Moon S', 'Garou: Mark of the Wolves',
  'Samurai Shodown V Special', 'Forza Motorsport 7', 'Warface',
  'Pro Evolution Soccer 2018', 'Realm Royale', 'Guns of Boom',
  'Gran Turismo Sport', 'Fighting EX Layer', 'Soul Calibur VI',
  'SNK Heroines: Tag Team Frenzy', 'Call of Duty: Black Ops 4',
  'Call of Duty: Blackout', "PLAYERUNKNOWN'S BATTLEGROUNDS Mobile",
  'FIFA 19', 'Assetto Corsa', 'NHL 19', 'Black Squad',
  'Street Fighter EX2 Plus', 'Artifact Classic', 'FIFA Online 4',
  'F1 2018', 'Creative Destruction', 'Super Smash Bros. Ultimate',
  'Madden NFL 19', 'Magic: The Gathering Arena', 'Minecraft',
  'Mario Kart 8 Deluxe', 'Super Mario Party', 'Lethal League Blaze',
  'Mario Tennis Aces', 'Apex Legends', 'Stardew Valley',
  'Dead or Alive 6', 'Auto Chess', 'Million Arthur: Arcana Blood',
  'The Division 2', 'Free Fire', 'Sekiro: Shadows Die Twice',
  'Mortal Kombat 11', 'Splitgate: Arena Warfare',
  'Puyo Puyo Champions', 'Warparty', 'King of Fighters 98',
  'Teenage Mutant Ninja Turtles: Tournament Fighters',
  'Pro Evolution Soccer 2019', 'Brawl Stars', 'Mordhau',
  'Samurai Shodown (2019)', 'Dota Underlords', 'Teamfight Tactics',
  'Power Rangers: Battle for the Grid', 'Ring of Elysium', 'Gears 5',
  'Sea of Thieves', 'Farming Simulator 19',
  'Virtua Fighter 5: Ultimate Showdown', 'Asphalt 9: Legends',
  'FIFA 20', 'Kill la Kill the Game: IF', 'Ultra Fight Da! Kyanta 2',
  "Fighter's History Dynamite", 'Catherine: Full Body',
  'Project Justice', 'Hokuto no Ken', 'Umineko: Golden Fantasia',
  'Guilty Gear', 'Borderlands 3', 'Acceleration of SUGURI 2',
  "Them's Fightin' Herds", 'Big Buck Hunter Arcade', 'WWE 2K20',
  'Dead By Daylight', 'Call of Duty: Modern Warfare', 'F1 2019',
  'TEPPEN', 'GRID (2019)', 'Shovel Knight Showdown', 'UNO',
  'Dirt Rally 2.0', 'Fantasy Strike', 'WarCraft III: Reforged',
  'Touhou Hisoutensoku ~ Choudokyuu Ginyoru no Nazo o Oe',
  'Street Fighter V: Champion Edition',
  'Under Night In-Birth Exe:Late[cl-r]', 'Magical Drop III',
  'Call of Duty: Warzone', 'Legends of Runeterra', 'Diabotical',
  'Granblue Fantasy: Versus', 'VALORANT', 'Escape from Tarkov',
  'chess24', 'Assetto Corsa Competizione', 'Tetr.io',
  'Playchess.com', 'Prophecy', 'Beat Aim', 'Internet Chess Club',
  'SLAYERS FOR HIRE', 'Punch Planet', 'Slap City', 'Duck Game',
  'Maiden & Spell', 'Naruto: Gekitou Ninja Taisen! 4',
  'Def Jam: Fight for NY', 'Schwarzerblitz', 'Twinkle Star Sprites',
  'Digimon Rumble Arena', 'Pocket Rumble', 'Fight of Animals',
  'HYPERFIGHT', "JoJo's Bizarre Adventure: Heritage for the Future",
  'Power Instinct: Matrimelee', 'Roof Rage', 'Shrek SuperSlam',
  'Speedrunners', 'Panel Attack', 'Samurai Shodown III',
  'Akatsuki Blitzkampf', 'Project Plus', 'The Last Blade 2',
  'Asuka 120% LimitOver BURNING Fest.', 'Eternal Fighter Zero',
  'Hyper Scape', 'NASCAR Heat 4', 'Rocket Arena',
  'Trackmania (2020)', 'Artifact Foundry', 'Fall Guys', 'Jstris',
  'Cultris II', 'Breakers Revenge', 'Rushdown Revolt', 'Spellbreak',
  'Among Us', 'Identity V', 'Hearthstone Battlegrounds', 'F1 2020',
  'NBA 2K21', 'Call of Duty: Black Ops Cold War', 'Smash Remix',
  'Kirby Fighters 2', 'Rogue Company', 'Zwift', 'Nascar Heat 5',
  'Star Wars: Squadrons', 'Mobile Legends: Bang Bang', 'FIFA 21',
  'Mighty Fight Federation',
  'Mobile Suit Gundam: Extreme Vs Maxi Boost ON', 'Red Earth',
  'Toribash', 'Tough Love Arena', 'Mythgard', 'DOOMBRINGER',
  'Call of Duty: Mobile', 'Tetris Effect: Connected',
  'League of Legends: Wild Rift', 'Guilty Gear -STRIVE-',
  'Chex Quest', 'Blaston'

];
 
function generateDataSets({size = 1}) {
	// const dataSets = chart_data;
  const maximumModelCount = 10;
 var currentYear = d3.timeFormat("$Y")(new Date());
   d3.json('/barrace').then(function(dataSets){
    console.log(dataSets)
  // for each row in the data, convert some value to numerical
   for (let i = 0; i <size; i++) {
     dataSets.push({
       date: currentYear - (size - (i +1)),
       //dataSet : games,
       //value:

     }).slice(0, maximumModelCount);
   };
	 return dataSets;
  });
};

function BarChartRace(chartId, extendedSettings) {
  const chartSettings = {
    width: 800,
    height: 600,
    padding: 40,
    titlePadding: 5,
    columnPadding: 0.4,
    ticksInXAxis: 5,
    duration: 3500,
    ...extendedSettings
  };

  chartSettings.innerWidth = chartSettings.width - chartSettings.padding * 2;
  chartSettings.innerHeight = chartSettings.height - chartSettings.padding * 2;

  const chartDataSets = [];
  let chartTransition;
  let timerStart, timerEnd;
  let currentDataSetIndex = 0;
  let elapsedTime = chartSettings.duration;

  const chartContainer = d3.select(`#${chartId} .chart-container`);
  const xAxisContainer = d3.select(`#${chartId} .x-axis`);
  const yAxisContainer = d3.select(`#${chartId} .y-axis`);

  const xAxisScale = d3.scaleLinear().range([0, chartSettings.innerWidth]);

  const yAxisScale = d3
    .scaleBand()
    .range([0, chartSettings.innerHeight])
    .padding(chartSettings.columnPadding);

  d3.select(`#${chartId}`)
    .attr("width", chartSettings.width)
    .attr("height", chartSettings.height);

  chartContainer.attr(
    "transform",
    `translate(${chartSettings.padding} ${chartSettings.padding})`
  );

  chartContainer
    .select(".current-date")
    .attr(
      "transform",
      `translate(${chartSettings.innerWidth} ${chartSettings.innerHeight})`
    );

  function draw({ dataSet, date: currentDate }, transition) {
    const { innerHeight, ticksInXAxis, titlePadding } = chartSettings;
    const dataSetDescendingOrder = dataSet.sort(
      ({ value: firstValue }, { value: secondValue }) =>
        secondValue - firstValue
    );

    chartContainer.select(".current-date").text(currentDate);

    xAxisScale.domain([0, dataSetDescendingOrder[0].value]);
    yAxisScale.domain(dataSetDescendingOrder.map(({ name }) => name));

    xAxisContainer.transition(transition).call(
      d3
        .axisTop(xAxisScale)
        .ticks(ticksInXAxis)
        .tickSize(-innerHeight)
    );

    yAxisContainer
      .transition(transition)
      .call(d3.axisLeft(yAxisScale).tickSize(0));

    // The general update Pattern in d3.js

    // Data Binding
    const barGroups = chartContainer
      .select(".columns")
      .selectAll("g.column-container")
      .data(dataSetDescendingOrder, ({ name }) => name);

    // Enter selection
    const barGroupsEnter = barGroups
      .enter()
      .append("g")
      .attr("class", "column-container")
      .attr("transform", `translate(0,${innerHeight})`);

    barGroupsEnter
      .append("rect")
      .attr("class", "column-rect")
      .attr("width", 0)
      .attr("height", yAxisScale.step() * (1 - chartSettings.columnPadding));

    barGroupsEnter
      .append("text")
      .attr("class", "column-title")
      .attr("y", (yAxisScale.step() * (1 - chartSettings.columnPadding)) / 2)
      .attr("x", -titlePadding)
      .text(({ name }) => name);

    barGroupsEnter
      .append("text")
      .attr("class", "column-value")
      .attr("y", (yAxisScale.step() * (1 - chartSettings.columnPadding)) / 2)
      .attr("x", titlePadding)
      .text(0);

    // Update selection
    const barUpdate = barGroupsEnter.merge(barGroups);

    barUpdate
      .transition(transition)
      .attr("transform", ({ name }) => `translate(0,${yAxisScale(name)})`)
      .attr("fill", "normal");

    barUpdate
      .select(".column-rect")
      .transition(transition)
      .attr("width", ({ value }) => xAxisScale(value));

    barUpdate
      .select(".column-title")
      .transition(transition)
      .attr("x", ({ value }) => xAxisScale(value) - titlePadding);

    barUpdate
      .select(".column-value")
      .transition(transition)
      .attr("x", ({ value }) => xAxisScale(value) + titlePadding)
      .tween("text", function ({ value }) {
        const interpolateStartValue =
          elapsedTime === chartSettings.duration
            ? this.currentValue || 0
            : +this.innerHTML;

        const interpolate = d3.interpolate(interpolateStartValue, value);
        this.currentValue = value;

        return function (t) {
          d3.select(this).text(Math.ceil(interpolate(t)));
        };
      });

    // Exit selection
    const bodyExit = barGroups.exit();

    bodyExit
      .transition(transition)
      .attr("transform", `translate(0,${innerHeight})`)
      .on("end", function () {
        d3.select(this).attr("fill", "none");
      });

    bodyExit
      .select(".column-title")
      .transition(transition)
      .attr("x", 0);

    bodyExit
      .select(".column-rect")
      .transition(transition)
      .attr("width", 0);

    bodyExit
      .select(".column-value")
      .transition(transition)
      .attr("x", titlePadding)
      .tween("text", function () {
        const interpolate = d3.interpolate(this.currentValue, 0);
        this.currentValue = 0;

        return function (t) {
          d3.select(this).text(Math.ceil(interpolate(t)));
        };
      });

    return this;
  }

  function addDataset(dataSet) {
    chartDataSets.push(dataSet);

    return this;
  }

  function addDatasets(dataSets) {
    chartDataSets.push.apply(chartDataSets, dataSets);

    return this;
  }

  function setTitle(title) {
    d3.select(".chart-title")
      .attr("x", chartSettings.width / 2)
      .attr("y", -chartSettings.padding / 2)
      .text(title);

    return this;
  }

  /* async function render() {
    for (const chartDataSet of chartDataSets) {
      chartTransition = chartContainer
        .transition()
        .duration(chartSettings.duration)
        .ease(d3.easeLinear);

      draw(chartDataSet, chartTransition);

      await chartTransition.end();
    }
  } */

  async function render(index = 0) {
    currentDataSetIndex = index;
    timerStart = d3.now();

    chartTransition = chartContainer
      .transition()
      .duration(elapsedTime)
      .ease(d3.easeLinear)
      .on("end", () => {
        if (index < chartDataSets.length) {
          elapsedTime = chartSettings.duration;
          render(index + 1);
        } else {
          d3.select("button").text("Play");
        }
      })
      .on("interrupt", () => {
        timerEnd = d3.now();
      });

    if (index < chartDataSets.length) {
      draw(chartDataSets[index], chartTransition);
    }

    return this;
  }

  function stop() {
    d3.select(`#${chartId}`)
      .selectAll("*")
      .interrupt();

    return this;
  }

  function start() {
    elapsedTime -= timerEnd - timerStart;

    render(currentDataSetIndex);

    return this;
  }

  return {
    addDataset,
    addDatasets,
    render,
    setTitle,
    start,
    stop
  };
}
const myChart = new BarChartRace("bar-chart-race");

myChart
  .setTitle("Esports By the Numbers")
  .addDatasets(generateDataSets({ size: 5 }))
  .render();

d3.select("button").on("click", function () {
  if (this.innerHTML === "Stop") {
    this.innerHTML = "Resume";
    myChart.stop();
  } else if (this.innerHTML === "Resume") {
    this.innerHTML = "Stop";
    myChart.start();
  } else {
    this.innerHTML = "Stop";
    myChart.render();
  }
});