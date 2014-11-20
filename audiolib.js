function audioFileLoader(fileDirectory) {
    var soundObj = {};
    soundObj.fileDirectory = fileDirectory;

    var getSound = new XMLHttpRequest();
    getSound.open("GET", soundObj.fileDirectory, true);
    getSound.responseType = "arraybuffer";
    getSound.onload = function() {
        audioContext.decodeAudioData(getSound.response, function(buffer) {
            soundObj.soundToPlay = buffer;

        });
    }

    getSound.send();


    soundObj.play = function() {
        var playSound = audioContext.createBufferSource();
        playSound.buffer = soundObj.soundToPlay;
        playSound.connect(audioContext.destination)
        playSound.start(audioContext.currentTime)
    }

    return soundObj;

};

// Example 
var snare = audioFileLoader("snare.mp3");

window.addEventListener("click",snare.play,false)
