console.log("welcome")
//initializing the variables
let songIndex=0;
let audioElement=new Audio('./asserts/Audio/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById("myProgressBar");
let gif=document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songItem'));//because this is an collection of html elements we can't apply for each
let songs=[
    {songName:"Monna Kanipinchavu",filePath:"./asserts/Audio/1.mp3",coverPath:"./asserts/images/cover1.jpeg"},
    {songName:"edojarugutundi",filePath:"./asserts/Audio/2.mp3",coverPath:"./asserts/images/cover2.jpeg"},
    {songName:"Naalona Pongenu",filePath:"./asserts/Audio/3.mp3",coverPath:"./asserts/images/cover1.jpeg"},
    {songName:"O Shanthi Shanthi",filePath:"./asserts/Audio/4.mp3",coverPath:"./asserts/images/cover1.jpeg"},
    {songName:"OOosupodu",filePath:"./asserts/Audio/5.mp3",coverPath:"./asserts/images/cover2.jpeg"},

]

songItems.forEach((element,i) => {
    // console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
});
//handling play/pause events
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-solidfa-circle-play');
        gif.style.opacity=1;
    }
   })
//listening to events
audioElement.addEventListener('timeupdate',()=>{
    // console.log('timeupdate');
    //updating seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);//getting value of progress in percentage//parseInt parses an string arguments and returns an integer//parses-analyzing and converting a code to an internal format that a run time environment can actually run
    // console.log(progress);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;//getting the value in duration to get curremnt time
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`./asserts/Audio/${songIndex}.mp3`;
        console.log(audioElement.src);
        audioElement.element=0;//cuz playing new song
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById("previous").addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex -=1;
    }
    audioElement.src=`./asserts/Audio/${songIndex}.mp3`;
    console.log(audioElement.src);
    audioElement.element=0;//cuz playing new song
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById("next").addEventListener('click',()=>{
    if(songIndex>=5){
        songIndex=0;
    }
    else{
        songIndex +=1;
    }
    audioElement.src=`./asserts/Audio/${songIndex}.mp3`;
    console.log(audioElement.src);
    audioElement.element=0;//cuz playing new song
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})