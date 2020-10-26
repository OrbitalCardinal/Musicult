import { Component} from '@angular/core';
import { Song } from 'src/app/models/songs.model';

@Component({
  selector: 'songcard',
  templateUrl: './songcard.component.html',
  styleUrls: ['./songcard.component.css']
})

export class SongcardComponent {
  songs: Song[] = [
    new Song('Feel Good Inc.', 'Demon Days', 30000, 'Gorillaz', true, '../../assets/img/gorillazTestCover.jpg'),
    new Song('Smell Like Teen Spirit', 'Nevermind', 30000, 'Nirvana', false, '../../assets/img/Nirvana-Nevermind-Album-Cover.jpg'),
    new Song('Los Malaventurados No Lloran', 'Amantes Suntamentes', 30000, 'PXNDX', false, '../../assets/img/panda.jpg'),
    new Song('MAGIC!', 'MAGIC!', 30000, 'Rude', true, '../../assets/img/rude-magic.jpg'),
    new Song('Pay No Mind', 'Adventures', 30000, 'Madeon', false, '../../assets/img/madeon_adventure.jpg'),
    new Song('Take U There', 'Skrillex and Diplo present Jack Ü', 30000, 'Jack U', true, '../../assets/img/jacku.jpg'),
    new Song('The Less I Know The Better', 'Currents', 30000, 'Tame Impala', true, '../../assets/img/currents.jpg'),
    new Song('Hotline Bling', 'Hotline Bling', 30000, 'Drake', true, '../../assets/img/Drake_Hotline_Bling.png'),
    new Song('The Wolf', 'Bounce Into The Music', 30000, 'Siames', false, '../../assets/img/siames.jpg'),
    new Song('Si veo a Tu mamá', 'YHLQMDLG', 30000, 'Bad Bunny', true, '../../assets/img/YHLQMDLG.png'),
  ]

  slide_carousel(event) {
    var id_name: String = event['target'].id;
    const carousel: HTMLElement = document.querySelector('.song-carousel');

    if (id_name == 'song-next') {
      carousel.scrollLeft += carousel.offsetWidth;
    } else {
      carousel.scrollLeft -= carousel.offsetWidth;
    }
  }

}
