let input = document.querySelector('.input'),
    button = document.querySelector('.btn'),
    timeOut = document.querySelector('.time'),
    block = document.querySelector('.block'),
    time = 0,
    score = 0,
    interval = 0,
    result;

button.addEventListener('click', function(event) {
    event.preventDefault();
    if(input.value != '') {
        time = input.value;
        input.value = '';
        score = 0;
        clearInterval(interval);
        startGame();
        result = document.querySelector('.result');
        block.removeChild(result);
    }
})

block.addEventListener('click', function(event) {
    if(event.target.classList.contains('circle')) {
        score++
        event.target.remove();
        createBall();
    }
})

function startGame() {
    interval = setInterval(() => decreaseTime(), 1000);
    createBall();
}

function decreaseTime() {
    if(time == 0) {
        endGame();
    }else {
        let currentTime = --time;
        if(currentTime < 10) {
            currentTime = `0${currentTime}`
        }
        timeOut.innerHTML = `00:${currentTime}`;

    }
}

function endGame() {
    block.innerHTML = `<h1 class="result">Ваш результат: <span>${score}</span></h1>`
}


function color(){
    return(random(0,256));
}

function sizeBall(){
    return(random(10,60))
}


function createBall () {
    let element = document.createElement('div');
    let info = block.getBoundingClientRect();
    let size = 50;
    let x = random(0, info.width - size);
    let y = random(0, info.height - size);
    
    element.style.width = sizeBall() + 'px';
    element.style.height = sizeBall() + 'px';
    element.style.top = y + 'px';
    element.style.left = x + 'px';
    element.style.background = `rgb(${color()},${color()},${color()})`;
    element.classList.add('circle');
    block.append(element);
}
function random (min,max) {
    return Math.floor(Math.random() * (max + 1 - min ) + min);
}