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
    drawSpiderWeb();
    drawMCUPopularity();
}

function drawStackedBars() {
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
            text: '<b>MCU Avenger Popularity</b>',
            style: {
                // fontFamily: 'monospace',
                color: "white",
                fontSize: '30px'
            },
        },
        subtitle: {
            text: '<br>Percentage of times an Avenger was chosen as a favorite Avenger<br><br><a href="https://editorial.rottentomatoes.com/article/iron-man-captain-america-voted-favorite-avengers/" style="color:grey;">Source: Rotten Tomatoes</a>',
            style: {
                // fontFamily: 'monospace',
                color: "white",
                fontSize: '15px'
            },
        },
		tooltip: {
            pointFormat: '{series.name}: <b>{point.y}%</b>'            
		},
		plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true,
                    color: "white",
                    style: {
                        fontSize: '15px'
                    },
                    format: '{y}%'
                }
                
            }
        },
        legend: {
            enabled: false
        },
        xAxis: {
            categories: ['Iron Man', 'Captain America', 'Thor', 'Spider Man', 'Doctor Strange'],
            title: {
                text: 'Heroes',
                style: {
                    // fontFamily: 'monospace',
                    color: "white",
                    fontSize: '20px'
                }
            },
            labels: {
                style: {
                    // fontFamily: 'monospace',
                    color: "white",
                    fontSize: '15px'
                }
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Popularity (%)',
                style: {
                    // fontFamily: 'monospace',
                    color: "white",
                    fontSize: '20px'
                },
            },
            labels: {
                overflow: 'justify',
                style: {
                    // fontFamily: 'monospace',
                    color: "white",
                    fontSize: '15px'
                }
            }
        },
		series: [{
			name: 'Popularity',
            data: [53, 53, 50, 39, 30]
		}]
    });
}

function drawLine() {
    Highcharts.chart('viz2', {
        chart: {
			backgroundColor: 'black'
		},
		title: {
			text: '<b>Sales by Phase per Avenger</b>',
            style: {
                // fontFamily: 'monospace',
                color: "white",
                fontSize: '30px'
            }
		},
        subtitle: {
            text: '<a href="https://www.the-numbers.com/movies/franchise/Marvel-Cinematic-Universe#tab=summary">Source: The Numbers</a>',
            style: {
                // fontFamily: 'monospace',
                color: "grey",
                fontSize: '15px'
            }
        },
        tooltip: {
            pointFormat: '{series.name}: <b>${point.y}</b>'            
		},
		yAxis: {
			title: {
				text: '<b>Sales generated</b>',
                style: {
                    // fontFamily: 'monospace',
                    color: "white",
                    fontSize: '20px'
                }
            },
            labels: {
                formatter: function () {
                    return '$' + this.value/1000000000 + 'B';
                },
                style: {
                    // fontFamily: 'monospace',
                    color: "white",
                    fontSize: '15px'
                }
            }
        },
        
        gridLineColor: 'white',
        gridLineWidth: .25,

		xAxis: {
			title: {
				text: '<b>Phase</b>',
                style: {
                    // fontFamily: 'monospace',
                    color: "white",
                    fontSize: '20px'
                }
			},
			categories: ['Phase 1', 'Phase 2', 'Phase 3'],
            labels: {style: {
                // fontFamily: 'monospace',
                color: "white",
                fontSize: '15px'
            }

        }
    },
	
		legend: {
			layout: 'vertical',
			align: 'right',
            verticalAlign: 'middle',
            itemStyle: {
                color: 'white',
                fontSize: '13px'
            }
		},
	
		plotOptions: {
			series: {
				label: {
					connectorAllowed: false
                },
                dataLabels: {
                    enabled: true,
                    padding: 0,
                    allowOverlap: true,
                    formatter: function() {
                        return '$' + (this.y/1000000000).toFixed(2) + 'B';
                    },
                    style: {
                        color: 'white'
                    }
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
            data: [1964426829, 2040701718, 5700118607],
            verticalAlign: 'bottom',
            dataLabels: {
                y: 15
            }
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
            text: '<b>MCU Screen Time Per Character</b>',
            style: {
                fontSize: '30px'
            }
        },
        subtitle: {
            text: 'Source: <a href="https://www.imdb.com/list/ls066620113/">IMDb</a>',
            style: {
                fontSize: '15px'
            }
        },
		tooltip: {
			pointFormat: '{series.name}: <b>{point.y:.2f} hours</b>'
		},
		plotOptions: {
            column: {
                dataLabels: {
                    enabled: true,
                    style: {
                        fontSize: '16px'
                    }
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
                    fontSize: '20px'
                }
            },
            labels: {
                style: {
                    fontSize: '15px'
                }
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Screen Time (in hrs)',
                style: {
                    fontSize: '20px'
                }               
            },
            labels: {
                overflow: 'justify',
                style: {
                    fontSize: '15px'
                }
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
			text: '<b>MCU Lines Per Character</b>',
            style: {
                // fontFamily: 'monospace',
                color: "white",
                fontSize: '30px'
            }
        },
        subtitle: {
            text: 'Source: <a href="https://transcripts.fandom.com/wiki/Category:Marvel_Transcripts">Fandom</a>',
            style: {
                color: 'grey',
                fontSize: '15px'
            }
        },
		tooltip: {
			pointFormat: '{series.name}: <b>{point.y:.2f} lines</b>'
		},
		plotOptions: {
            column: {
                dataLabels: {
                    enabled: true,
                    color: 'white',
                    style: {
                        fontSize: '15px'
                    }
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
                    color: "white",
                    fontSize: '20px'
                }
            },
            labels: {
                style: {
                    // fontFamily: 'monospace',
                    color: "white",
                    fontSize: '15px'
                }
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Number of lines',
                style: {
                    // fontFamily: 'monospace',
                    color: "white",
                    fontSize: '20px'
                }
            },
            labels: {
                overflow: 'justify',
                style: {
                    // fontFamily: 'monospace',
                    color: "white",
                    fontSize: '15px'
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
    others = 'darkblue';

    Highcharts.chart('viz5', {

        chart: {
            type: 'networkgraph',
            marginTop: 80,
            backgroundColor: 'black'
        },

        title: {
            text: "Tony Stark's Major Relationships",
            style: {
                // fontFamily: 'monospace',
                fontFamily: 'Ubuntu',
                color: "white",
                fontSize: '30px'
            }
        },
        subtitle: {
            text: 'Source: <a href="https://disney.fandom.com/wiki/Iron_Man/Relationships">Fandom</a>',
            style: {
                color: "grey",
                fontSize: "15px"
            }
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
                        let place_holder = document.getElementById('placeh');
                        if (e.point.id === 'Tony Stark') {
                            text_container.innerHTML = ''
                            place_holder.innerHTML = '<i>Relationship description is displayed here</i>'
                            return;
                        }
                        if (text_container.innerHTML === r[e.point.id]) {
                            text_container.innerHTML = ''
                            place_holder.innerHTML = '<i>Relationship description is displayed here</i>'
                        } else {
                            text_container.innerHTML = r[e.point.id]
                            place_holder.innerHTML = ''
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
                    textOutline: false,
                    color: 'white',
                    fontSize: '13px'
                }
            },
            data: [
            ['Tony Stark', 'Bruce Banner'],
            ['Tony Stark', 'Steve Rogers'],
            ['Tony Stark', 'Happy Hogan'],
            ['Tony Stark', 'James "Rhodey" Rhodes'],
            ['Tony Stark', 'Nick Fury'],
            ['Tony Stark', 'Natasha Romanoff'],
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

function drawSpiderWeb() {
    Highcharts.chart('viz6', {
        chart: {
            polar: true,
            type: 'line',
            backgroundColor: 'black',
        },

        title: {
            text: 'Iron Man vs other popular heroes',
            style: {
                // fontFamily: 'monospace',
                color: "white",
                fontSize: '29px'
            },
            x: -80
        },
        subtitle: {
            text: 'Sources: <a href="https://www.superherodb.com/>SHDb</a>',
            style: {
                color: 'grey',
                fontSize: '14px'
            }
        },
        pane: {
            size: '80%'
        },
    
        xAxis: {
            categories: ['Intelligence', 'Strength', 'Speed', 'Durability', 'Power', 'Combat'],
            tickmarkPlacement: 'on',
            lineWidth: 0,
            labels: {
                style: {
                    // fontFamily: 'monospace',
                    color: "white",
                    fontSize: '14px'
                }
            }
        },
    
        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0,
            max: 100,
            labels: {
                style: {
                    // fontFamily: 'monospace',
                    color: "white",
                    fontSize: '14px'
                }
            }
        },
    
        tooltip: {
            shared: true,
            pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
        },
    
        legend: {
            align: 'right',
            verticalAlign: 'middle',
            layout: 'vertical',
            itemStyle:{
                color: "#248203"                
            }
        },
    
        series: [{
            name: 'Iron Man',
            color: '#fbca03',
            data: [100, 80, 55, 80, 90, 70],
            pointPlacement: 'on'
        }, {
            name: 'Captain America',
            color: '#b97d10',
            data: [80, 60, 40, 50, 65, 95],
            pointPlacement: 'on'
        }, {
            name: 'Thor',
            colors: '#67C7EB',
            data: [85, 100, 65, 100, 100, 100],
            pointPlacement: 'on'
        }],
    
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        align: 'center',
                        verticalAlign: 'bottom',
                        layout: 'horizontal'
                    },
                    pane: {
                        size: '70%'
                    }
                }
            }]
        }
    
    });
}

function drawMCUPopularity() {
    Highcharts.chart('viz0', {
		chart: {
			backgroundColor: 'black',
			plotBorderWidth: null,
			plotShadow: false,
			type: 'column'
		},
		title: {
			text: '<b>Highest Grossing Movie Franchises</b>',
            style: {
                // fontFamily: 'monospace',
                color: "white",
                fontSize: '30px'
            }
        },
        subtitle: {
            text: 'Source: <a href="https://en.wikipedia.org/wiki/List_of_highest-grossing_films#Highest-grossing_franchises_and_film_series">Wikipedia</a>',
            style: {
                color: "grey",
                fontSize: '15px'
            }
        },
		tooltip: {
            pointFormat: '{series.name}: <b>${point.y}</b>',
		},
		plotOptions: {
            column: {
                dataLabels: {
                    enabled: true,
                    formatter: function() {
                        return '$' + (this.y/1000000000).toFixed(2) + 'B';
                    },
                    color: 'white',
                    style: {
                        fontSize: '15px'
                    }
                },
                // colorByPoint: true
            },
        },
        xAxis: {
            categories: ['Marvel Cinematic Universe', 'Star Wars', 'Wizarding World', 'Avengers', 'Spider-Man', 'James Bond', 'Batman', 'X-Men'],
            title: {
                text: 'Franchises',
                style: {
                    // fontFamily: 'monospace',
                    color: "white",
                    fontSize: '20px'
                }
            },
            labels: {
            style: {
                // fontFamily: 'monospace',
                color: "white",
                fontSize: '15px'
            }
        }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Total Worldwide Gross',
                style: {
                    // fontFamily: 'monospace',
                    color: "white",
                    fontSize: '20px'
                }
            },
            labels: {
                style: {
                // fontFamily: 'monospace',
                    color: "white",
                    fontSize: '20px'
                },
                formatter: function () {
                    return '$' + this.value/1000000000 + 'B';
                }
            }
        },
		series: [{
            name: 'Marvel Based Movies',
            data: [
                [0, 22587809615], 
                [3, 7770377000], 
                [4, 7213542971]
            ],  
            color: '#fbca03'
         }, {
            name: 'Non Marvel Based Movies',
            data: [
                [1, 10315843646], 
                [2, 9216451317],
                [5, 7041394771], 
                [6, 6070349025], 
                [7, 6036347736]
            ],
            color: '#b97d10'
        }],
        legend: {
            enabled: true,
            itemStyle: {
                color: 'white'
            }
        }
    });
}