// G-MAIL //
const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const regExp = /\w@gmail.com$/
gmailButton.addEventListener('click', () => {
    if (regExp.test(gmailInput.value)){
        gmailResult.innerHTML = 'ok'
        gmailResult.style.color = 'green'
    }else {
        gmailResult.innerHTML = 'not ok'
        gmailResult.style.color = 'red'
    }
})


//MOVE BLOCK
const childBlock = document.querySelector('.child_block')
const parentBlock = document.querySelector('.parent_block')


let positionX = 0;
let positionY = 0;
const parentWidthFree = 449;
const moveSpeedChildBlock = 1;
const moveBlock = () => {
    if(positionX < parentWidthFree && positionY === 0){
        positionX++
        childBlock.style.left = `${positionX}px`
    }else if(positionX >= parentWidthFree && positionY < parentWidthFree ){
        positionY++
        childBlock.style.top = `${positionY}px`
    }else if(positionX > 0 && positionY === parentWidthFree){
        positionX--;
        childBlock.style.left = `${positionX}px`
    }else if (positionX === 0 && positionY > 0) {
        positionY--;
        childBlock.style.top = `${positionY}px`
    }
    setTimeout(moveBlock, moveSpeedChildBlock);
}
moveBlock();


const zero = document.getElementById('seconds')
const stopButton = document.getElementById('stop')
const resetButton = document.getElementById('reset')
const startButton = document.getElementById('start')
const timeBlock = document.getElementsByClassName( 'time_block')
let count = 0
let interval

const stopwatch = () => {
    count++
    zero.innerHTML = count
}

startButton.addEventListener('click', () => {
    clearInterval(interval)
    interval = setInterval(stopwatch, 1000)

})
stopButton.addEventListener('click', () => {
    clearInterval(interval)
})
resetButton.addEventListener('click', () => {
    clearInterval(interval)
    count = 0
    zero.innerHTML = '0'
})


