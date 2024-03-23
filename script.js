// initialize the variable
let songindex = 0;
let audioElement = new Audio("song/2.mp3");
let masterPlay = document.getElementById("masterPlay");
let mysong = document.getElementById("mysong");
let songItem = Array.from(document.getElementsByClassName("songItem"));
let song = [
  { songname: "Salam ishq", filePath: "song/1.mp3", coverPath: "cover/1.jpg" },
  { songname: "Teri qasam", filePath: "song/2.mp3", coverPath: "cover/2.jpg" },
  { songname: "Teri yaad", filePath: "song/3.mp3", coverPath: "cover/3.jpg" },
  { songname: "Bhula dena", filePath: "song/4.mp3", coverPath: "cover/4.jpg" },
  { songname: "Alveda tujy", filePath: "song/5.mp3", coverPath: "cover/5.jpg" },
  { songname: "Ruk jana ma", filePath: "song/6.mp3", coverPath: "cover/6.jpg" },
  { songname: "Aik aik sah", filePath: "song/7.mp3", coverPath: "cover/7.jpg" },
];

masterPlay.addEventListener('click', () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-pause-circle");
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-circle-play");
  }
});

audioElement.addEventListener("timeupdate", () => {
  // update progrees bar

  progres = parseInt((audioElement.currentTime / audioElement.duration) * 100);

  mysong.value = progres;
});

// chanege progrees bar

mysong.addEventListener("change", () => {
  audioElement.currentTime = (mysong.value * audioElement.duration) / 100;
});

songItem.forEach((element, i) => {
  ;
  element.getElementsByTagName("img")[0].src = song[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = song[i].songname;
});
const makeAllplays = () => {
  Array.from(document.getElementsByClassName('songItemPlay')).forEach(
    (element) => {
      element.classList.remove("fa-circle-pause");
      element.classList.add("fa-circle-play");
    }
  );
};

Array.from(document.getElementsByClassName('songItemPlay')).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllplays();
      index = parseInt(e.target.id);
      e.target.classList.remove("fa-circle-play");
      e.target.classList.add("fa-circle-pause");
      audioElement.src = `song/${index + 1}.mp3`;
      audioElement.currentTime = 0;
      audioElement.play();

      masterPlay.classList.remove('fa-play-circle');
      masterPlay.classList.add('fa-pause-circle');
    });
  }
);
