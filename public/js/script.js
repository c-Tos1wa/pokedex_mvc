const closeButton = document.getElementById('close');
const message = document.getElementById('msg');

closeButton.addEventListener( "click", () =>{
  message.style.display = 'none';
})

setTimeout(() => {
  message.style.display = "none"
}, 5000)

