
    const logo = document.querySelector('.logo');
    const monkeySound = document.getElementById('monkey-sound');
    logo.addEventListener('click', () => {
        logo.classList.add('shake');
        monkeySound.currentTime = 0;
        monkeySound.play();
        setTimeout(() => bigLogo.classList.remove('shake'), 500);
    });
