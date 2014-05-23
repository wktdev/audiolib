audioContext = new webkitAudioContext;

function AudioObj(fileDirectory) {
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


    soundObj.play = function(volumeVal) {
        var volume = audioContext.createGainNode();
        volume.gain.value = volumeVal;
        var playSound = audioContext.createBufferSource();
        playSound.buffer = soundObj.soundToPlay;
        playSound.connect(volume);
        volume.connect((audioContext.destination))
        playSound.start(0)
    }

    return soundObj;

}