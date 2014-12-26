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


function audioBatchLoader(obj) {

    for (prop in obj) {
        obj[prop] = audioFileLoader(obj[prop])

    }
    return obj

}

//________________________________________________________ Example 

// var snare = audioFileLoader("snare.mp3");
// window.onclick = function(){sound.snare.play(audioContext.currentTime)}



//_________________________________________________________Example
// var sound = audioBatchLoader({
//     kick: "kick.mp3",
//     snare: "snare.mp3",
//     hihat: "hihat.mp3",
//     shaker: "shaker.mp3"

// })
// window.onclick = function(){sound.snare.play(audioContext.currentTime)}
