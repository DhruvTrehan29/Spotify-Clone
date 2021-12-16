console.log("Welcome to Spotify");
let songIndex=0;
let gif=document.getElementById('gif');
let SongNameBottom = document.getElementById('SongNameBottom');
let myProgressBar=document.getElementById('myProgressBar');
let audioElement=new Audio('1.mp3')
let songPlay=document.getElementById('songPlay');
let songItem=Array.from(document.getElementsByClassName('song-item'));


let songs=[
    {songName:"Kaise Hua",filePath:"1.mp3",coverPath:"covers/1.jpg" },
    {songName:"maroon",filePath:"2.mp3",coverPath:"covers/2.jpg" },
    {songName:"Avicii",filePath:"3.mp3",coverPath:"covers/3.jpg" },
    {songName:"Bekhayali",filePath:"4.mp3",coverPath:"covers/4.jpg" },
    {songName:"Ranjha",filePath:"5.mp3",coverPath:"covers/5.jpg" },
    {songName:"Dil",filePath:"6.mp3",coverPath:"covers/6.jpg" },
    {songName:"Goat",filePath:"7.mp3",coverPath:"covers/7.jpg" },
    {songName:"Na ja",filePath:"8.mp3",coverPath:"covers/8.jpg" },
    {songName:"Compition",filePath:"9.mp3",coverPath:"covers/9.jpg" },
    {songName:"Oh meri heere ve",filePath:"10.mp3",coverPath:"covers/10.jpg" },
    {songName:"Title Track",filePath:"11.mp3",coverPath:"covers/1.jpg" },
    {songName:"Raatan",filePath:"12.mp3",coverPath:"covers/1.jpg" }
]
songItem.forEach((element,i)=>{
element.getElementsByTagName("img")[0].src=songs[i].coverPath;
element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
});
songPlay.addEventListener('click',()=>{
if(audioElement.paused||audioElement.currentTime<=0){
    audioElement.play();
    songPlay.classList.remove('fa-play-circle');
    songPlay.classList.add('fa-pause-circle');
   gif.style.opacity=1;
}
else{
    audioElement.pause();
    songPlay.classList.remove('fa-pause-circle');
    songPlay.classList.add('fa-play-circle');
    gif.style.opacity=0;
}
});
audioElement.addEventListener('timeupdate',()=>{
console.log('time update');
let progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
myProgressBar.value=progress;
});
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;

});
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName("songplaymusic")).forEach((element)=>{
element.classList.remove('fa-pause-circle');
element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName("songplaymusic")).forEach((element)=>{
element.addEventListener('click',(e)=>{
makeAllPlays();
songIndex=parseInt(e.target.id)
e.target.classList.remove('fa-play-circle');
e.target.classList.add('fa-pause-circle');
audioElement.src=`${songIndex+1}.mp3`
SongNameBottom.innerText=songs[songIndex].songName;
audioElement.currentTime=0;
audioElement.play();
gif.style.opacity = 1;
songPlay.classList.remove('fa-play-circle');
songPlay.classList.add('fa-pause-circle');
});
});
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=11){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `${songIndex+1}.mp3`;
    SongNameBottom.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    songPlay.classList.remove('fa-play-circle');
    songPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `${songIndex+1}.mp3`;
    SongNameBottom.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    songPlay.classList.remove('fa-play-circle');
    songPlay.classList.add('fa-pause-circle');
})
