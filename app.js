var arr = [];
var startingPlayer;
var cpuWins, playerWins = 0;

function getBoard() {
    for(i = 0; i < 9; i++) {
        arr.push(false);
    }
    console.log('Board init ==> ' + arr);
}

function move(type, cell) {
    if(arr[cell] != false) { return console.log('already used cell') };
    type.toLowerCase() === 'o' || type.toLowerCase() === 'x' ? arr[cell] = type : console.log('wrong type');
    cell > 8 || cell < 0 ? console.log('cell not in range 0-8') : console.log('Current array => ' + arr);
    }

function startingPlayer() {
    var number = Math.floor(Math.random() * 2);
    number === 0 ? startingPlayer = 'CPU' : startingPlayer = 'Player';
    console.log(startingPlayer);
}

function getCounter() {};
function gameEngine() {};

function init() {
    //getCounter();
    getBoard()
    startingPlayer();
    if(startingPlayer = 'CPU') { gameEngine() }  
}

init();
move('o',2);
move('Y',5);
move('x',1);
move('x',3);
move('x',3);
move('x',3);

// pick 'o' or 'x' for CPU randomise pick and Player get the other option - at init stage
// refactor to pick 'o' or 'x' allocated to a given side of match not to fix i.e. 'o' to Player, 'x' to CPU
// init Player, CPU objects? i.e. CPU chosen sign 'o', number of cpuWins, 

// winningOptions = ['012', '345', '678', '036', '147', '258', '048', '246']

/*
if CPU starts => randomise first move i.e [2]
    Player make a move - all allowed but [2] - i.e. [0]
        CPU makes a second move based on already chosen cell i.e [2] => pick winning options to include number 2 and cannot be NOT false in combo (so 012 not an option as 0 chosen by player) => '258', '246'
        CPU takes options length and randomise - pick 1 => option '246' => randomise between (already taken) 4 & 6 => 6 
            Player makes a move i.e. [3]
                CPU checks potential winning options of Player if one x/o away from winning and blocks player
                CPU can add final x/o to complete [4] => game over
                ...
                CPU cannot do any of own winning combos => pick a random cell left, which is still false
                ...
                Game continues if there are still falses => no Winner before all cells used => DRAW => Probably first check to do each move?
                    var ar = [1,2,3,false] => still false in board array => ar.indexOf(false) => 3 meaning there is still false
                    var ar = [1,2,3,] => no false in array => ar.indexOf(false) => -1 meaning no falses
                    So until ar.indexOf(false) > 0 meaning there are still falses in arr
    ...
    somewhere to add counter when game finished -> changing player, cpu objects
    var cpu = {
        wins: 0,
        tick: null
    }
    
    var player = {
        wins: 0,
        tick: null
    }
    var options ['o', 'x']
    after each win => cpu.wins++ OR player.wins++
    when randomized o/x by CPU or player chose o/x 

    CPU wins first move
        randomise 0,1 => 0 => 'o' option from table => set cpu.tick = [randomisedNumber]; options.pop(); set player.tick = options[0]; restart options table - can be sepearate initOX();

*/