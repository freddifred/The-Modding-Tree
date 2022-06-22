function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }

addNode("C", {
    symbol: "Core",
    canClick() { return true},
    row: 0,
    
    onClick() {player.col = "green",
    player.showAlchemy = true,
    player.showPS = true,
    
    player.unlockedIds.push(player.Alchemy.layerIds["PS"]),
    player.unlockedElems.push("Primordial_soup")
    },
    tooltip() {return "The start of everything"},
    color() {return player.col}
    
})

addNode("PS", {
    symbol: "Primordial soup",
    canClick() {return true},
    row: 1,
    onClick() {return ""},
    tooltip() {return "Life begins"},
    nodeStyle:  {
        "font-size": "20px",
    },
    branches: ["C"],
    layerShown() {return player.showPS}
})

addLayer("Alchemy", {
    symbol: "A",
    row: "side",
    name: "Alchemy",
    resource: "",
    layerShown() {return player.showAlchemy},
    tooltip() {return "Find new nodes"},
    color: "yellow",
    
    grid: {
        rows: 10,
        cols: 10,
        getStartData(id) {
            return id
        },
        onClick(data, id) { 
            if (player.Alchemy.clicked ==id) {
                player.Alchemy.clicked =0
            }
            else if (player.Alchemy.clicked2 == id) {
                player.Alchemy.clicked2 =0
            }
            else if (player.Alchemy.clicked3 == id) {
                player.Alchemy.clicked3 = 0
            }
            else if (player.Alchemy.clicked4 == id) {
                player.Alchemy.clicked4 = 0
            }
            else if (player.Alchemy.clicked5 == id) {
                player.Alchemy.clicked5 = 0
            }
            else {
                player.Alchemy.clicked5=player.Alchemy.clicked4
                player.Alchemy.clicked4 = player.Alchemy.clicked3
                player.Alchemy.clicked3 = player.Alchemy.clicked2
                player.Alchemy.clicked2 = player.Alchemy.clicked
            player.Alchemy.clicked = id
        }},
        getDisplay(data, id) {
            ""
             
        },
        getTitle(data, id) {
            let title =  player.Alchemy.idsToLayers[id]
            
            return title.replace("_"," ")
        },
        getUnlocked(id) {
            if (player.unlockedIds.includes(id)) {
                return id
            }
        },
        getStyle(data,id) {
            if (id == player.Alchemy.clicked || id ==player.Alchemy.clicked2 || id == player.Alchemy.clicked3 || id == player.Alchemy.clicked4 || id == player.Alchemy.clicked5) {
                return{
                "background-color":"green"
        }}
    else {
        return {
            "background-color":"red"
        }}
    }
    },
    clickables: {
        11: {
            title: "Merge",
            display() {return ""},
            canClick() {return true},
            style()
            {return {
            "background-color": "yellow"}},

        
        onClick() {
            elem1 = player.Alchemy.idsToLayers[player.Alchemy.clicked]
            elem2 = player.Alchemy.idsToLayers[player.Alchemy.clicked2]
            elem3 = player.Alchemy.idsToLayers[player.Alchemy.clicked3]
            elem4 = player.Alchemy.idsToLayers[player.Alchemy.clicked4]
            elem5 = player.Alchemy.idsToLayers[player.Alchemy.clicked5]
            var elems = 0
            if (elem1 != "null") {
                elems += 1
            }
            if (elem2 != "null") {
                elems += 1 
            }
            if (elem3 != "null") {
                elems +=1
            }
            if (elem4 != "null") {
                elems += 1
            }
            if (elem5 != "null") {
                elems += 1
            }
            
            for (var item of player.Alchemy.combinations) {
                
                
                if (item[1].includes(elem1) && item[1].includes(elem2) && item[1].length-1 == elems && item[1].includes(elem3) && item[1].includes(elem4) && item[1].includes(elem5)) {
                    player.unlocks[item[0]] = true
                    player.unlockedIds.push(player.Alchemy.layerIds[item[0]])
                    
                }
            }}},
        12: {
            title: "Hint",
            display() {return ""},
            canClick() {return true},
            style()
            {return {
            "background-color": "yellow"}},
            onClick() {
                for (let item in player.Alchemy.idsToLayers) {
                    item=Number(item)
                    
                    if (!player.unlockedIds.includes(item) && item != 0) {
                        temp = item
                        break
                    }
                }
                
                toFind = getKeyByValue(player.Alchemy.layerIds,temp)

                for (var item of player.Alchemy.combinations) {
                    if (item[0] == toFind) {
                    message = ""
                for (var text of item[1]) {
                    if (text != "null") {
                        message = message + text + "+"
                    }}
                    
                message = message + " ?"
                alert(message)
                }

                
                    

                }
            }

        },

            
        
    infoboxes: {
        intro: {
            title: "Alchemy",
            body() {return "Welcome to Bobbit's tech tree! Select elements and merge to unlock more on the tree. As you progress, you will unlock more features!"}
        }
    }},
    startData() { return {
        combinations: [[["L"],["Primordial_soup", "Core","null"]],[["Aa"],["Primordial_soup","null"]],[["N"],["Amino_acids", "Primordial_soup","null"]],[["Dna"],["Life","Primordial_soup","null"]],[["PC"],["DNA","Amino_acids","null"]], [['Nu'],['Prokaryotic_cells','DNA','null']], [['EC'],['Amino_acids','Prokaryotic_cells','Nucleus','null']], [['O'],['Eukaryotic_cells','null']], [['T'],['Eukaryotic_cells','Organisation','null']], [['Cy'],['Nutrients','Prokaryotic_cells','Organisation','null']], [['M'],['Nutrients','Cytoplasm','null']], [['BFS'],['Membrane','Tissue','null']], [['FF'],['Nutrients','Biological_Filtration_System','null']], [['S'],['Tissue','Organisation','Filtration_feeding','null']], [['Co'],['Organisation','Sponge','null']], [['BC'],['Nutrients','Organisation','null']], [['Tx'],['Biological_chemical','Coral','null']], [['Jf'],['Toxin','Coral','null']], [['Sw'],['Nutrients','Jellyfish','null']], [['F'],['Organisation','Swimming','null']], [['Air'],['Life','Biological_chemical','null']], [['Lu'],['Organisation','Biological_chemical','Fish','Air','null']], [['Am'],['Lungs','Fish','null']], [['Ogn'],['Biological_chemical','Organisation','Tissue','null']], [['Bl'],['Biological_chemical','Amphibian','null']], [['OS'],['Organisation','Blood','Organs','null']], [['CS'],['Lungs','Blood','Organ_system','null']], [['Mu'],['Organisation','Tissue','Circulatory_system','null']], [['R'],['Nutrients','Biological_chemical','Muscles','null']], [['NS'],['Organ_system','Receptor','null']], [['Br'],['Amphibian','Organs','Circulatory_system','Nervous_system','null']], [['Mlk'],['Nutrients','Blood','null']], [['MG'],['Milk','Organs','null']], [['Ma'],['Organisation','Amphibian','Blood','Mammary_glands','null']], [['P'],['Nutrients','Amphibian','null']], [['W'],['Primordial_soup','Air','null']], [['Ms'],['Nutrients','Plants','Water','null']], [['Gr'],['Organisation','Plants','Moss','null']], [['VP'],['Nutrients','Organisation','Grass','null']], [['Tr'],['Vascular_plants','null']], [['Pr'],['Trees','Mammal','null']], [['Arm'],['Nutrients','Primates','Muscles','null']], [['Ha'],['Arm','null']], [['Hu'],['Hands','Primates','Brain','null']]],
        
        layerIds: {"C": 101,"PS": 102,"L": 103,"Aa": 104,"N":105,"Dna":106,"PC":107,'Nu':108,'EC':109,'O':110,'T':201,'Cy':202,'M':203,'BFS':204,'FF':205,'S':206,'Co':207,'BC':208,'Tx':209,'Jf':210,'Sw':301,'F':302,'Air':303,'Lu':304,'Am':305,'Ogn':306,'Bl':307,'OS':308,'CS':309,'Mu':310,'R':401,'NS':402,'Br':403,'Mlk':404,'MG':405,'Ma':406,'P':407,'W':408,'Ms':409,'Gr':410,'VP':501,'Tr':502,'Pr':503,'Arm':504,'Ha':505,'Hu':506
    },
        
        clicked: 0,
        clicked2: 0,
        clicked3: 0,
        clicked4: 0,
        clicked5: 0,
        idsToLayers: {0: "null",101: "Core",102: "Primordial_soup",103: "Life",104: "Amino_acids",105: "Nutrients",106: "DNA",107: "Prokaryotic_cells",108:'Nucleus',109:'Eukaryotic_cells',110:'Organisation',201:'Tissue',202:'Cytoplasm',203:'Membrane',204:'Biological_Filtration_System',205:'Filtration_feeding',206:'Sponge',207:'Coral',208:'Biological_chemical',209:'Toxin',210:'Jellyfish',301:'Swimming',302:'Fish',303:'Air',304:'Lungs',305:'Amphibian',306:'Organs',307:'Blood',308:'Organ_system',309:'Circulatory_system',310:'Muscles',401:'Receptor',402:'Nervous_system',403:'Brain',404:'Milk',405:'Mammary_glands',406:'Mammal',407:'Plants',408:'Water',409:'Moss',410:'Grass',501:'Vascular_plants',502:'Trees',503:'Primates',504:'Arm',505:'Hands',506:'Human'
    },
        
    }},
    tabFormat: [
        ["infobox", "intro"],
        "grid",
        "clickables"
    ]
}),
addNode("L", {
    symbol: "life",
    canClick() {return true},
    row: 1,
    tooltip() {return "Chemicals turn into life"},
    branches: ["C"],
    layerShown() {return player.unlocks["L"]} 
})

addNode("Aa", {
    symbol: "Amino acids",
    canClick() {return true},
    row: 2,
    tooltip() {return "The building blocks of life"},
    branches: ["PS"],
    layerShown() {return player.unlocks["Aa"]} 
})
addNode("N", {
    symbol: "Nutrients",
    canClick() {return true},
    row: 3,
    tooltip() {return "To power life, chemicals come together."},
    branches: ["Aa"],
    layerShown() {return player.unlocks["N"]} ,
    nodeStyle:  {
        "font-size": "20px",
    }
})
addNode("Dna", {
    symbol: "DNA",
    canClick() {return true},
    row: 2,
    tooltip() {return "What makes life unique"},
    branches: ["PS","L"],
    layerShown() {return player.unlocks["Dna"]} 
})
addNode("PC", {
    symbol: "Prokaryotic cells",
    canClick() {return true},
    row: 3,
    tooltip() {return "Cells begin to take shape"},
    branches: ["Dna","Aa"],
    layerShown() {return player.unlocks["PC"]},
    nodeStyle:  {
        "font-size": "20px",
    } 
}),
addNode('Nu', {
	symbol: 'Nucleus',
	canClick() {return true},
	row: 4,
	tooltip() {return 'Organisation begins in cells'},
	branches: ['PC'],
	layerShown() {return player.unlocks['Nu']},
	nodeStyle: {
		'font-size': '20px',
	}
}),
addNode('EC', {
	symbol: 'Eukaryotic cells',
	canClick() {return true},
	row: 5,
	tooltip() {return 'Cells begin to develop'},
	branches: ['Nu'],
	layerShown() {return player.unlocks['EC']},
	nodeStyle: {
		'font-size': '20px',
	}
}),
addNode('O', {
	symbol: 'Organisation',
	canClick() {return true},
	row: 6,
	tooltip() {return 'Cells begin to come together to build something more'},
	branches: ['EC'],
	layerShown() {return player.unlocks['O']},
	nodeStyle: {
		'font-size': '20px',
	}
}),
addNode('T', {
	symbol: 'Tissue',
	canClick() {return true},
	row: 7,
	tooltip() {return 'A larger structure is formed out of cells'},
	branches: ['O'],
	layerShown() {return player.unlocks['T']},
	nodeStyle: {
		'font-size': '20px',
	}
}),
addNode('Cy', {
	symbol: 'Cytoplasm',
	canClick() {return true},
	row: 7,
	tooltip() {return 'Once simple cells are now beginning to become quite complex'},
	branches: ['O'],
	layerShown() {return player.unlocks['Cy']},
	nodeStyle: {
		'font-size': '20px',
	}
}),
addNode('M', {
	symbol: 'Membrane',
	canClick() {return true},
	row: 8,
	tooltip() {return 'Cells are beginning to control the substances around them'},
	branches: ['Cy'],
	layerShown() {return player.unlocks['M']},
	nodeStyle: {
		'font-size': '20px',
	}
}),
addNode('BFS', {
	symbol: 'Biological Filtration System',
	canClick() {return true},
	row: 9,
	tooltip() {return 'In order to make more complicated life forms, life must master the transportation of substances'},
	branches: ['M'],
	layerShown() {return player.unlocks['BFS']},
	nodeStyle: {
		'font-size': '20px',
	}
}),
addNode('FF', {
	symbol: 'Filtration feeding',
	canClick() {return true},
	row: 10,
	tooltip() {return 'More energy is required. Therefore, new ways need to be designed to maximise the energy received.'},
	branches: ['BFS'],
	layerShown() {return player.unlocks['FF']},
	nodeStyle: {
		'font-size': '20px',
	}
}),
addNode('S', {
	symbol: 'Sponge',
	canClick() {return true},
	row: 11,
	tooltip() {return 'Complex multicellular organisms can now be formed. '},
	branches: ['FF'],
	layerShown() {return player.unlocks['S']},
	nodeStyle: {
		'font-size': '20px',
	}
}),
addNode('Co', {
	symbol: 'Coral',
	canClick() {return true},
	row: 12,
	tooltip() {return 'The evolution of multicellular organisms begins'},
	branches: ['S'],
	layerShown() {return player.unlocks['Co']},
	nodeStyle: {
		'font-size': '20px',
	}
}),
addNode('BC', {
	symbol: 'Biological chemical',
	canClick() {return true},
	row: 7,
	tooltip() {return 'Life is beginning to generate its own materials'},
	branches: ['O'],
	layerShown() {return player.unlocks['BC']},
	nodeStyle: {
		'font-size': '20px',
	}
}),
addNode('Tx', {
	symbol: 'Toxin',
	canClick() {return true},
	row: 13,
	tooltip() {return 'Life is learning to defend itself'},
	branches: ['Co'],
	layerShown() {return player.unlocks['Tx']},
	nodeStyle: {
		'font-size': '20px',
	}
}),
addNode('Jf', {
	symbol: 'Jellyfish',
	canClick() {return true},
	row: 14,
	tooltip() {return 'Animals are now beginning to emerge'},
	branches: ['Tx'],
	layerShown() {return player.unlocks['Jf']},
	nodeStyle: {
		'font-size': '20px',
	}
}),
addNode('Sw', {
	symbol: 'Swimming',
	canClick() {return true},
	row: 15,
	tooltip() {return 'Life is now traversing all through the ocean'},
	branches: ['Jf'],
	layerShown() {return player.unlocks['Sw']},
	nodeStyle: {
		'font-size': '20px',
	}
}),
addNode('F', {
	symbol: 'Fish',
	canClick() {return true},
	row: 16,
	tooltip() {return 'The oceans has now exploded with a variety of different life!'},
	branches: ['Sw'],
	layerShown() {return player.unlocks['F']},
	nodeStyle: {
		'font-size': '20px',
	}
}),
addNode('Air', {
	symbol: 'Air',
	canClick() {return true},
	row: 8,
	tooltip() {return 'Life is now beginning to slowly influence the atmosphere'},
	branches: ['BC'],
	layerShown() {return player.unlocks['Air']},
	nodeStyle: {
		'font-size': '20px',
	}
}),
addNode('Lu', {
	symbol: 'Lungs',
	canClick() {return true},
	row: 17,
	tooltip() {return 'From gills to lungs, the land is in sight'},
	branches: ['F'],
	layerShown() {return player.unlocks['Lu']},
	nodeStyle: {
		'font-size': '20px',
	}
}),
addNode('Am', {
	symbol: 'Amphibian',
	canClick() {return true},
	row: 18,
	tooltip() {return 'Animals emerge onto land'},
	branches: ['Lu'],
	layerShown() {return player.unlocks['Am']},
	nodeStyle: {
		'font-size': '20px',
	}
}),
addNode('Ogn', {
	symbol: 'Organs',
	canClick() {return true},
	row: 8,
	tooltip() {return 'From cell to tissue to organ. Life is growing increasingly complex.'},
	branches: ['T', 'BC'],
	layerShown() {return player.unlocks['Ogn']},
	nodeStyle: {
		'font-size': '20px',
	}
}),
addNode('Bl', {
	symbol: 'Blood',
	canClick() {return true},
	row: 19,
	tooltip() {return 'Specialised liquids are now being made within the human body'},
	branches: ['Am'],
	layerShown() {return player.unlocks['Bl']},
	nodeStyle: {
		'font-size': '20px',
	}
}),
addNode('OS', {
	symbol: 'Organ system',
	canClick() {return true},
	row: 20,
	tooltip() {return 'One organ simply is not enough to control an entire general role of an organism. More organisation is required'},
	branches: ['Bl'],
	layerShown() {return player.unlocks['OS']},
	nodeStyle: {
		'font-size': '20px',
	}
}),
addNode('CS', {
	symbol: 'Circulatory system',
	canClick() {return true},
	row: 21,
	tooltip() {return 'To transport the necessary nutrients, vast structures are required'},
	branches: ['OS'],
	layerShown() {return player.unlocks['CS']},
	nodeStyle: {
		'font-size': '20px',
	}
}),
addNode('Mu', {
	symbol: 'Muscles',
	canClick() {return true},
	row: 22,
	tooltip() {return 'In order for life to move, many nutrients need to be transported'},
	branches: ['CS'],
	layerShown() {return player.unlocks['Mu']},
	nodeStyle: {
		'font-size': '20px',
	}
}),
addNode('R', {
	symbol: 'Receptor',
	canClick() {return true},
	row: 23,
	tooltip() {return 'Life now needs to learn to react to its environment'},
	branches: ['Mu'],
	layerShown() {return player.unlocks['R']},
	nodeStyle: {
		'font-size': '20px',
	}
}),
addNode('NS', {
	symbol: 'Nervous system',
	canClick() {return true},
	row: 24,
	tooltip() {return 'Organisms are now fully responsive to its environment. Next sentience?'},
	branches: ['R'],
	layerShown() {return player.unlocks['NS']},
	nodeStyle: {
		'font-size': '20px',
	}
}),
addNode('Br', {
	symbol: 'Brain',
	canClick() {return true},
	row: 25,
	tooltip() {return 'Thoughts, all though primitive, are emerging'},
	branches: ['NS'],
	layerShown() {return player.unlocks['Br']},
	nodeStyle: {
		'font-size': '20px',
	}
}),
addNode('Mlk', {
	symbol: 'Milk',
	canClick() {return true},
	row: 20,
	tooltip() {return 'Organisms can now produce substances to feed their young'},
	branches: ['Bl'],
	layerShown() {return player.unlocks['Mlk']},
	nodeStyle: {
		'font-size': '20px',
	}
}),
addNode('MG', {
	symbol: 'Mammary glands',
	canClick() {return true},
	row: 21,
	tooltip() {return 'Yes, THAT body part'},
	branches: ['Mlk'],
	layerShown() {return player.unlocks['MG']},
	nodeStyle: {
		'font-size': '20px',
	}
}),
addNode('Ma', {
	symbol: 'Mammal',
	canClick() {return true},
	row: 22,
	tooltip() {return 'Life is climbing up the ladder of scentience'},
	branches: ['MG'],
	layerShown() {return player.unlocks['Ma']},
	nodeStyle: {
		'font-size': '20px',
	}
}),
addNode('P', {
	symbol: 'Plants',
	canClick() {return true},
	row: 19,
	tooltip() {return 'Evolving alongside animals, plants progress'},
	branches: ['Am'],
	layerShown() {return player.unlocks['P']},
	nodeStyle: {
		'font-size': '20px',
	}
}),
addNode('W', {
	symbol: 'Water',
	canClick() {return true},
	row: 9,
	tooltip() {return 'From being surrounded to it to having to seek it. Water is still essential.'},
	branches: ['Air'],
	layerShown() {return player.unlocks['W']},
	nodeStyle: {
		'font-size': '20px',
	}
}),
addNode('Ms', {
	symbol: 'Moss',
	canClick() {return true},
	row: 20,
	tooltip() {return 'Plants claim land'},
	branches: ['P'],
	layerShown() {return player.unlocks['Ms']},
	nodeStyle: {
		'font-size': '20px',
	}
}),
addNode('Gr', {
	symbol: 'Grass',
	canClick() {return true},
	row: 21,
	tooltip() {return 'Slowly but surely, plants advance upwards'},
	branches: ['Ms'],
	layerShown() {return player.unlocks['Gr']},
	nodeStyle: {
		'font-size': '20px',
	}
}),
addNode('VP', {
	symbol: 'Vascular plants',
	canClick() {return true},
	row: 22,
	tooltip() {return 'Like animals, plants grows in complexity'},
	branches: ['Gr'],
	layerShown() {return player.unlocks['VP']},
	nodeStyle: {
		'font-size': '20px',
	}
}),
addNode('Tr', {
	symbol: 'Trees',
	canClick() {return true},
	row: 23,
	tooltip() {return 'Plants are now towering above all other life forms.'},
	branches: ['VP'],
	layerShown() {return player.unlocks['Tr']},
	nodeStyle: {
		'font-size': '20px',
	}
}),
addNode('Pr', {
	symbol: 'Primates',
	canClick() {return true},
	row: 24,
	tooltip() {return 'Life begins to close in on humanity'},
	branches: ['Tr'],
	layerShown() {return player.unlocks['Pr']},
	nodeStyle: {
		'font-size': '20px',
	}
}),
addNode('Arm', {
	symbol: 'Arm',
	canClick() {return true},
	row: 25,
	tooltip() {return 'Living in the trees causes limbs to develop'},
	branches: ['Pr'],
	layerShown() {return player.unlocks['Arm']},
	nodeStyle: {
		'font-size': '20px',
	}
}),
addNode('Ha', {
	symbol: 'Hands',
	canClick() {return true},
	row: 26,
	tooltip() {return 'Nearly there...'},
	branches: ['Arm'],
	layerShown() {return player.unlocks['Ha']},
	nodeStyle: {
		'font-size': '20px',
	}
}),
addNode('Hu', {
	symbol: 'Human',
	canClick() {return true},
	row: 27,
	tooltip() {return 'The destination of life or just the beginning?'},
	branches: ['Ha'],
	layerShown() {return player.unlocks['Hu']},
	nodeStyle: {
		'font-size': '20px',

	},
    color() {return "orange"}
})