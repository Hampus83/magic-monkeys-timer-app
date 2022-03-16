const loadingElem = document.querySelector('.loading-timer')
const setTimerElem= document.querySelector('.set-timer')
const abortBtn = document.querySelectorAll('abort');
const allPages = document.querySelectorAll('article');
const analogMenu = document.querySelector('#analog_menu');
const digitalMenu = document.querySelector('#digital_menu');
const visualMenu = document.querySelector('#visual_menu');
const textMenu = document.querySelector('#text_menu');
const circlesMenu = document.querySelector('#circles_menu')
const menuElem = document.querySelector('.menu-timer');
const menuBTN = document.querySelectorAll('.menu-btn');
let menuChoice = ""

hideAll()
loadingElem.classList.remove('hidden')

loadingElem.addEventListener('click', ()=> {
hideAll();
setTimerElem.classList.remove('hidden')
})





function hideAll(){
    for (let i = 0; i < allPages.length; i++) {
        const article = allPages[i];
        article.classList.add('hidden')
    }
}


//MENY LOGIK

for (let i = 0; i < menuBTN.length; i++) {
    const btn = menuBTN[i];
    btn.addEventListener('click',()=>{
        menuElem.classList.remove('hidden');
    })   
}


///menyval
analogMenu.addEventListener('click',()=>
{menuChoice= "analog";
console.log(menuChoice)
menuElem.classList.add('hidden');
}
)

digitalMenu.addEventListener('click',()=>
{menuChoice= "digital";
console.log(menuChoice)
menuElem.classList.add('hidden');
})

visualMenu.addEventListener('click',()=>
{menuChoice= "visual";
console.log(menuChoice)
menuElem.classList.add('hidden');
})

textMenu.addEventListener('click',()=>
{menuChoice= "text";
console.log(menuChoice)
menuElem.classList.add('hidden');
})

circlesMenu.addEventListener('click',()=>
{menuChoice= "circle";
console.log(menuChoice)
menuElem.classList.add('hidden');
})
////
