// alert("Hello")

function cn(){
    // alert("Hello")
    let text = document.getElementById("text");
    // alert(text);
    if((text.value=="")){
        alert("Enter text.")
        return;
    }
    else{
        let speech = new SpeechSynthesisUtterance(text.value);
        // console.log(speech)
        speechSynthesis.speak(speech)
    }
}