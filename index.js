buttonList=document.querySelectorAll(".drum");

buttonList.forEach((buttonItem => {
        buttonItem.addEventListener("click", function (){

            var audio = new Audio('sounds/crash.mp3');

            audio.play();
        })
    }
))


