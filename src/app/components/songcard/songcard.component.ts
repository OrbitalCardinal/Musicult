import { Component, Input } from '@angular/core';
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
