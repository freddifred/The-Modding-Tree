let modInfo = {
	name: "Bobbit's Tech Tree",
	id: "mymod",
	author: "Bobbitibob",
	pointsName: "",
	modFiles: ["layers.js", "tree.js"],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (0), // Used for hard resets and new players
	offlineLimit: 1,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.1",
	name: "Life to human",
}

let changelog = `<h1>Changelog:</h1><br>
	<h3>v0.1</h3><br>
		- Added content up to humans.<br>
		`

let winText = `Congratulations! You have reached the end and beaten this game, but for now...`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    
}

// Determines if it should show points/sec
function canGenPoints(){
	return false
}

// Calculate points/sec!



// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
	col: "red",
	showAlchemy: "ghost",
	showPS: "ghost",
	
	 
	
	unlockedIds : [101],
	unlockedElems: ["Core"],
	unlocks: {"L": false,"PS": false,"N": false,"Dna": false,"PC": false,'Nu': false,'Nu': false,'Nu': false,'Nu': false,'Nu': false,'Nu': false,'Nu': false,'EC': false,'O': false,'T': false,'Cy': false,'M': false,'T': false,'T': false,'Cy': false,'M': false,'BFS': false,'FF': false,'S': false,'Co': false,'BC': false,'Tx': false,'Jf': false,'Sw': false,'F': false,'Air': false,'Lu': false,'Am': false,'Ogn': false,'Bl': false,'OS': false,'CS': false,'Mu': false,'R': false,'NS': false,'Br': false,'Mlk': false,'MG': false,'Ma': false,'P': false,'W': false,'Ms': false,'Gr': false,'VP': false,'Tr': false,'Pr': false,'Arm': false,'Ha': false,'Hu': false
	}
}}

// Display extra things at the top of the page
var displayThings = [
]

// Determines when the game "ends"
function isEndgame() {
	return player.points.gte(new Decimal("e280000000"))
}



// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}