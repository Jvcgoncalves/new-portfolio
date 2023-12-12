export async function addResponsiveMenuFunctions(){
  document.querySelector('#responsive-menu').addEventListener('click',showResponsiveMenu)
  document.querySelector('#responsive-menu').addEventListener('touchstart',showResponsiveMenu)
  console.log(document.querySelector('#main-navbar'))

}

export function showResponsiveMenu(ev){
  if(ev.type === 'touchstart') ev.preventDefault()

  document.querySelector('#main-navbar').classList.toggle('actived')
  
  document.querySelector('#main-navbar.actived') ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto' // disable body scroll while the menu are open
  
}