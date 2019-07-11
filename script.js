var userScore = 0;
var computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const result_div = document.querySelector('.result > p');

const choice_div = document.querySelectorAll('.choice');



function main(){
    choice_div.forEach((choices)=>{
        choices.addEventListener('click',function(){

           game(this.id);

        });
    });
}

function game(myChoice){
    result_div.innerHTML = '';
    const computerChoice = getComputerChoice();
    getwinner(myChoice, computerChoice);
}

function getwinner(myChoice, computerChoice){
    const decision = myChoice + computerChoice;

    if(decision == 'pr' || decision == 'sp' || decision == 'rs'){
        return win(ConvertWords(myChoice), ConvertWords(computerChoice));
    }else if(decision == 'pp' || decision == 'ss' || decision == 'rr'){
        return tie(ConvertWords(myChoice), ConvertWords(computerChoice));
    }
        return lose(ConvertWords(myChoice), ConvertWords(computerChoice));
    
}

function win(myChoice,computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;

    result_div.innerHTML = myChoice + ' Beats ' + computerChoice + '. You WIN!';
}

function tie(myChoice,computerChoice){
    result_div.innerHTML = 'DRAW';
}

function lose(myChoice,computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    
    result_div.innerHTML = myChoice + ' loses to ' + computerChoice + '. You LOSE!';
}

function ConvertWords(letter){
    if(letter === 'r'){
        return 'Rock';
    }else if(letter === 'p'){
        return 'Paper';
    }
    
    return 'Scissors';
}


function getComputerChoice(){
    const choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}




main();