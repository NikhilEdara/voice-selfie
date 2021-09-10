var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start()
{
document.getElementById("textbox").innerHTML = "";
recognition.start();
}
recognition.onresult = function(event) {
console.log(event);
var Content = event.results[0][0].transcript;
document.getElementById("textbox").innerHTML = Content;
console.log(Content);
speak();
}
function speak(){
    var synth = window.speechSynthesis;
speak_data = document.getElementById("textbox").innerHTML;
var utterThis = new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis);
Webcam.attach(camera);
setTimeout(function(){
    take_selfie();
    Save();
},5000);
}
camera=document.getElementById("camera");

Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
 });

function take_selfie(){
Webcam.snap(function(QNA){
    document.getElementById("result").innerHTML='<img id="x" src="'+QNA+'"/>';
});
}
function Save(){
 saves = document.getElementById("z");
 images = document.getElementById("x").src;
 saves.href=images;
 saves.click();
};