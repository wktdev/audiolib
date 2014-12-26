

#Web Audio API File Loader

A simple abstraction to load audio files individually or as a "batch"

Example:

> var snare = audioFileLoader("snare.mp3");
> snare.play();


Example:

> var sound = audioBatchLoader({
     kick: "kick.mp3",
     snare: "snare.mp3",
     hihat: "hihat.mp3",
     shaker: "shaker.mp3"

> })


sound.kick.play()




