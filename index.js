const abortBtn = document.querySelectorAll('abort');
const allPages = document.querySelectorAll('article');











function hideAll(){
    for (let i = 0; i < allPages.length; i++) {
        const article = allPages[i];
        article.classList.add('hidden')
    }
}