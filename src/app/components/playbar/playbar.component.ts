import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';
import { Song } from 'src/app/models/songs.model';

@Component({
  selector: 'playbar',
  templateUrl: './playbar.component.html',
  styleUrls: ['./playbar.component.css']
})
export class Playbar implements OnInit {
  constructor(private _route: ActivatedRoute, private _router: Router) { 
    this._route.queryParams.subscribe(params => {
      if(this._route.snapshot.queryParams["id"] != null) {
        console.log(this._router.url)
        this.actualSongId = params["id"];
        this.songCover = this.songs.find(value => value.id == this.actualSongId).cover.toString();  
        this.songTitle = this.songs.find(value => value.id == this.actualSongId).title.toString();  
        this.songArtist = this.songs.find(value => value.id == this.actualSongId).artist.toString();  
        this.songAudio = this.songs.find(value => value.id == this.actualSongId).audioPath.toString();
        if(this.audio != null) {
          this.pauseSong(this.audio);
          this.loadSong(this.songAudio);
          this.volumeControl(this.audio["volume"]);
          this.fillControl();
          this.playSong(this.audio);
        }
      }

    });
  };
  
  songs = [
    new Song("1", "About Me", "NCS Release", 30000, "Unknown", true, "../../assets/img/About me.jpg", "../../assets/audio/About Me.mp3"),
    new Song("2", "You Made A Monster", "NCS Release",30000, "Barren Gates",true, "../../assets/img/Barren gates - you made a monster.jpg","../../assets/audio/Barren Gates - You Made A Monster [NCS Release].mp3"),
    new Song("3","Ride", "NCS release",30000, "Claro", true, '../../assets/img/Claro - ride.jpg', "../../assets/audio/Clarx - Ride [NCS Release].mp3"),
    new Song("4", "Closer", "NCS release", 30000, "Unknown", true, "../../assets/img/Closer.jpg","../../assets/audio/Closer.mp3"),
    new Song("5","Control","NCS Release", 30000, "Unknown", true, "../../assets/img/Control.jpg", "../../assets/audio/Control.mp3"),
    new Song("6", "Devil", "NCS Release", 30000, "Unknown", true, "../../assets/img/Devil.jpg", "../../assets/audio/Devil.mp3"),
    new Song("7", "Dimensions", "NCS Release", 30000, "Unknown", true, "../../assets/img/Dimensions.jpg", "../../assets/audio/Dimensions.mp3"),
    new Song("8", "Take it Down", "NCS Release", 30000, "Unknown",true, '../../assets/img/Facading - take it down.jpg', "../../assets/audio/Facading - Take it Down [NCS Release].mp3"),
    new Song("9", "Incomplete", "NCS Release", 30000, "Unknown", true, "../../assets/img/Incomplete.jpg", "../../assets/audio/Incomplete (Muzzy Remix).mp3"),
    new Song("10", "Lush", "NCS Release", 30000,"Unkown",true, "../../assets/img/Lush.jpg", "../../assets/audio/Lush.mp3"),
    new Song("11", "Never have I felt this", "NCS Release", 30000, "Unkown", true, "../../assets/img/Never have I felt this.jpg", "../../assets/audio/Never Have I Felt This.mp3"),
    new Song("12", "Lonely Way", "NCS Release", 30000, "Rival", true, "../../assets/img/Rival - lonely way.jpg", "../../assets/audio/Rival - Lonely Way (ft. Caravn) [NCS Release].mp3"),
    new Song("13", "Shockwave", "NCS Release", 30000, "Unkown", true, "../../assets/img/Shockwave.jpg", "../../assets/audio/Shockwave.mp3"),
    new Song("14", "Something More", "NCS Release", 30000, "Unknown", true, "../../assets/img/Something more.jpg", "../../assets/audio/Something More.mp3"),
    new Song("15", "Stronger (Champion Remix)", "NCS Release", 30000, "Unknown", true, "../../assets/img/Stronger.jpg", "../../assets/audio/Stronger (Champion Remix).mp3"),
    new Song("16", "Time", "NCS Release", 30000, "Syn Cole", true, "../../assets/img/Syn cole - time.jpg", "../../assets/audio/Syn Cole - Time [NCS Release].mp3"),
    new Song("17", "Watch The World Burn", "NCS Release", 30000, "Unknown", true, "../../assets/img/Watch the world burn.jpg", "../../assets/audio/Watch The World Burn.mp3"),
    new Song("18", "Get $", "NSC Release", 30000, "NCS Release", true, "../../assets/img/Wateva & di eight - get.jpg", "../../assets/audio/WATEVA & Fiveight - Get $ [NCS Release].mp3"),
    new Song("19","Lights", "NCS Release", 30000, "Whales", true, "../../assets/img/Whales - lights.jpg", "../../assets/audio/Whales - Lights [NCS Release].mp3"),
    new Song("20", "Whole", "NCS Release", 30000, "Unknown", true, "../../assets/img/Whole.jpg", "../../assets/audio/Whole.mp3")
  ];


  ngOnInit() {
    this.loadSong(this.songAudio);
    this.fillControl();
    this.volumeControl(this.audio["volume"]);
  }

  audio: HTMLAudioElement;
  isPaused: boolean = true;
  actualSongId: string;
  songCover: string;
  songTitle: string;
  songArtist: string;
  songAudio: string;

  fillControl() {
    var fill = document.getElementById('fill');
    // fill["value"] = "0";
    var currentTimeDiv = document.getElementById('currentTime');
    var totalTimeDiv = document.getElementById("totalTime");
    var localFunAudio = this.audio; //Reference to global audio

    fill.oninput = function (value) {
      //Update bar fill
      var sliderValue = value.target["value"];
      var max = value.target["max"];
      var calc = (sliderValue * 100) / max;
      fill.style.background = "linear-gradient(to right, white 0%, white " + calc + "%, #005DA8 " + calc + "%,#005DA8 100%)";

      // Update audio time
      localFunAudio["currentTime"] = sliderValue;

      // Update current time text
      currentTimeDiv.innerHTML = pad((fill["value"] / 60) % 60) + ":" + pad(fill["value"] % 60);

    }

    this.audio.addEventListener('timeupdate', function (value) {
      fill["value"] = value.target["currentTime"]; // Advance in time
      // Fill played part
      var sliderValue = fill["value"];
      var max = fill["max"];
      var calc = (sliderValue * 100) / max;
      fill.style.background = "linear-gradient(to right, white 0%, white " + calc + "%, #005DA8 " + calc + "%,#005DA8 100%)";

      // Update current time text
      currentTimeDiv.innerHTML = pad((fill["value"] / 60) % 60) + ":" + pad(fill["value"] % 60);
    });

    //Internal function
    function pad(number) {
      number = Math.floor(number);
      if (number < 10) {
        return "0" + number;
      } else {
        return number;
      }
    }
  }

  volumeControl(audio) {
    var volume = document.getElementById('volume');
    // Fill played part
    if(this.audio == null) {
      var sliderValue = volume["value"]; 
    } else {
      var sliderValue = this.audio.volume; 
    }
    var max = volume["max"];
    var calc = (sliderValue * 100) / max; //Get percentage
    volume.style.background = "linear-gradient(to right, white 0%, white " + calc + "%, #005DA8 " + calc + "%,#005DA8 100%)";
    var localFunAudio = this.audio;

    volume.oninput = function(value) {
      // Fill played part
      var sliderValue = value.target["value"];
      var max = value.target["max"];
      var calc = (sliderValue * 100) / max; //Get percentage
      volume.style.background = "linear-gradient(to right, white 0%, white " + calc + "%, #005DA8 " + calc + "%,#005DA8 100%)";

      //Set audio volume
      localFunAudio.volume = sliderValue;
    }
  }

  loadSong(audioPath: string) {
    var slider = document.getElementById('fill');
    var currentTime = document.getElementById('currentTime');
    var totalTime = document.getElementById('totalTime');
    var totalTimeDiv = document.getElementById("totalTime");
    var audio = new Audio(audioPath);
    audio.preload = "metadata";
    if(this.audio != null) {
      audio.volume = this.audio.volume;
    }
    audio.id = "audioController";
    audio.onloadedmetadata = function () {
      slider["max"] = audio.duration;
      totalTimeDiv.innerHTML = pad((audio.duration / 60) % 60) + ":" + pad(audio.duration % 60);
    }
    this.audio = audio;

    //Internal function
    function pad(number) {
      number = Math.floor(number);
      if (number < 10) {
        return "0" + number;
      } else {
        return number;
      }
    }
  }

  playSong(audio: HTMLAudioElement) {
    console.log(this.actualSongId);
    audio.play();
    this.isPaused = false;
  }

  pauseSong(audio: HTMLAudioElement) {
    audio.pause();
    this.isPaused = true;
  }

}
