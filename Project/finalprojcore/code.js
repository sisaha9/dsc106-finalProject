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
    drawNetworkGraph();
}

function drawStackedBars() {
    Highcharts.chart('viz0', {
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
            color: '#fbca03',
			data: [59.8, 55.4, 51.1, 46.7, 45.7]
		}, {
            name: 'Rotten Tomatoes',
            color: '#b97d10',
            data: [53, 53, 50, 39, 30]
        }, {
            name: 'Express',
            color: '#67C7EB',
            data: [25, 24, 22, 18, 14]
        }]
    });
    Highcharts.chart('viz1', {
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
            text: 'Source: <a href="https://www.reddit.com/r/marvelstudios/comments/a1wird/results_top_5_favorite_mcu_heroes/">Reddit</a>'
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
			name: 'Popularity',
			data: [59.8, 55.4, 51.1, 46.7, 45.7]
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
    Highcharts.chart('viz4', {

		title: {
			text: '<b>Sales by Phase</b>'
		},
        subtitle: {
            text: 'Source: <a href="https://www.the-numbers.com/movies/franchise/Marvel-Cinematic-Universe#tab=summary">The Numbers</a>'
        },
		yAxis: {
			title: {
				text: '<b>Sales generated</b>'
            },
            labels: {
                formatter: function () {
                    return '$' + this.value/1000000000 + 'B';
                }
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
            color: '#fbca03',
			data: [2721428147, 2611491474, 6879611017]
		}, {
			name: 'Captain America',
            color: '#b97d10',
            data: [1885669987, 2110501091, 5999444667]
		}, {
            name: 'Thor',
            colors: '#67C7EB',
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
    Highcharts.chart('viz5', {
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
    Highcharts.chart('viz6', {
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
                text: 'Number of lines'
            },
            labels: {
                overflow: 'justify'
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

function drawNetworkGraph() {
    let r = {
        'Bruce Banner': "Bruce and Tony are close friends, getting along as soon as they meet, and share an interest in technology. Unlike others, Tony was much less apprehensive, instead impressed, of the Hulk. Tony even encouraged Bruce to see the Hulk as a blessing, rather than a curse. After the Battle of New York, Bruce (as the Hulk) is the one to catch Tony when he's falling to the ground from space. Bruce would later assist Tony in creating Ultron and Vision. After two to three years since the battle with Ultron, Banner returned from his self-exile in space and sought a comforting hug from Tony, who did not object, after Thanos killed half of the Asgardians and presumably Thor. He also got Tony to (attempt) call Steve and the other outlaw Avengers in spite of their falling out.",
        'Steve Rogers': "Steve is Tony's ally, teammate, friend, but also occasional arch rival in the Avengers. As for their social relationship, they might as well be considered as 'frenemies' due to their personality clashes. In his childhood, Initially, Tony was resentful of Steve due to all the repeated praise his estranged father, who was an ally to Steve in the past, while the latter believed Tony was merely a gloryhound pretending to be a hero. When Scarlet Witch shows Tony a vision of the Avengers lying in the ground, injured and dying, Tony is especially affected by Steve's apparent death, as he quickly rushes to the latter's side, checking for a pulse. Their friendship is put to the test and severely damaged after the events of Captain America: Civil War, where they had different views of the Sokovia Accords. Though Tony attempted a truce with Steve, it was completely shattered when he learned Steve's old best friend, Bucky Barnes, killed his parents under the control of HYDRA, which Steve partially knew. However, after their lethal battle, Steve sent a letter of apology for everything that had happened, telling Tony that if he ever needed his help, he'd be there. Tony, in turn, allowed Steve and the other Avengers in custody to escape from the Raft (ignoring Secretary Ross' call for help), possibly already showing signs of forgiveness on his part. Seven years later, they have reconciled their friendship.",
        'Happy Hogan': "Happy is Tony's chauffeur, bodyguard, and good friend. Happy is loyal to Tony and puts up with his eccentrics. Tony does care for Happy, publicly challenging the Mandarin when Happy was hospitalized by one of the terrorist's minions.",
        'James "Rhodey" Rhodes': "Rhodey is Tony's best friend and an officer of the US military. He often argues with Tony. He even stated that Iron Man can't do this alone, but Tony never listens. Despite their personality clashes, the two do care for each other. This is prominently shown when Tony defensively confronted an enlarged Ant-Man who had Rhodes in his grasp, then later on checked on him after he had spinal injury by a misfire from Vision, and helped him walk again with prosthetic exoskeleton.",
        'Natasha Romanoff': "Tony and Natasha had a distant relationship when they first met, the latter unimpressed with his flirtations on her when she was sent to monitor him by S.H.I.E.L.D. as Pepper's personal assistant. They had a moment of sincerity when Tony, closer to death from his palladium poisoning, asked her what she would do on her last birthday. When they joined the Avengers, they forged a friendship with a love-hate relationship. Natasha grudgingly shared Tony's sentiment of signing the Sokovia Accords. Unfortunately, she betrayed his team and allowed Steve to flee with his friend, Bucky. Nat tried to reason with Tony to compromise with Steve, only for it to fall on deaf ears. With that, Tony's friendship with Natasha, like with Steve, was strained. Following the loss against Thanos, Tony and Natasha had reconciled. In the wake of Natasha's sacrifice during the Time Heist, Tony and the other remaining original four members of the Avengers mourned the loss of their female teammate and friend.",
        'Nick Fury': "Fury is Tony's former boss (of the Avengers) and the two have shown an interesting alliance and Tony agrees (or sometimes disagrees) with Nick's decisions for S.H.I.E.L.D. and the Avengers. However, Tony has supplied with him along with S.H.I.E.L.D. some weapons from his suit. After Tony creates Ultron, Fury tells Tony that he cares about him.",
        'Peter Parker': "After recruiting Peter for his team during the Avengers Civil War, Tony starts mentoring Peter in hopes of helping him become a better hero that he himself had been. When Peter had been taking dangerous missions, Tony took away his suit, believing that it was for his own good. Once Parker showed responsibility, Stark gave him back the suit, as well as a place in the Avengers, but Peter declined. Once the events of Infinity War happened, Tony made Parker into a member of the Avengers.",
        'Virgina "Pepper" Potts': "Pepper is Tony's personal assistant, later CEO of Stark Industries, and girlfriend. While not fond of Tony's constant philandering and insufferable eccentricity, she is unquestionably loyal to him. Out of all people, Tony is substantially nicer to Pepper and trusts her in return. They subtly showed a mutual feelings for each other, but initially tried to suppress them due to Pepper unwilling to be another of Tony's numerous dalliances. She always worries about Tony fighting alone against villains who stole his tech. When he was initially dying, Tony put Pepper as CEO of his company due to accountability. Tony and Pepper eventually entered a romantic relationship, with Tony ceasing his womanizer ways for her (briefly quitting being a superhero for her sake) while Pepper endures his faults. They temporarily broke up when Tony could not stop being a hero, but got back together with Tony soon proposing to Pepper with a ring he had Happy carry for a few years. They married and had a daughter named Morgan."
    };
    let ironMan = "#E8544E",
    others = "#FFD265";

    Highcharts.chart('viz7', {

        chart: {
            type: 'networkgraph',
            marginTop: 80
        },

        title: {
            text: 'South Korea domestic flight routes'
        },
        subtitle: {
            text: 'Source: <a href="https://disney.fandom.com/wiki/Iron_Man/Relationships">Fandom</a>'
        },
        tooltip:{
            formatter:function(){
                var info="";
                switch(this.color){
                    case ironMan:
                    info=": Our main character"
                    break;
                    case others:
                    info=": Click to get more information on their relationship with Tony Stark"
                    break;
                }
                return "<b>"+this.key + "</b>: "+info;
            }
        },

        plotOptions: {
            networkgraph: {
                keys: ['from', 'to'],
                layoutAlgorithm: {
                    enableSimulation: true,
                    integration: 'verlet',
                    linkLength: 100
                },
                allowPointSelect: true,
                events: {
                    click: function(e) {
                        let text_container = document.getElementById('text1');
                        if (e.point.id === 'Tony Stark') {
                            text_container.innerHTML = ''
                            return;
                        }
                        if (text_container.innerHTML === r[e.point.id]) {
                            text_container.innerHTML = ''
                        } else {
                            text_container.innerHTML = r[e.point.id]
                        }
                    }
                }
            }
        },

        series: [{
            marker: {
                radius: 13,
            },
            dataLabels: {
                enabled: true,
                linkFormat: '',
                allowOverlap: true,
                style: {
                    textOutline: false 
                }
            },
            data: [
            ['Tony Stark', 'Bruce Banner'],
            ['Tony Stark', 'Steve Rogers'],
            ['Tony Stark', 'Happy Hogan'],
            ['Tony Stark', 'James "Rhodey" Rhodes'],
            ['Tony Stark', 'Natasha Romanoff'],
            ['Tony Stark', 'Nick Fury'],
            ['Tony Stark', 'Peter Parker'],
            ['Tony Stark', 'Virgina "Pepper" Potts'],
            ],
            nodes: [{
                id: 'Tony Stark',
                marker: {
                radius: 30,
                },
                color: ironMan
            }, {
                id: 'James "Rhodey" Rhodes',
                marker: {
                radius: 15,
                },
                color: others
            }, {
                id: 'Virgina "Pepper" Potts',
                marker: {
                radius: 15
                },
                color: others
            }, {
                id: 'Happy Hogan',
                marker: {
                radius: 15,
                },
                color: others
            },
            {
                id: 'Steve Rogers',
                marker: {
                radius: 15,
                },
                color: others
            },{
                id: 'Bruce Banner',
                marker: {
                radius: 15,
                },
                color: others
            }, {
                id: 'Natasha Romanoff',
                marker: {
                radius: 15,
                },
                color: others
            }, {
                id: 'Nick Fury',
                marker: {
                radius: 15,
                },
                color: others
            }, {
                id: 'Peter Parker',
                marker: {
                radius: 15,
                },
                color: others
            }]
        }]
    });
}