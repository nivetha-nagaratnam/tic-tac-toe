//constants

const choices = {
    'null': ' ',
    '1': 'X',
    '-1': 'O'
};

//This is this winning combination of tic-tac-toe
const arrayWins = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
];

// Variables

let board = [];
let turn = 0;
let winner = 0;
let tie = 0;

//cached element references 

const squares = document.querySelector('.board')
const resetButton = document.getElementById('button')
const alert = document.querySelector('h2')

//event listeners

squares.addEventListener('click', squareClicked)

resetButton.addEventListener('click', init)

//Functions

init();

function render(){
    board.forEach(function(box, index) {
        document.getElementById(index).textContent = choices[box];
    if(winner === 1) {
        alert.innerHTML = `Winner ${choices[winner]}`;
        
    } else if(winner === -1) {
        alert.innerHTML = `Winner ${choices[winner]}`;
      
    } else if (tie !== 0) {
        alert.innerHTML =  'Tie';
    } else {
        alert.innerHTML = `Player ${choices[turn]}'s turn`;
    }
    
    })
}

function squareClicked(evt){
    if(board[evt.target.id] === 0){
    board[evt.target.id] = turn;
    turn = turn * -1;
    } else {
        alert('I am taken choose another spot');
    }
    lookForWinner()
    render()

    
}

function lookForWinner(){
    for (i=0; i<arrayWins.length; i++){
        if (board[arrayWins[i][0]]=== board[arrayWins[i][1]]
            && board[arrayWins[i][1]]=== board[arrayWins[i][2]] 
            && board[arrayWins[i][0]]!== 0){
                winner = board[arrayWins[i][0]]
            }
            
        } 
        if (board.includes(0)) return;
        tie = 1;

    }

function init(){
    board = [0,0,0,0,0,0,0,0,0];
    turn = -1;
    winner = 0;
    tie = 0;
    render()
    }



