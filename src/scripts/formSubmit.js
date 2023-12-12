export async function formPreventDefault(){
  document.querySelector('.form').addEventListener('submit', event=>{
    event.preventDefault() // Cancel page update
    showSuccessMessage()

    setTimeout(()=>{
      showSuccessMessage() // return to the user that erverything went ok
    },2000)
  })
}

function showSuccessMessage(){
  document.querySelector('#email-success').classList.toggle('hide')
}