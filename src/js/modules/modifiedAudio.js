import { data } from "../data/dataSoung";
import {wavesurfer} from "./headerAudio";



function modifiedAudio({diskImg, audioMp3, soung1, songName,songKinds}) {
    const META_DATA = data[soung1];
    const disk_Img = document.getElementById(diskImg),
    audio_Mp3 = document.getElementById(audioMp3),
    songs = document.getElementById(soung1),
    song_Name = document.getElementById(songName), 
    song_Kinds = document.getElementById(songKinds);
    

    songs.addEventListener("click", () => {
        song_Name.innerHTML = META_DATA.soungName;
        song_Kinds.innerHTML = META_DATA.soungFilter;
        audio_Mp3.setAttribute("src", META_DATA.audioSrc);
        disk_Img.setAttribute("src", META_DATA.diskImg);
        wavesurfer.load(META_DATA.audioSrc);

    });


    
}

export default modifiedAudio;