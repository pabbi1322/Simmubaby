// shadow main effect

var text = document.getElementById('text')
var shadow = '';
for(var i = 0; i < 350; i++)
{
    shadow +=(shadow? ',':'')+ i*1+'px '+ i*1+'px 0 #01ded3';
}
text.style.textShadow = shadow;

// animation main text

const typedTextSpan = document.querySelector(".typed-text");

const textArray = ["YOU SWEETY"];
const typingDelay = 100;
const erasingDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if(charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    }
    else{
        // erase
    }
}

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(type, newTextDelay + 250);
})



