function openFileChooser() {
    document.getElementById('file-input').click();
}

document.getElementById('file-input').addEventListener('change', function(event) {
    var files = event.target.files;
    var file = files[0];

    // Create an audio player element
    var audioPlayer = document.getElementById('audio-player');
    audioPlayer.src = URL.createObjectURL(file);

    // Play the audio
    audioPlayer.play();
});