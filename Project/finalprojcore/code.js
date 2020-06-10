function setup() {
    drawStackedBars();
    drawLine();
    drawScreenBars();
    drawLinesBars();
}

function drawStackedBars() {
    Highcharts.chart('viz1', {
		chart: {
			plotBackgroundColor: null,
			plotBorderWidth: null,
			plotShadow: false,
			type: 'bar'
		},
		title: {
			text: '<b>MCU Favorite Heroes In Different Sources</b>'
        },
        subtitle: {
            text: 'Source: <a href="https://www.reddit.com/r/marvelstudios/comments/a1wird/results_top_5_favorite_mcu_heroes/">Reddit</a>, <a href="https://editorial.rottentomatoes.com/article/iron-man-captain-america-voted-favorite-avengers/">Rotten Tomatoes</a>, <a href="https://www.express.co.uk/entertainment/films/1117036/Avengers-Endgame-favourite-Marvel-superhero-poll-Iron-Man-Captain-America-Thor-Spider-Man">Express</a>'
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
            categories: ['Iron Man', 'Thor', 'Spider Man', 'Doctor Strange', 'Captain America'],
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
			name: 'Reddit',
			data: [59.8, 55.4, 51.1, 46.7, 45.7]
		}, {
            name: 'Rotten Tomatoes',
            data: [53, 53, 50, 39, 30]
        }, {
            name: 'Express',
            data: [25, 24, 22, 18, 14]
        }]
    });
    // Highcharts.chart('viz1', {
	// 	chart: {
	// 		plotBackgroundColor: null,
	// 		plotBorderWidth: null,
	// 		plotShadow: false,
	// 		type: 'bar'
	// 	},
	// 	title: {
	// 		text: '<b>MCU Favorite Heroes</b>'
    //     },
    //     subtitle: {
    //         text: 'Source: <a href="https://www.reddit.com/r/marvelstudios/comments/a1wird/results_top_5_favorite_mcu_heroes/">Reddit</a>'
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
	// 		name: 'Popularity',
	// 		data: [59.8, 55.4, 51.1, 46.7, 45.7]
	// 	}]
    // });
    // Highcharts.chart('viz2', {
	// 	chart: {
	// 		plotBackgroundColor: null,
	// 		plotBorderWidth: null,
	// 		plotShadow: false,
	// 		type: 'bar'
	// 	},
	// 	title: {
	// 		text: '<b>MCU Favorite Heroes</b>'
    //     },
    //     subtitle: {
    //         text: 'Source: <a href="https://editorial.rottentomatoes.com/article/iron-man-captain-america-voted-favorite-avengers/">Rotten Tomatoes</a>'
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
    //         categories: ['Iron Man', 'Captain America', 'Thor', 'Spider Man', 'Doctor Strange'],
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
	// 		name: 'Popularity',
	// 		data: [53, 53, 50, 39, 30]
	// 	}]
    // });
    // Highcharts.chart('viz3', {
	// 	chart: {
	// 		plotBackgroundColor: null,
	// 		plotBorderWidth: null,
	// 		plotShadow: false,
	// 		type: 'bar'
	// 	},
	// 	title: {
	// 		text: '<b>MCU Favorite Heroes</b>'
    //     },
    //     subtitle: {
    //         text: 'Source: <a href="https://www.express.co.uk/entertainment/films/1117036/Avengers-Endgame-favourite-Marvel-superhero-poll-Iron-Man-Captain-America-Thor-Spider-Man">Express</a>'
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
    //         categories: ['Iron Man', 'Thor', 'Spider Man', 'Captain America', 'Hulk'],
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
	// 		name: 'Popularity',
	// 		data: [25, 24, 22, 18, 14]
	// 	}]
	// });
}

function drawLine() {
    Highcharts.chart('viz2', {

		title: {
			text: '<b>Sales by Phase</b>'
		},
        subtitle: {
            text: 'Source: <a href="https://www.the-numbers.com/movies/franchise/Marvel-Cinematic-Universe#tab=summary">The Numbers</a>'
        },
		yAxis: {
			title: {
				text: '<b>Sales generated</b>'
			}
		},
		xAxis: {
			title: {
				text: '<b>Phase</b>'
			},
			categories: ['Phase 1', 'Phase 2', 'Phase 3']
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
			data: [2721428147, 2611491474, 6879611017]
		}, {
			name: 'Captain America',
			data: [1885669987, 2110501091, 5999444667]
		}, {
            name: 'Thor',
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
			plotBackgroundColor: null,
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
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
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
			data: [5.9625, 3.9291666666666667, 3.413611111111111]
		}]
    });
}

function drawLinesBars() {
    Highcharts.chart('viz4', {
		chart: {
			plotBackgroundColor: null,
			plotBorderWidth: null,
			plotShadow: false,
			type: 'column'
		},
		title: {
			text: '<b>MCU Lines per character</b>'
        },
        subtitle: {
            text: 'Source: <a href="https://transcripts.fandom.com/wiki/Category:Marvel_Transcripts">Fandom</a>'
        },
		tooltip: {
			pointFormat: '{series.name}: <b>{point.y:.2f} lines</b>'
		},
		plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        xAxis: {
            categories: ['Iron Man', 'Captain America', 'Thor'],
            title: {
                text: 'Heroes'
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Number of lines'
            },
            labels: {
                overflow: 'justify'
            }
        },
		series: [{
            name: 'Lines',
            data: [1931, 927, 866]
		}]
    });
}