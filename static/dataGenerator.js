import { timeFormat } from "d3";
import password from hiddenConfig.py;
var mysql = require('mysql');
var con = mysql.createConnection({
	host: "localhost",
	user: "postgres",
	password: password,
	database: "esports_db"
});
con.connect(function(err) {
	if (err) throw err;
	con.query("Select * FROM historical_data", function(err, result, fields) {
		if (err) throw err;
		console.log(result);
	});
});

export function generateDataSets({ size = 1 }) {
	const dataSets = result;
	const currentYear = +timeFormat("%Y")(new Date());
	const maxLimitForValue = 2000;
	const minLimitForValue = 200;
	const maximumModelCount = 10;

	for (let i = 0; i < size; i++) {
		dataSets.push({
			date: currentYear - (size - (i + 1)),
			dataSet: brands
				.sort(function () {
					return Math.random() - 0.5;
				})
				.slice(0, maximumModelCount)
				.map(brand => ({
					name: brand,
					value:
						Math.random() * (maxLimitForValue - minLimitForValue) +
						minLimitForValue
				}))
		});
	}

	return dataSets;
}
