d3.json('/scatter').then(data=>{
        
        let trace1 = {
            'x' : data[0],
            'y' : data[1],
            'z' : data[3],
            'text' : data[2],
            'mode' : 'markers',
            'marker': {
                color: '#00FFFF'
            },
            'type' : 'scatter3d'
        }
        
        let traceData1 = [trace1];
    
        let layout1 = {
            title: "Tournament vs. Date vs Number of Players",
            titlefont: {
                    color: 'white'
            },
            plot_bgcolor: "#303030",
            paper_bgcolor:"#303030",
            scene:{
                automargin: true,
            autosize: true,
            xaxis: {
                tickcolor:'white',
                gridcolor: 'white',
                zerolinecolor: 'white',
                tickfont: {
                  color: 'white'
                },
                title: 'Date',
                titlefont: {
                    color: 'white'
                },
                linecolor: 'white',
            },
            yaxis: {
                tickcolor:'white',
                gridcolor: 'white',
                zerolinecolor: 'white',
                tickfont: {
                  color: 'white'
                },
                title: 'Earnings',
                titlefont: {
                    color: 'white'
                },
                linecolor: 'white',
            },
            zaxis: {
                tickcolor:'white',
                gridcolor: 'white',
                zerolinecolor: 'white',
                tickfont: {
                  color: 'white'
                },
                title: 'Players',
                titlefont: {
                    color: 'white'
                },
                linecolor: 'white',
            }
        }};
    
    var config = {responsive: true}
    
        Plotly.newPlot("scatter3d", traceData1, layout1, config);
    
    let trace2 = {
            'x' : data[0],
            'y' : data[1],
            'text' : data[2],
            'mode' : 'markers',
            'marker': {
                color: '#00FFFF'
            },
            'type' : 'scatter'
        }
        
        let traceData2 = [trace2];
    
        let layout2 = {
            title: "Tournament Earnings vs. Date",
            titlefont: {
                    color: 'white'
            },
            automargin: true,
            autosize: true,
            plot_bgcolor: "#303030",
            paper_bgcolor:"#303030",
            xaxis: {
                tickcolor:'white',
                gridcolor: 'white',
                zerolinecolor: 'white',
                tickfont: {
                  color: 'white'
                },
                title: 'Date',
                titlefont: {
                    color: 'white'
                },
                linecolor: 'white',
            },
            yaxis: {
                tickcolor:'white',
                gridcolor: 'white',
                zerolinecolor: 'white',
                tickfont: {
                  color: 'white'
                },
                title: 'Earnings',
                titlefont: {
                    color: 'white'
                },
                linecolor: 'white',
            }
        };
        Plotly.newPlot("scatter", traceData2, layout2, config);
    
    
});