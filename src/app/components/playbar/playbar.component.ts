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
    new Song('1','Feel Good Inc.', 'Demon Days', 30000, 'Gorillaz', true, '../../assets/img/gorillazTestCover.jpg', "../../../assets/audio/Feel Good Inc..mp3"),
    new Song('2','Smell Like Teen Spirit', 'Nevermind', 30000, 'Nirvana', false, '../../assets/img/Nirvana-Nevermind-Album-Cover.jpg', "../../../assets/audio/Smells Like Teen Spirit.mp3"),
    new Song('3','Los Malaventurados No Lloran', 'Amantes Suntamentes', 30000, 'PXNDX', false, '../../assets/img/panda.jpg', "../../../assets/audio/Panda - Los Malaventurados No Lloran (Audio).mp3"),
    new Song('4','MAGIC!', 'MAGIC!', 30000, 'Rude', true, '../../assets/img/rude-magic.jpg', "../../../assets/audio/Rude - Magic! (Audio).mp3"),
    new Song('5','Pay No Mind', 'Adventures', 30000, 'Madeon', false, '../../assets/img/madeon_adventure.jpg', "../../../assets/audio/Madeon - Pay No Mind (ft. Passion Pit).mp3"),
    new Song('6','Take U There', 'Skrillex and Diplo present Jack Ü', 30000, 'Jack U', true, '../../assets/img/jacku.jpg', "../../../assets/audio/Skrillex and Diplo - Take Ü There (feat. Kiesza)  [Audio].mp3"),
    new Song('7','The Less I Know The Better', 'Currents', 30000, 'Tame Impala', true, '../../assets/img/currents.jpg', "../../../assets/audio/Tame Impala - The Less I Know The Better (Official Audio).mp3"),
    new Song('8','Hotline Bling', 'Hotline Bling', 30000, 'Drake', true, '../../assets/img/Drake_Hotline_Bling.png', "../../../assets/audio/Drake- Hotline Bling (Lyric Video).mp3"),
    new Song('9','The Wolf', 'Bounce Into The Music', 30000, 'Siames', false, '../../assets/img/siames.jpg', "../../../assets/audio/SIAMÉS  The Wolf.mp3"),
    new Song('10','Si veo a Tu mamá', 'YHLQMDLG', 30000, 'Bad Bunny', true, '../../assets/img/YHLQMDLG.png', "../../../assets/audio/Bad Bunny - Si Veo A Tu Mama (Audio Official)   YHLQMDLG.mp3"),
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
