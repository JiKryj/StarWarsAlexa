window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
console.log('dzialam')

const ALEXA = new SpeechRecognition();
const przycisk = document.querySelector('input');

//ALEXA.start uruchamia nasluchiwanie
przycisk.addEventListener('click', () => ALEXA.start());
ALEXA.addEventListener('result', function (e){
    console.log('You underestimate my power!')
    console.dir(e)
});
ALEXA.addEventListener('end', function(){
    console.log(':D:D::D::D')
})