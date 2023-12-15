export async function addCopyNumberFunction(){
  document.querySelector('button#copy-number-button').addEventListener('touchstart', copyNumber)
  document.querySelector('button#copy-number-button').addEventListener('click', copyNumber)
}

function copyNumber(ev){
  if(ev.type === 'touchstart') ev.preventDefault()
  navigator.clipboard.writeText(document.querySelector('#my-phone-number').innerText)
  ev.currentTarget.innerText='Copiado!'
  ev.currentTarget.classList.add('copied')
  if(document.querySelector('button#copy-number-button')){
      setTimeout(()=>{
        document.querySelector('#copy-number-button').innerText='Copiar'
        document.querySelector('#copy-number-button').classList.remove('copied')
      },3000)
  }
}