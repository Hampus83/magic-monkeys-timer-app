const loadingElem = document.querySelector('.loading-timer')
const setTimerElem= document.querySelector('.set-timer')
const startTimerBtn= document.getElementById('start-timer')
const abortBtn = document.querySelectorAll('.abort');
const analogMenu = document.querySelector('#analog_menu');
const digitalMenu = document.querySelector('#digital_menu');
const visualMenu = document.querySelector('#visual_menu');
const textMenu = document.querySelector('#text_menu');
const circlesMenu = document.querySelector('#circles_menu')
const menuElem = document.querySelector('.menu-timer');
const menuBTN = document.querySelectorAll('.menu-btn');
const timeIsUpElem = document.querySelector('.alarm-timer');
//OANVÄNDA
const allPages = document.querySelectorAll('article');
const analogPage = document.querySelector('.analog-timer');
const digitalPage = document.querySelector('.digital-timer');
const visualPage = document.querySelector('.visual-timer');
const textPage = document.querySelector('.text-timer');
const ringPage = document.querySelector('.ring-timer');
//

let menuChoice = ".analog-timer"

import { startTimer, restart } from './modules/easytimer.min.js'

hideAll()
function hideAll(){
    for (let i = 0; i < allPages.length; i++) {
        const article = allPages[i];
        article.classList.add('hidden');
    }
}
loadingElem.classList.remove('hidden')


loadingElem.addEventListener('click', ()=> {
    restart();
})


for (let i = 0; i < abortBtn.length; i++) {
    const singleAbortBtn = abortBtn[i];
    singleAbortBtn.addEventListener('click', ()=> {
        restart();
    }) 
}


//MENY LOGIK

for (let i = 0; i < menuBTN.length; i++) {
    const btn = menuBTN[i];
    btn.addEventListener('click',()=>{
        menuElem.classList.remove('hidden');
    })   
}


///menyval kanske göra en forloop istället????
analogMenu.addEventListener('click',()=>
{menuChoice = ".analog-timer";
menuElem.classList.add('hidden');
})

digitalMenu.addEventListener('click',()=>
{menuChoice= ".digital-timer";
menuElem.classList.add('hidden');
})

visualMenu.addEventListener('click',()=>
{menuChoice= ".visual-timer";
menuElem.classList.add('hidden');
})

textMenu.addEventListener('click',()=>
{menuChoice= ".text-timer";
menuElem.classList.add('hidden');
})

circlesMenu.addEventListener('click',()=>
{menuChoice= ".ring-timer";
menuElem.classList.add('hidden');
})
////

// callfunktion för när tiden är ute!
function timeisup(){
    hideAll();
    timeIsUpElem.classList.remove('hidden');
}

startTimerBtn.addEventListener('click', ()=> {
    startTimer();
    setTimerElem.classList.add('hidden');
    document.querySelector(`${menuChoice}`).classList.remove('hidden');
})

export { timeisup, hideAll };