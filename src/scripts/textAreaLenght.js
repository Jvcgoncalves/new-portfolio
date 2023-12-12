export async function limitTextAreaLenght(){
  const text_area = document.getElementById('email-message')

  text_area.addEventListener('input',ev=>{
    console.log(ev)
    if(ev.currentTarget.value.length >= 1999) {
      console.log(ev.currentTarget.value.length)
      ev.preventDefault()
      document.getElementById('text-limit').classList.remove('hide') // return to the user that the character limit has been reached
      setTimeout(()=>{
        document.getElementById('text-limit').classList.add('hide') 

      },2000)
    }
  })
}