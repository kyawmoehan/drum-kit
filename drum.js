// paly sound function
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    
    if(!audio) return; //? stop the function from running all together
    audio.currentTime = 0; //? rewind to the start audio
    audio.play();

    key.classList.add('playing');
}

// remove transition
function removeTransition(e) {
    if(e.propertyName != 'transform') return;
    this.classList.remove('playing');
}

function init() {
    window.addEventListener('keydown', playSound);

    const keys = document.querySelectorAll('.key');
    Array.from(keys).forEach( key => {
        key.addEventListener('transitionend', removeTransition);
    });
}

// start main
init();

