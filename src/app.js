const rockbtn=document.querySelector('.rock-btn')
const paperbtn=document.querySelector('.paper-btn')
const scissorsbtn=document.querySelector('.scissors-btn')
const result=document.getElementById('result')
const userscore=document.querySelector('.userscore')
const compscore=document.querySelector('.computerscore')
const reset=document.querySelector('.reset-btn')
const usechoice=document.querySelector('.user-choice')
const compchoice=document.querySelector('.comp-choice')
const wincard=document.querySelector('.win-card')
const loosecard=document.querySelector('.loose-card')

const clickSound = new Audio("./sound/select sfx 5.mp3")
const winsound= new Audio("./sound/level-passed-143039.mp3")
const loosesound =new Audio("./sound/Losing Sound Effect Game.mp3")

let myscore=0
let computerscore=0
let flag =false

function playgame(userchoice){

    if(flag){
        return
    }
    clickSound.currentTime=0
    clickSound.play()
    
    let computerchoice

    let random= Math.floor(Math.random()*3)

switch(random){
    case 0 :
        computerchoice='rock'
        compchoice.textContent='✊'
        break;
    case 1 :
        computerchoice='paper'
        compchoice.textContent='✋'
        break;
    case 2 :
        computerchoice='scissors'
        compchoice.textContent='✌️'
        break;
}

switch(userchoice){
    case 'rock':
        usechoice.textContent='✊'
        break;
    case 'paper':
        usechoice.textContent='✋'
        break;
    case 'scissors':
        usechoice.textContent='✌️' 
        break;       
}

if(userchoice == computerchoice){
    result.textContent = "🤝 Draw!"
}else if((userchoice == 'rock' && computerchoice == 'scissors')
    || (userchoice == 'paper' && computerchoice == 'rock')
    ||(userchoice == 'scissors' && computerchoice == 'paper')
){
        myscore++
        userscore.textContent =myscore
        result.textContent="🎉 You Win!"

}else{
    computerscore++
    compscore.textContent=computerscore
    result.textContent = "🤖 Computer Wins!"
}


if(computerscore == 3){
    result.textContent='game over'
    loosecard.classList.remove('scale-0')
    loosecard.classList.add('scale-100')
    loosesound.play()
    flag=true
}else if(myscore == 3){
    result.textContent='you win'
    wincard.classList.remove('scale-0')
    wincard.classList.add('scale-100')
    winsound.play()
    flag=true
}
}

function resetgame(){
 myscore=0
 computerscore=0
 flag =false
 result.textContent='Waiting...'
 compscore.textContent='0'
 userscore.textContent='0'
 usechoice.textContent='❔'
compchoice.textContent='❔'
wincard.classList.remove('scale-100')
wincard.classList.add('scale-0')

loosecard.classList.remove('scale-100')
loosecard.classList.add('scale-0')
}