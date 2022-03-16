const abortBtn = document.querySelectorAll('abort');
const allPages = document.querySelectorAll('article');
const analogMenu = document.querySelector('#analog_menu');
const digitalMenu = document.querySelector('#digital_menu');
const visualMenu = document.querySelector('#visual_menu');
const textMenu = document.querySelector('#text_menu');
const circlesMenu = document.querySelector('#circles_menu')
const menuElem = document.querySelector('.menu-timer');
let menuChoice = ""






function hideAll(){
    for (let i = 0; i < allPages.length; i++) {
        const article = allPages[i];
        article.classList.add('hidden')
    }
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