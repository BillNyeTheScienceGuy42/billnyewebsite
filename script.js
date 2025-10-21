
    const bigLogo = document.querySelector('.big-logo');
    const monkeySound = document.getElementById('monkey-sound');
    bigLogo.addEventListener('click', () => {
        bigLogo.classList.add('shake');
        monkeySound.currentTime = 0;
        monkeySound.play();
        setTimeout(() => bigLogo.classList.remove('shake'), 500);
    });
