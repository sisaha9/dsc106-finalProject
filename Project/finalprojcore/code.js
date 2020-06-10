function setup() {
    Highcharts.setOptions({
        lang: {
            thousandsSep: ','
        }
    });
    drawStackedBars();
    drawLine();
    drawScreenBars();
    drawLinesBars();
}

function drawStackedBars() {
    // Highcharts.chart('viz1', {
	// 	chart: {
	// 		plotBackgroundColor: null,
	// 		plotBorderWidth: null,
	// 		plotShadow: false,
	// 		type: 'bar'
	// 	},
	// 	title: {
	// 		text: '<b>MCU Favorite Heroes In Different Sources</b>'
    //     },
    //     subtitle: {
    //         text: 'Source: <a href="https://www.reddit.com/r/marvelstudios/comments/a1wird/results_top_5_favorite_mcu_heroes/">Reddit</a>, <a href="https://editorial.rottentomatoes.com/article/iron-man-captain-america-voted-favorite-avengers/">Rotten Tomatoes</a>, <a href="https://www.express.co.uk/entertainment/films/1117036/Avengers-Endgame-favourite-Marvel-superhero-poll-Iron-Man-Captain-America-Thor-Spider-Man">Express</a>'
    //     },
	// 	tooltip: {
	// 		pointFormat: '{series.name}: <b>{point.y:.2f}%</b>'
	// 	},
	// 	plotOptions: {
    //         bar: {
    //             dataLabels: {
    //                 enabled: true
    //             }
    //         }
    //     },
    //     xAxis: {
    //         categories: ['Iron Man', 'Thor', 'Spider Man', 'Doctor Strange', 'Captain America'],
    //         title: {
    //             text: 'Heroes'
    //         }
    //     },
    //     yAxis: {
    //         min: 0,
    //         title: {
    //             text: 'Popularity (%)'
    //         },
    //         labels: {
    //             overflow: 'justify'
    //         }
    //     },
	// 	series: [{
    //         name: 'Reddit',
    //         color: '#fbca03',
	// 		data: [59.8, 55.4, 51.1, 46.7, 45.7]
	// 	}, {
    //         name: 'Rotten Tomatoes',
    //         color: '#b97d10',
    //         data: [53, 53, 50, 39, 30]
    //     }, {
    //         name: 'Express',
    //         color: '#67C7EB',
    //         data: [25, 24, 22, 18, 14]
    //     }]
    // });
    Highcharts.chart('viz1', {
		chart: {
            backgroundColor: 'black',
            style: {
                // fontFamily: 'monospace',
                color: "white"
            },
			plotBorderWidth: null,
			plotShadow: false,
			type: 'bar'
		},
		title: {
            text: '<b>MCU Favorite Heroes</b>',
            style: {
                // fontFamily: 'monospace',
                color: "white"
            },
        },
        subtitle: {
            text: 'Source: <a href="https://www.reddit.com/r/marvelstudios/comments/a1wird/results_top_5_favorite_mcu_heroes/">Reddit</a>'
        },
		tooltip: {
            pointFormat: '{series.name}: <b>{point.y:.2f}%</b>'            
		},
		plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true,
                    color: "white"
                                    
                }
                
            }
        },
        legend: {
            itemStyle: {
            color: "white"
            }
        },
        xAxis: {
            categories: ['Iron Man', 'Thor', 'Spider Man', 'Doctor Strange', 'Captain America'],
            title: {
                text: 'Heroes',
                style: {
                    // fontFamily: 'monospace',
                    color: "white"
                }
            },
            labels: {
                style: {
                    // fontFamily: 'monospace',
                    color: "white"
                }
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Popularity (%)',
                style: {
                    // fontFamily: 'monospace',
                    color: "white"
                },
            },
            labels: {
                overflow: 'justify',
                style: {
                    // fontFamily: 'monospace',
                    color: "white"
                }
            }
        },
		series: [{
			name: 'Popularity',
            data: [59.8, 55.4, 51.1, 46.7, 45.7],
		}]
    });
    Highcharts.chart('viz2', {
		chart: {
			plotBackgroundColor: null,
			plotBorderWidth: null,
			plotShadow: false,
			type: 'bar'
		},
		title: {
			text: '<b>MCU Favorite Heroes</b>'
        },
        subtitle: {
            text: 'Source: <a href="https://editorial.rottentomatoes.com/article/iron-man-captain-america-voted-favorite-avengers/">Rotten Tomatoes</a>'
        },
		tooltip: {
			pointFormat: '{series.name}: <b>{point.y:.2f}%</b>'
		},
		plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        xAxis: {
            categories: ['Iron Man', 'Captain America', 'Thor', 'Spider Man', 'Doctor Strange'],
            title: {
                text: 'Heroes'
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Popularity (%)'
            },
            labels: {
                overflow: 'justify'
            }
        },
		series: [{
			name: 'Popularity',
			data: [53, 53, 50, 39, 30]
		}]
    });
    Highcharts.chart('viz3', {
		chart: {
			plotBackgroundColor: null,
			plotBorderWidth: null,
			plotShadow: false,
			type: 'bar'
		},
		title: {
			text: '<b>MCU Favorite Heroes</b>'
        },
        subtitle: {
            text: 'Source: <a href="https://www.express.co.uk/entertainment/films/1117036/Avengers-Endgame-favourite-Marvel-superhero-poll-Iron-Man-Captain-America-Thor-Spider-Man">Express</a>'
        },
		tooltip: {
			pointFormat: '{series.name}: <b>{point.y:.2f}%</b>'
		},
		plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        xAxis: {
            categories: ['Iron Man', 'Thor', 'Spider Man', 'Captain America', 'Hulk'],
            title: {
                text: 'Heroes'
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Popularity (%)'
            },
            labels: {
                overflow: 'justify'
            }
        },
		series: [{
			name: 'Popularity',
			data: [25, 24, 22, 18, 14]
		}]
	});
}

function drawLine() {
    Highcharts.chart('viz2', {
        chart: {
			backgroundColor: '#807d75'
		},
		title: {
			text: '<b>Sales by Phase</b>',
            style: {
                // fontFamily: 'monospace',
                color: "black"
            }
        },
        subtitle: {
            text: 'Source: <a href="https://www.the-numbers.com/movies/franchise/Marvel-Cinematic-Universe#tab=summary">The Numbers</a>',
            style: {
                // fontFamily: 'monospace',
                color: "#4d4b46"
            }
        },        
		yAxis: {
			title: {
				text: '<b>Sales generated</b>',
                style: {
                    // fontFamily: 'monospace',
                    color: "black"
                }
            },
            labels: {
                formatter: function () {
                    return '$' + this.value/1000000000 + 'B';
                },
                style: {
                    // fontFamily: 'monospace',
                    color: "black"
                }
            },
            gridLineColor: 'white',
            gridLineWidth: .25
		},
		xAxis: {
			title: {
				text: '<b>Phase</b>',
                style: {
                    // fontFamily: 'monospace',
                    color: "black"
                }
			},
			categories: ['Phase 1', 'Phase 2', 'Phase 3'],
            labels: {style: {
                // fontFamily: 'monospace',
                color: "black"
            }
        }
    },
	
		legend: {
			layout: 'vertical',
			align: 'right',
			verticalAlign: 'middle'
		},
	
		plotOptions: {
			series: {
				label: {
					connectorAllowed: false
				}
			}
		},
	
		series: [{
            name: 'Iron Man',
            color: '#fbca03',
			data: [2721428147, 2611491474, 6879611017]
		}, {
			name: 'Captain America',
            color: '#e39302', /*'#b97d10',*/
            data: [1885669987, 2110501091, 5999444667]
		}, {
            name: 'Thor',
            colors: '#0fbcfc', /*'#67C7EB',*/
            data: [1964426829, 2040701718, 5700118607]
        }],
	
		responsive: {
			rules: [{
				condition: {
					maxWidth: 500
				},
				chartOptions: {
					legend: {
						layout: 'horizontal',
						align: 'center',
						verticalAlign: 'bottom'
					}
				}
			}]
		}
	
	});
}

function drawScreenBars() {
    Highcharts.chart('viz3', {
		chart: {
			// backgroundColor: ,
			plotBorderWidth: null,
			plotShadow: false,
			type: 'column'
		},
		title: {
			text: '<b>MCU Screen Time</b>'
        },
        subtitle: {
            text: 'Source: <a href="https://www.imdb.com/list/ls066620113/">IMDb</a>'
        },
		tooltip: {
			pointFormat: '{series.name}: <b>{point.y:.2f} hours</b>'
		},
		plotOptions: {
            column: {
                dataLabels: {
                    enabled: true
                },
                colorByPoint: true
            },
        },
        colors: [
            '#fbca03',
            '#b97d10',
            '#67C7EB'
        ],
        xAxis: {
            categories: ['Iron Man', 'Captain America', 'Thor'],
            title: {
                text: 'Heroes'
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Screen Time (in hrs)'
            },
            labels: {
                overflow: 'justify'
            }
        },
		series: [{
            name: 'Hours',
            data: [5.96, 3.93, 3.41]
        }],
        legend: {
            enabled: false
        }
    });
}

function drawLinesBars() {
    Highcharts.chart('viz4', {
		chart: {
			backgroundColor: 'black',
			plotBorderWidth: null,
			plotShadow: false,
			type: 'column'
		},
		title: {
			text: '<b>MCU Lines per character</b>',
            style: {
                // fontFamily: 'monospace',
                color: "green"
            }
        },
        subtitle: {
            text: 'Source: <a href="https://transcripts.fandom.com/wiki/Category:Marvel_Transcripts">Fandom</a>'
        },
		tooltip: {
			pointFormat: '{series.name}: <b>{point.y:.2f} lines</b>'
		},
		plotOptions: {
            column: {
                dataLabels: {
                    enabled: true,
                    color: 'white'
                },
                colorByPoint: true
            },
        },
        colors: [
            '#fbca03',
            '#b97d10',
            '#67C7EB'
        ],
        xAxis: {
            categories: ['Iron Man', 'Captain America', 'Thor'],
            title: {
                text: 'Heroes',
                style: {
                    // fontFamily: 'monospace',
                    color: "green"
                }
            },
            labels: {
                style: {
                    // fontFamily: 'monospace',
                    color: "green"
                }
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Number of lines',
                style: {
                    // fontFamily: 'monospace',
                    color: "green"
                }
            },
            labels: {
                overflow: 'justify',
                style: {
                    // fontFamily: 'monospace',
                    color: "green"
                }
            }
        },
		series: [{
            name: 'Lines',
            data: [1931, 927, 866]
        }],
        legend: {
            enabled: false            
        }
    });
}