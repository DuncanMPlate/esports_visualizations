const CSV = "../Resources/HistoricalEsportData.csv";

function plotfromCSV() {
    Plotly.d3.csv(CSV, function(err, rows) {
        console.log(rows);
        processData(rows);
    });
}

function processData(allRows) {
    let x = [];
    let y = [];
    let y1 = [];
    let y2 = [];
    let row;

    let i = 0;
    while (i < allRows.length) {
        row = allRows[i];
        x.push(row["Date"]);
        y.push(row["Earnings"]);
        y1.push(row["Game"]);
        y2.push(row["Tournaments"]);
        i += 1;0

    }
    console.log("X", x);
    console.log("Y1", y1);

    makePlotly(x, y, y1, y2);
}

function makePlotly(x, y, y1, y2) {
    let traces = [
        {
            x: x,
            y: y1,
            type: "scatter"
            //name: "Game"
            //line: {
               // color: "#387fba",
               // width: 3
            //}

        },
        {
            x: x,
            y: y2,
            type: "scatter"
            //name: "Tournaments"
            //line: {
               // color: "#54ba38",
                //width: 3,
                // dash: "dash"
            //}

        }
    ];
    let layout = {
        title: "Tournament earnings over time",
        yaxis: {
            range: [0, 10000000]
        },
        xaxis: {
            tickformat: "%d/%m/%y"
        },
    };

    //https://plot.ly/javascript/configuration-options/
    let config = {
        responsive: true,
        // staticPlot: true,
        // editable: true
    };
    Plotly.newPlot("plot", traces, layout, config);
}
plotfromCSV();