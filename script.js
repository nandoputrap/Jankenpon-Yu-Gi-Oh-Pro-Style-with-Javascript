// Computer choice
function getComputerChoice() {
    const computer = Math.random();
    if (computer < 0.34) return 'rock';
    if (computer > 0.34 && computer < 0.67) return 'paper';
    return 'scissors';
}

// Rule of game
function getResult(player, computer) {
    const win = 'Player win!';
    const lose = 'Player lose!';
    if (player === computer) return 'Draw';
    if (player == 'rock' && computer == 'scissors') return win;
    if (player == 'rock' && computer == 'paper') return lose;
    if (player == 'scissors' && computer == 'paper') return win;
    if (player == 'scissors' && computer == 'rock') return lose;
    if (player == 'paper' && computer == 'rock') return win;
    if (player == 'paper' && computer == 'scissors') return lose;
}

function showRock() {

    const jankenponPlayer = document.querySelector('.jankenpon-player');
    jankenponPlayer.remove();
    const playerArea = document.querySelector('#player-area');

    const newArea = document.createElement('div');
    const attArea = document.createAttribute('class');
    attArea.value = 'jankenpon-player text-center';
    newArea.setAttributeNode(attArea);

    playerArea.appendChild(newArea);

    const getNewArea = document.querySelector('.jankenpon-player');
    const playerResult = document.createElement('img');
    playerResult.setAttribute('class', 'move-up');
    playerResult.src = 'img/rock.jpg';
    const status = document.createElement('p');
    status.setAttribute('class', 'text-center mt-3 move-up');
    status.textContent = 'Player';

    getNewArea.appendChild(playerResult);
    getNewArea.appendChild(status);

}

function showPaper() {

    const jankenponPlayer = document.querySelector('.jankenpon-player');
    jankenponPlayer.remove();
    const playerArea = document.querySelector('#player-area');

    const newArea = document.createElement('div');
    const attArea = document.createAttribute('class');
    attArea.value = 'jankenpon-player text-center';
    newArea.setAttributeNode(attArea);

    playerArea.appendChild(newArea);

    const getNewArea = document.querySelector('.jankenpon-player');
    const playerResult = document.createElement('img');
    playerResult.setAttribute('class', 'move-up');
    playerResult.src = 'img/paper.jpg';
    const status = document.createElement('p');
    status.setAttribute('class', 'text-center mt-3 move-up');
    status.textContent = 'Player';

    getNewArea.appendChild(playerResult);
    getNewArea.appendChild(status);


}

function showScissors() {

    const jankenponPlayer = document.querySelector('.jankenpon-player');
    jankenponPlayer.remove();
    const playerArea = document.querySelector('#player-area');

    const newArea = document.createElement('div');
    const attArea = document.createAttribute('class');
    attArea.value = 'jankenpon-player text-center';
    newArea.setAttributeNode(attArea);

    playerArea.appendChild(newArea);

    const getNewArea = document.querySelector('.jankenpon-player');
    const playerResult = document.createElement('img');
    playerResult.setAttribute('class', 'move-up');
    playerResult.src = 'img/scissors.jpg';
    const status = document.createElement('p');
    status.setAttribute('class', 'text-center mt-3 move-up');
    status.textContent = 'Player';

    getNewArea.appendChild(playerResult);
    getNewArea.appendChild(status);



}


const playerRock = document.querySelector('.rock');
playerRock.addEventListener('click', function () {
    const playerChoice = playerRock.id;
    const computerChoice = getComputerChoice();
    const result = getResult(playerChoice, computerChoice);
    console.log('Player : ' + playerChoice);
    console.log('Computer : ' + computerChoice);
    console.log(result);
    showRock();
    // showComputerResult();
    const jankenponComputer = document.querySelector('.jankenpon-computer');
    const computerResult = document.createElement('img');
    computerResult.setAttribute('class', 'move-down');
    computerResult.src = 'img/' + computerChoice + '.jpg';
    const status = document.createElement('p');
    status.setAttribute('class', 'text-center mt-3 move-down');
    status.textContent = 'Computer';
    jankenponComputer.appendChild(computerResult);
    jankenponComputer.appendChild(status);
    // showTextResult();
    const jankenponInfo = document.querySelector('.jankenpon-info');
    const infoResult = document.createElement('p');
    infoResult.setAttribute('class', 'text-center mt-3 h1 result');
    infoResult.textContent = result;
    jankenponInfo.appendChild(infoResult);

});

const playerPaper = document.querySelector('.paper');
playerPaper.addEventListener('click', function () {
    const playerChoice = playerPaper.id;
    const computerChoice = getComputerChoice();
    const result = getResult(playerChoice, computerChoice);
    console.log('Player : ' + playerChoice);
    console.log('Computer : ' + computerChoice);
    console.log(result);
    showPaper();
    // showComputerResult();
    const jankenponComputer = document.querySelector('.jankenpon-computer');
    const computerResult = document.createElement('img');
    computerResult.setAttribute('class', 'move-down');
    computerResult.src = 'img/' + computerChoice + '.jpg';
    const status = document.createElement('p');
    status.setAttribute('class', 'text-center mt-3 move-down');
    status.textContent = 'Computer';
    jankenponComputer.appendChild(computerResult);
    jankenponComputer.appendChild(status);
    // showTextResult();
    const jankenponInfo = document.querySelector('.jankenpon-info');
    const infoResult = document.createElement('p');
    infoResult.setAttribute('class', 'text-center mt-3 h1 result');
    infoResult.textContent = result;
    jankenponInfo.appendChild(infoResult);
});

const playerScissors = document.querySelector('.scissors');
playerScissors.addEventListener('click', function () {
    const playerChoice = playerScissors.id;
    const computerChoice = getComputerChoice();
    const result = getResult(playerChoice, computerChoice);
    console.log('Player : ' + playerChoice);
    console.log('Computer : ' + computerChoice);
    console.log(result);
    showScissors();
    // showComputerResult();
    const jankenponComputer = document.querySelector('.jankenpon-computer');
    const computerResult = document.createElement('img');
    computerResult.setAttribute('class', 'move-down');
    computerResult.src = 'img/' + computerChoice + '.jpg';
    const status = document.createElement('p');
    status.setAttribute('class', 'text-center mt-3 move-down');
    status.textContent = 'Computer';
    jankenponComputer.appendChild(computerResult);
    jankenponComputer.appendChild(status);
    // showTextResult();
    const jankenponInfo = document.querySelector('.jankenpon-info');
    const infoResult = document.createElement('p');
    infoResult.setAttribute('class', 'text-center mt-3 h1 result');
    infoResult.textContent = result;
    jankenponInfo.appendChild(infoResult);
});