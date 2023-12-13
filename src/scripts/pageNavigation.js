import { showResponsiveMenu } from "./responsiveMenu.js"

async function scrollToSection(ev) {
    if (ev.type === 'touchstart') ev.preventDefault()

    let headerHeight = 95 // header size
    let rect = ''
    let offset = 0
    const currentTargetElement = ev.currentTarget
    switch (ev.currentTarget.innerText) {
    // timeout used to overflow the bootstrap auto scroll
        case 'Início': // travel to start-block
           const startBlock = document.getElementById('start-block')
           rect = startBlock.getBoundingClientRect()
           offset = rect.top - headerHeight
           setTimeout(() => scrollToOffset(offset), 50);
        break;
        case 'Tecnologias': // travel to techs-block
           const techsBlock = document.getElementById('techs-block')
           rect = techsBlock.getBoundingClientRect()
           offset = rect.top - headerHeight
           setTimeout(() => scrollToOffset(offset), 50);
        break;
        case 'Projetos': // travel to projects-block
           const projectsBlock = document.getElementById('projects-block')
           rect = projectsBlock.getBoundingClientRect()
           offset = rect.top - headerHeight
           setTimeout(() => scrollToOffset(offset), 50);
        break;
        case 'Contato': // travel to contact-block
           const contactBlock = document.getElementById('contact-block')
           rect = contactBlock.getBoundingClientRect()
           offset = rect.top - headerHeight
           setTimeout(() => scrollToOffset(offset), 50);
        break;
    }
    
    setTimeout(() => {
        if(!document.querySelector('.nav-link.active')){
            currentTargetElement.classList.add('active')
        }

        document.querySelector('.nav-link.active').classList.remove('active')
        currentTargetElement.classList.add('active') // solve conflicts with bootsrap
        
        if(window.innerWidth >=1024) return
        document.querySelector('#main-navbar').classList.toggle('actived') // close the menu
        document.querySelector('#main-navbar.actived') ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto' // enable scroll again
    }, 500);
 
}

function scrollToOffset (offset) { // scroll style
    window.scrollBy({
        top: offset,
        behavior: 'smooth',
    })
    return
}

function goToTechBlock(ev){
    if(ev.type === 'touchstart') ev.preventDefault()

    const techsBlock = document.getElementById('techs-block')
    let rect = techsBlock.getBoundingClientRect()
    let offset = rect.top - 90
    setTimeout(() => scrollToOffset(offset), 50);
}

function goToContactBlock(ev){
    if(ev.type === 'touchstart') ev.preventDefault()
    const techsBlock = document.getElementById('contact-block')
    let rect = techsBlock.getBoundingClientRect()
    let offset = rect.top - 100
    setTimeout(() => scrollToOffset(offset), 100);
}

export async function addScroll(){
    const menu_itens = document.querySelectorAll('#main-navbar > .navbar-nav > .nav-item > .nav-link')
    menu_itens.forEach(element =>{
        element.addEventListener('click', scrollToSection)
        element.addEventListener('touchstart', scrollToSection)
    })
    document.getElementById('contact-me-button').addEventListener('click', goToContactBlock)
    document.getElementById('contact-me-button').addEventListener('touchstart', goToContactBlock)

    document.getElementById('down-arrow').addEventListener('click', goToTechBlock)
    document.getElementById('down-arrow').addEventListener('touchstart', goToTechBlock)

}