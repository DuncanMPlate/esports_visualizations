
import { generateDataSets } from "dataGenerator.js";
import { BarChartRace } from "bar_race.js";

import { select as d3Select } from "d3";

const myChart = new BarChartRace("bar-chart-race");

myChart
	.setTitle("Esports By the Numbers")
	.addDatasets(generateDataSets({ size: 5 }))
	.render();

d3Select("button").on("click", function () {
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
