function soundMusic(soundAudio, audio) {
    const sound_Audio = document.querySelector(soundAudio), 
            tagI = sound_Audio.querySelector(".fa-volume-high"),
            audioTag = document.querySelector(audio); 

    const newIconOff = document.createElement("i"); 
    newIconOff.setAttribute("class", "fa-solid fa-volume-xmark");

    tagI.addEventListener("click", () => {
        audioTag.muted = true;
        if(tagI.classList.contains("active")) {
            tagI.classList.add("hiden");
            newIconOff.classList.remove("hiden");
            newIconOff.classList.add("active"); 
            
        }
        
        sound_Audio.append(newIconOff);
        
    });
    
    newIconOff.addEventListener("click", () => {
        audioTag.muted = false;
        if(newIconOff.classList.contains("active")) {
            tagI.classList.remove("hiden");
            newIconOff.classList.add("hiden"); 
            
        }
    });




}

export default soundMusic;