let team1Score = document.getElementById("team1-score");
let team2Score = document.getElementById("team2-score");

let team1ScoreValue = 0;
let team2ScoreValue = 0;


function add1ToTeam1() {
    team1ScoreValue += 1;
    team1Score.textContent = team1ScoreValue;    
}

function add2ToTeam1() {
    team1ScoreValue += 2;
    team1Score.textContent = team1ScoreValue;
}

function add3ToTeam1() {
    team1ScoreValue += 3;
    team1Score.textContent = team1ScoreValue;
}

function add1ToTeam2() {
    team2ScoreValue += 1;
    team2Score.textContent = team2ScoreValue;
}

function add2ToTeam2() {
    team2ScoreValue += 2;
    team2Score.textContent = team2ScoreValue;
}   

function add3ToTeam2() {
    team2ScoreValue += 3;
    team2Score.textContent = team2ScoreValue;
}

function resetScore() {
    team1ScoreValue = 0;
    team2ScoreValue = 0;
    team1Score.textContent = 0;
    team2Score.textContent = 0;
}