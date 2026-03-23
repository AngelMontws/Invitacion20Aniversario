document.getElementById('playButton').addEventListener('click', function() {
    var audio = document.getElementById('audio');
    audio.play();
    var invitation = document.querySelector('.invitation');
    invitation.style.visibility = 'visible';
    invitation.classList.add('animate-in');
    this.style.display = 'none';
});