var s = skrollr.init();

window.addEventListener('DOMContentLoaded', function() {
    timelinePlot();
});

function timelinePlot() {
Highcharts.chart('timeline', {
    chart: {
        zoomType: 'x',
        type: 'timeline',
        backgroundColor: 'black'
    },
    xAxis: {
        type: 'datetime',
        visible: false
    },
    yAxis: {
        gridLineWidth: 1,
        title: null,
        labels: {
            enabled: false
        }
    },
    legend: {
        enabled: false
    },
    title: {
        text: 'Timeline of Marvel Movies',
        style: {
            color: 'white',
            font: 'bold 25px "Trebuchet MS", Verdana, sans-serif'
         }
    },
    subtitle: {
        text: 'Info source: <a href="https://en.wikipedia.org/wiki/List_of_Marvel_Cinematic_Universe_films">www.wikipedia.org</a>'
    },
    tooltip: {
        style: {
            width: 300
        }
    },
    series: [{
        dataLabels: {
            allowOverlap: false,
            format: '<span style="color:{point.color}">● </span><span style="font-weight: bold;" > ' +
                '{point.label}</span><br/>{point.x:%b %d \'%y}',
            color: '#4a0505',
            borderColor: 'black',
            backgroundColor: '#d7be69',
            style: {
                fontSize: '15px'
            }
        },
        marker: {
            symbol: 'circle'
        },
        data: [{
            x: Date.UTC(2008, 5, 2),
            name: 'Iron Man',
            label: 'Iron Man',
            description: "",
            dataLabels: {
                backgroundColor: 'orange'
            }
        }, {
            x: Date.UTC(2008, 6, 13),
            name: 'The Incredible Hulk',
            label: 'The Incredible Hulk',
            description: ""
        }, {
            x: Date.UTC(2010, 5, 7),
            name: 'Iron Man 2',
            label: 'Iron Man 2',
            description: "",
            dataLabels: {
                backgroundColor: 'orange'
            }
        }, {
            x: Date.UTC(2011, 5, 6),
            name: 'Thor',
            label: 'Thor',
            description: ""
        }, {
            x: Date.UTC(2011, 7, 22),
            name: 'Captain America: The First Avenger',
            label: 'Captain America: The First Avenger',
            description: ""
        }, {
            x: Date.UTC(2012, 5, 4),
            name: 'The Avengers',
            label: 'The Avengers',
            description: "",
            dataLabels: {
                backgroundColor: 'orange'
            }
        }, {
            x: Date.UTC(2013, 5, 3),
            name: 'Iron Man 3',
            label: 'Iron Man 3',
            description: "",
            dataLabels: {
                backgroundColor: 'orange'
            }
        }, {
            x: Date.UTC(2013, 11, 8),
            name: 'Thor: The Dark World',
            label: 'Thor: The Dark World',
            description: ""
        }, {
            x: Date.UTC(2014, 4, 4),
            name: 'Captain America: The Winter Soldier',
            label: 'Captain America: The Winter Soldier',
            description: ""
        }, {
            x: Date.UTC(2014, 8, 1),
            name: 'Guardians of the Galaxy',
            label: 'Guardians of the Galaxy',
            description: ""
        }, {
            x: Date.UTC(2015, 5, 1),
            name: 'Avengers: Age of Ultron',
            label: 'Avengers: Age of Ultron',
            description: "",
            dataLabels: {
                backgroundColor: 'orange'
            }
        }, {
            x: Date.UTC(2015, 7, 17),
            name: 'Ant-Man',
            label: 'Ant-Man',
            description: ""
        }, {
            x: Date.UTC(2016, 5, 6),
            name: 'Captain America: Civil War',
            label: 'Captain America: Civil War',
            description: "",
            dataLabels: {
                backgroundColor: 'orange'
            }
        }, {
            x: Date.UTC(2016, 11, 4),
            name: 'Doctor Strange',
            label: 'Doctor Strange',
            description: ""
        }, {
            x: Date.UTC(2017, 5, 5),
            name: 'Guardians of the Galaxy Vol. 2',
            label: 'Guardians of the Galaxy Vol. 2',
            description: ""
        }, {
            x: Date.UTC(2017, 7, 7),
            name: 'Spider-Man: Homecoming',
            label: 'Spider-Man: Homecoming',
            description: "",
            dataLabels: {
                backgroundColor: 'orange'
            }
        }, {
            x: Date.UTC(2017, 11, 3),
            name: 'Thor: Ragnarok',
            label: 'Thor: Ragnarok',
            description: ""
        }, {
            x: Date.UTC(2018, 2, 16),
            name: 'Black Panther',
            label: 'Black Panther',
            description: ""
        }, {
            x: Date.UTC(2018, 4, 27),
            name: 'Avengers: Infinity War',
            label: 'Avengers: Infinity War',
            description: "",
            dataLabels: {
                backgroundColor: 'orange'
            }
        }, {
            x: Date.UTC(2018, 7, 6),
            name: 'Ant-Man and the Wasp',
            label: 'Ant-Man and the Wasp',
            description: ""
        }, {
            x: Date.UTC(2019, 3, 8),
            name: 'Captain Marvel',
            label: 'Captain Marvel',
            description: ""
        }, {
            x: Date.UTC(2019, 4, 26),
            name: 'Avengers: Endgame',
            label: 'Avengers: Endgame',
            description: "",
            dataLabels: {
                backgroundColor: 'orange'
            }
        }, {
            x: Date.UTC(2019, 7, 2),
            name: 'Spider-Man: FFH',
            label: 'Spider-Man: FFH',
            description: ""
        }]
    }]
});
}