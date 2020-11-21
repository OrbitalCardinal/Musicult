import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Song } from 'src/app/models/songs.model';

@Component({
  selector: 'songcard',
  templateUrl: './songcard.component.html',
  styleUrls: ['./songcard.component.css']
})

export class SongCardComponent {

  constructor(private _route: ActivatedRoute, private _router: Router) { };
  songs: Song[] = [
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

  @Input()
  ID: string;

  slide_carousel(event: HTMLElement) {
    var id_name: String = event['target'].id;
    const carousel: HTMLElement = document.getElementById(this.ID);

    if (id_name == 'song-next') {
      carousel.scrollLeft += carousel.offsetWidth;
    } else {
      carousel.scrollLeft -= carousel.offsetWidth;
    }
  }

  playSong(id) {
    this._router.navigate([], {
      queryParams: {
        id: id
      }
     });
  }

}
