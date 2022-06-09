import WaveSurfer from 'wavesurfer.js';

  const wavesurfer = WaveSurfer.create({
      scrollParent: true,
      normalize: true,
      container: document.querySelector('#waveform'),
      waveColor: '#D9DCFF',
      progressColor: '#ff7700',
      cursorColor: '#fff',
      barWidth: 3,
      barRadius: 3,
      cursorWidth: 1,
      height: 20 ,
      barGap: 3,
  });
function headerVisulationWaveSurfer({playbtn, play_pause, arrow, clPlayer, clAudio, waveform, wave}) {

    
    
    const cardBlock  = document.querySelector(playbtn), 
          btnPlay = document.querySelector(play_pause), 
          iconArrow = btnPlay.querySelector(arrow),
          player = document.querySelector(clPlayer),
          audio = player.querySelector(clAudio), 
          waveDiv = document.getElementById(waveform),
          waveTag = waveDiv.querySelector(wave);
    
    let mouseDown = false; 
    
    wavesurfer.setMute(true);
    
    
    cardBlock.addEventListener("click", (e) => {
      const target = e.target;
      if(target == btnPlay) {
        wavesurfer.playPause();
      }else if(target == iconArrow) {
        wavesurfer.playPause();
      }
     
    });
    
    
    // waveDiv.addEventListener("click", () => {
    //   audio.currentTime = wavesurfer.getCurrentTime();
    // });
    
    // waveTag.addEventListener('click', () => {
    //   audio.currentTIme = wavesurfer.getCurrentTime();
    // });
    
    waveTag.style.cursor = "pointer";
    
    wavesurfer.load('audio/song1.mp3');
}

export { wavesurfer };
export default headerVisulationWaveSurfer;