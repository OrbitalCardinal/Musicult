import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'songcard',
  templateUrl: './songcard.component.html',
  styleUrls: ['./songcard.component.css']
})

export class SongcardComponent {
  songs: String[] = [
    'Melancholy Hill',
    'Feel Good Inc.',
    'Kids With Guns',
    'Tranz',
    'Clint Eastwood',
    'Andromeda',
    'Demon Days',
    'Melancholy Hill',
    'Feel Good Inc.',
    'Kids With Guns',
    'Tranz',
    'Clint Eastwood',
    'Andromeda',
    'Demon Days',
  ];

  slide_carousel(event) {
    var id_name: String = event['target'].id;
    const carousel: HTMLElement = document.querySelector('.song-carousel');

    if(id_name == 'song-next') {
      carousel.scrollLeft += carousel.offsetWidth;
    } else {
      carousel.scrollLeft -= carousel.offsetWidth;
    }
  }

}
